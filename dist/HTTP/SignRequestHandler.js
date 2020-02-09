"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sha256_1 = require("../Crypto/Sha256");
class SignRequestHandler {
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
    async signRequest(request, options) {
        // manually include the user agent
        /* istanbul ignore else - can't be tested for browser */
        if (typeof navigator === "undefined") {
            const nodeUserAgent = `Node-${process.version}-bunqJSClient`;
            request.setHeader("User-Agent", nodeUserAgent);
        }
        else {
            request.setHeader("User-Agent", navigator.userAgent);
        }
        if (options.isEncrypted || options.includesFile) {
            // overwrite transformRequest
            request.setOption("transformRequest", (data) => {
                return data;
            });
        }
        // serialize the data
        let data = "";
        let dataEncoding = "raw";
        const appendDataWhitelist = ["POST", "PUT", "DELETE"];
        if (options.includesFile) {
            const requestData = request.data;
            data = requestData.toString("binary");
            request.setData(requestData);
        }
        else if (options.isEncrypted) {
            const requestData = request.data;
            data = requestData.toString("binary");
            request.setData(requestData);
        }
        else if (appendDataWhitelist.some(item => item === request.method)) {
            data = JSON.stringify(request.data);
            dataEncoding = "utf8";
        }
        // sign the body with our private key
        const signature = await Sha256_1.signString(data, this.Session.privateKey, dataEncoding);
        /* istanbul ignore next line - can't be tested for react native */
        if (typeof navigator !== "undefined" && navigator.product !== "ReactNative") {
            // remove the user agent again if we're in a browser env where we aren't allowed to
            request.removeHeader("User-Agent");
        }
        // set the signature
        request.setSigned(signature);
    }
}
exports.default = SignRequestHandler;
