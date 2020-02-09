"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShareInviteMonetaryAccountInquiry {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param {number} accountId
     * @param {number} shareInviteMonetaryAccountInquiryId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    async get(userId, accountId, shareInviteMonetaryAccountInquiryId, options = {
        count: 200,
        newer_id: false,
        older_id: false
    }) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-inquiry", "GET");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/monetary-account/${accountId}/share-invite-monetary-account-inquiry/${shareInviteMonetaryAccountInquiryId}`, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} accountId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    async list(userId, accountId, options = {
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
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-inquiry", "LIST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/monetary-account/${accountId}/share-invite-monetary-account-inquiry`, {}, {
            axiosOptions: {
                params: params
            }
        }, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {CounterpartyAlias} counterpartyAlias
     * @param {ShareInviteMonetaryAccountInquiryPostShareDetail} shareDetail
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @param {ShareInviteMonetaryAccountInquiryPostOptions} options
     * @returns {Promise<{}>}
     */
    async post(userId, monetaryAccountId, counterpartyAlias, shareDetail, status = "PENDING", options = {
        share_type: "STANDARD"
    }) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-inquiry", "POST");
        const postData = {
            counter_user_alias: counterpartyAlias,
            share_detail: shareDetail,
            status: status
        };
        if (options.share_type) {
            postData.share_type = options.share_type;
        }
        if (options.start_date) {
            postData.start_date = options.start_date;
        }
        if (options.end_date) {
            postData.end_date = options.end_date;
        }
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post(`/v1/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry`, postData, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {number} shareInviteMonetaryAccountInquiryId
     * @param {CounterpartyAlias} counterpartyAlias
     * @param {ShareInviteMonetaryAccountInquiryPostShareDetail} shareDetail
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @param {ShareInviteMonetaryAccountInquiryPostOptions} options
     * @returns {Promise<{}>}
     */
    async put(userId, monetaryAccountId, shareInviteMonetaryAccountInquiryId, counterpartyAlias, shareDetail, status = "PENDING", options = {
        share_type: "STANDARD"
    }) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-inquiry", "PUT");
        const postData = {
            counter_user_alias: counterpartyAlias,
            share_detail: shareDetail,
            status: status
        };
        if (options.share_type) {
            postData.share_type = options.share_type;
        }
        if (options.start_date) {
            postData.start_date = options.start_date;
        }
        if (options.end_date) {
            postData.end_date = options.end_date;
        }
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.put(`/v1/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry/${shareInviteMonetaryAccountInquiryId}`, postData, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {number} shareInviteMonetaryAccountInquiryId
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @returns {Promise<{}>}
     */
    async putStatus(userId, monetaryAccountId, shareInviteMonetaryAccountInquiryId, status) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/share-invite-monetary-account-inquiry", "PUT");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.put(`/v1/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry/${shareInviteMonetaryAccountInquiryId}`, {
            status: status
        }, {}, {}, axiosClient));
        return response.Response;
    }
}
exports.default = ShareInviteMonetaryAccountInquiry;
