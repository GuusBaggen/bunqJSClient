import BunqJSClient from "../BunqJSClient";
import Session from "../Session";
import LoggerInterface from "../Interfaces/LoggerInterface";
import Request from "./Request";
import ApiAdapterOptions from "../Types/ApiAdapterOptions";
export default class EncryptRequestHandler {
    Session: Session;
    logger: LoggerInterface;
    BunqJSClient: BunqJSClient;
    constructor(Session: Session, loggerInterface: LoggerInterface, BunqJSClient: BunqJSClient);
    /**
     * Signs a request using our privatekey
     * @param {Request} request
     * @param {ApiAdapterOptions} options
     * @returns {Promise<string>}
     */
    encryptRequest(request: Request, options: ApiAdapterOptions): Promise<void>;
    /**
     * @param {string} key
     * @param {string} iv
     * @param {string} body
     */
    private getEncryptedBody;
    /**
     * @param {string} key
     * @param {string} iv
     * @param {string} encryptedBody
     */
    private getBodyHmac;
}
