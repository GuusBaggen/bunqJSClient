"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeviceRegistration {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     *
     * @param options
     * @returns {Promise<any>}
     */
    async add(options = { description: "My Device", permitted_ips: [] }) {
        const postData = {
            description: options.description,
            secret: this.Session.apiKey
        };
        if (options.permitted_ips.length > 0) {
            postData["permitted_ips"] = options.permitted_ips;
        }
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/device-server", "POST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post("/v1/device-server", postData, {}, {
            skipSessionCheck: true
        }, axiosClient));
        // return the device id
        return response.Response[0].Id.id;
    }
    /**
     *
     * @param options
     * @returns {Promise<any>}
     */
    async get(options = { deviceId: null }) {
        if (options.deviceId === null) {
            // if none is set we default to our current deviceId
            options.deviceId = this.Session.deviceId;
        }
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/device-server", "GET");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/device-server/${options.deviceId}`, {}, {}, axiosClient));
        // return the device id
        return response.Response[0].Id.id;
    }
}
exports.default = DeviceRegistration;
