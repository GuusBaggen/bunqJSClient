"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const RequestLimiter_1 = require("./RequestLimiter");
class RequestLimitFactory {
    /**
     * @param loggerInterface
     * @param enabledProxies
     */
    constructor(loggerInterface, enabledProxies = [false]) {
        this.limiters = {};
        this.enabledProxies = [];
        this.axiosClients = [];
        /**
         * Counts up to use proxies equally
         */
        this.proxyCounter = 0;
        this.logger = loggerInterface;
        this.setEnabledProxies(enabledProxies);
    }
    /**
     * @param enabledProxies
     */
    setEnabledProxies(enabledProxies = [false]) {
        this.enabledProxies = enabledProxies;
        this.axiosClients = [];
        this.logger.debug(`Loaded ${enabledProxies.length} proxies`);
        // go through each proxy config
        this.enabledProxies.forEach((enabledProxy) => {
            if (enabledProxy === false) {
                // standard axios client
                this.axiosClients.push(axios_1.default.create({}));
            }
            else {
                // get the library only when required for this type
                const SocksProxyAgent = this.getSocksProxyAgent();
                // create the socks proxy client
                const httpsAgent = new SocksProxyAgent(enabledProxy);
                // create axios client using the socks proxy client to handle the requests
                this.axiosClients.push(axios_1.default.create({ httpsAgent }));
            }
        });
    }
    /**
     * @param {string} endpoint
     * @param {string} method
     * @param {boolean} noProxy
     * @returns {RequestLimitConfig}
     */
    create(endpoint, method = "GET", noProxy = false) {
        // default to proxy "0" which is our standard IP
        let limiterKey = `${endpoint}:${method}:0`;
        let axiosClient = axios_1.default;
        if (noProxy === false) {
            const randomIndex = this.getProxyIndex();
            limiterKey = `${endpoint}:${method}:${randomIndex}`;
            // set axiosClient for the selected index
            axiosClient = this.axiosClients[randomIndex];
        }
        if (this.limiters[limiterKey]) {
            return this.limiters[limiterKey];
        }
        let rateLimit = 3;
        switch (method) {
            case "PUT":
                rateLimit = 2;
                break;
            case "POST":
            case "DELETE":
                rateLimit = 5;
                break;
            case "GET":
            case "LIST":
                rateLimit = 3;
                break;
            default:
                throw new Error("Invalid method given");
        }
        const limiter = new RequestLimiter_1.default(rateLimit, 3350, axiosClient);
        const limiterConfig = {
            limiterKey,
            limiter,
            // wrap run in the object so it is reverse-compatible
            run: limiter.run,
            method,
            endpoint
        };
        this.limiters[limiterKey] = limiterConfig;
        return this.limiters[limiterKey];
    }
    /**
     * @param {string} limiterKey
     * @returns {any}
     */
    getLimiter(limiterKey) {
        if (this.limiters[limiterKey]) {
            return this.limiters[limiterKey];
        }
        return false;
    }
    /**
     * @param {string} limiterKey
     * @returns {boolean}
     */
    removeLimiter(limiterKey) {
        if (this.limiters[limiterKey]) {
            delete this.limiters[limiterKey];
            return true;
        }
        return false;
    }
    getAllLimiters() {
        return this.limiters;
    }
    clearLimiters() {
        this.limiters = {};
    }
    /**
     * Returns a random index for the available proxies
     */
    getProxyIndex() {
        const currentIndex = this.proxyCounter % this.enabledProxies.length;
        this.proxyCounter += 1;
        return currentIndex;
    }
    /**
     * Requires the socks-proxy-agent library or returns existing loaded value
     */
    getSocksProxyAgent() {
        return require("socks-proxy-agent");
    }
}
exports.default = RequestLimitFactory;
