"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShareInviteMonetaryAccountResponse {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param {number} shareInviteMonetaryAccountResponseId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    async get(userId, shareInviteMonetaryAccountResponseId, options = {
        count: 200,
        newer_id: false,
        older_id: false
    }) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-response", "GET");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/share-invite-monetary-account-response/${shareInviteMonetaryAccountResponseId}`, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    async list(userId, options = {
        count: 200,
        newer_id: false,
        older_id: false
    }) {
        const params = {};
        if (options.count !== undefined) {
            params.count = options.count;
        }
        if (options.newer_id !== false && options.newer_id !== undefined) {
            params.newer_id = options.newer_id;
        }
        if (options.older_id !== false && options.older_id !== undefined) {
            params.older_id = options.older_id;
        }
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-response", "LIST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/share-invite-monetary-account-response`, {}, {
            axiosOptions: {
                params: params
            }
        }, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} shareInviteMonetaryAccountResponseId
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @returns {Promise<{}>}
     */
    async put(userId, shareInviteMonetaryAccountResponseId, status) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-response", "PUT");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.put(`/v1/user/${userId}/share-invite-monetary-account-response/${shareInviteMonetaryAccountResponseId}`, {
            status: status
        }, {}, {}, axiosClient));
        return response.Response;
    }
}
exports.default = ShareInviteMonetaryAccountResponse;
