import LoggerInterface from "./Interfaces/LoggerInterface";
import RequestLimiter, { IRequestLimiterCallback } from "./RequestLimiter";
export declare type RequestLimitConfig = {
    run: (callable: IRequestLimiterCallback) => Promise<any>;
    limiter: RequestLimiter;
    method: string;
    limiterKey: string;
    endpoint: string;
};
export declare type RequestLimitConfigCollection = Record<string, RequestLimitConfig>;
export declare type RequestLimitProxyType = false | any;
export declare type RequestLimitProxyTypes = RequestLimitProxyType[];
export default class RequestLimitFactory {
    private limiters;
    private logger;
    private enabledProxies;
    private axiosClients;
    /**
     * Counts up to use proxies equally
     */
    private proxyCounter;
    /**
     * @param loggerInterface
     * @param enabledProxies
     */
    constructor(loggerInterface: LoggerInterface, enabledProxies?: RequestLimitProxyTypes);
    /**
     * @param enabledProxies
     */
    setEnabledProxies(enabledProxies?: RequestLimitProxyTypes): void;
    /**
     * @param {string} endpoint
     * @param {string} method
     * @param {boolean} noProxy
     * @returns {RequestLimitConfig}
     */
    create(endpoint: string, method?: string, noProxy?: boolean): RequestLimitConfig;
    /**
     * @param {string} limiterKey
     * @returns {any}
     */
    getLimiter(limiterKey: string): RequestLimitConfig | false;
    /**
     * @param {string} limiterKey
     * @returns {boolean}
     */
    removeLimiter(limiterKey: string): boolean;
    getAllLimiters(): Record<string, RequestLimitConfig>;
    clearLimiters(): void;
    /**
     * Returns a random index for the available proxies
     */
    private getProxyIndex;
    /**
     * Requires the socks-proxy-agent library or returns existing loaded value
     */
    private getSocksProxyAgent;
}
