"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forge = require("node-forge");
const Sha256_1 = require("../Crypto/Sha256");
const HEADER_CLIENT_ENCRYPTION_HMAC = "X-Bunq-Client-Encryption-Hmac";
const HEADER_CLIENT_ENCRYPTION_IV = "X-Bunq-Client-Encryption-Iv";
const HEADER_CLIENT_ENCRYPTION_KEY = "X-Bunq-Client-Encryption-Key";
class EncryptRequestHandler {
    constructor(Session, loggerInterface, BunqJSClient) {
        this.BunqJSClient = BunqJSClient;
        this.Session = Session;
        this.logger = loggerInterface;
    }
    /**
     * Signs a request using our privatekey
     * @param {Request} request
     * @param {ApiAdapterOptions} options
     * @returns {Promise<string>}
     */
    async encryptRequest(request, options) {
        const body = JSON.stringify(request.requestConfig.data);
        const iv = forge.random.getBytesSync(16);
        const key = forge.random.getBytesSync(32);
        const encryptedAesKey = await Sha256_1.encryptString(key, this.Session.serverPublicKey, true);
        const encryptedBody = this.getEncryptedBody(key, iv, body);
        const hmacBytes = this.getBodyHmac(key, iv, encryptedBody);
        // set new body
        request.setData(Buffer.from(encryptedBody, "binary"));
        // disable request transform
        /* istanbul ignore next line - can't be tested since Moxios bypasses it */
        request.setOptions("transformRequest", (data) => {
            return data;
        });
        // set headers
        request.setHeader(HEADER_CLIENT_ENCRYPTION_HMAC, forge.util.encode64(hmacBytes));
        request.setHeader(HEADER_CLIENT_ENCRYPTION_IV, forge.util.encode64(iv));
        request.setHeader(HEADER_CLIENT_ENCRYPTION_KEY, forge.util.encode64(encryptedAesKey));
    }
    /**
     * @param {string} key
     * @param {string} iv
     * @param {string} body
     */
    getEncryptedBody(key, iv, body) {
        const cipher = forge.cipher.createCipher("AES-CBC", key);
        const buffer = forge.util.createBuffer(body, "raw");
        cipher.start({ iv: iv });
        cipher.update(buffer);
        cipher.finish();
        return cipher.output.getBytes();
    }
    /**
     * @param {string} key
     * @param {string} iv
     * @param {string} encryptedBody
     */
    getBodyHmac(key, iv, encryptedBody) {
        const mergedContent = iv + encryptedBody;
        const hmac = forge.hmac.create();
        hmac.start("sha1", key);
        hmac.update(mergedContent);
        return hmac.digest().getBytes();
    }
}
exports.default = EncryptRequestHandler;
