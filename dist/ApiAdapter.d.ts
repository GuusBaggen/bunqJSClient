import { AxiosInstance } from "axios";
import BunqJSClient from "./BunqJSClient";
import Session from "./Session";
import LoggerInterface from "./Interfaces/LoggerInterface";
import ApiAdapterOptions from "./Types/ApiAdapterOptions";
import { Method } from "./Types/Method";
import Headers from "./Types/Headers";
import RequestLimitFactory from "./RequestLimitFactory";
import SignRequestHandler from "./HTTP/SignRequestHandler";
import EncryptRequestHandler from "./HTTP/EncryptRequestHandler";
import VerifyResponseHandler from "./HTTP/VerifyResponseHandler";
export declare const BUNQ_SERVER_SIGNATURE_HEADER_KEY = "X-Bunq-Server-Signature";
export declare const BUNQ_REQUEST_SIGNATURE_HEADER_KEY = "X-Bunq-Client-Signature";
export declare const BUNQ_REQUEST_AUTHENTICATION_HEADER_KEY = "X-Bunq-Client-Authentication";
export default class ApiAdapter {
    Session: Session;
    logger: LoggerInterface;
    BunqJSClient: BunqJSClient;
    RequestLimitFactory: RequestLimitFactory;
    SignRequestHandler: SignRequestHandler;
    EncryptRequestHandler: EncryptRequestHandler;
    VerifyResponseHandler: VerifyResponseHandler;
    language: string;
    region: string;
    geoLocation: string;
    constructor(Session: Session, loggerInterface: LoggerInterface, BunqJSClient: BunqJSClient);
    setup(): Promise<void>;
    /**
     * @param {string} url
     * @param headers
     * @param {ApiAdapterOptions} options
     * @param {AxiosInstance | false} axiosInstance
     * @returns {Promise<void>}
     */
    get(url: string, headers?: any, options?: ApiAdapterOptions, axiosInstance?: AxiosInstance | false): Promise<any>;
    /**
     * @param {string} url
     * @param headers
     * @param {ApiAdapterOptions} options
     * @param {AxiosInstance | false} axiosInstance
     * @returns {Promise<void>}
     */
    delete(url: string, headers?: any, options?: ApiAdapterOptions, axiosInstance?: AxiosInstance | false): Promise<any>;
    /**
     * @param {string} url
     * @param data
     * @param headers
     * @param {ApiAdapterOptions} options
     * @param {AxiosInstance | false} axiosInstance
     * @returns {Promise<void>}
     */
    post(url: string, data?: any, headers?: any, options?: ApiAdapterOptions, axiosInstance?: AxiosInstance | false): Promise<any>;
    /**
     * @param {string} url
     * @param data
     * @param headers
     * @param {ApiAdapterOptions} options
     * @param {AxiosInstance | false} axiosInstance
     * @returns {Promise<void>}
     */
    put(url: string, data?: any, headers?: any, options?: ApiAdapterOptions, axiosInstance?: AxiosInstance | false): Promise<any>;
    /**
     * @param {string} url
     * @param {string} method
     * @param data
     * @param headers
     * @param {ApiAdapterOptions} options
     * @param {AxiosInstance | false} axiosInstance
     * @returns {Promise<any>}
     */
    request(url: string, method?: Method, data?: any, headers?: Headers, options?: ApiAdapterOptions, axiosInstance?: AxiosInstance | false): Promise<any>;
    /**
     * Checks if the session is valid and waits for it to be refreshed
     * @returns {Promise<void>}
     */
    private sessionValidationCheck;
    /**
     * Attempts to improve the error data and defaults to rethrowing it
     * @param error
     */
    private requestErrorHandler;
}
