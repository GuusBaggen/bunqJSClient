"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardName {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param options
     * @returns {Promise<any>}
     */
    async get(userId, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card-name", "GET");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/card-name`, {}, {}, axiosClient));
        return response.Response;
    }
}
exports.default = CardName;
