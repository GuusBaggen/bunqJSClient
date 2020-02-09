"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
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
    async get(userId, cardId, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card", "GET");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/card/${cardId}`, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {CardListOptions} options
     * @returns {Promise<void>}
     */
    async list(userId, options = {
        count: 25,
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
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card", "LIST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/card`, {}, {
            axiosOptions: {
                params: params
            }
        }, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} cardId
     * @param {string} pinCode
     * @param {string} activationCode
     * @param {string} status
     * @param {Amount} cardLimit
     * @param {Limit} limits
     * @param {MagStripePermission} magStripePermission
     * @param {CountryPermissionCollection} countryPermissions
     * @param {PinCodeAssignmentCollection} pinCodeAssignment
     * @param {number} monetaryAccountIdFallback
     * @param options
     * @returns {Promise<any>}
     */
    async update(userId, cardId, pinCode = null, activationCode = null, status = null, cardLimit = null, atmLimit = null, countryPermissions = null, pinCodeAssignment = null, monetaryAccountIdFallback = null, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card", "PUT");
        const data = {};
        if (pinCode)
            data.pin_code = pinCode;
        if (activationCode)
            data.activation_code = activationCode;
        if (status)
            data.status = status;
        if (cardLimit)
            data.card_limit = cardLimit;
        if (atmLimit)
            data.card_limit_atm = atmLimit;
        if (countryPermissions)
            data.country_permissions = countryPermissions;
        if (pinCodeAssignment)
            data.pin_code_assignment = pinCodeAssignment;
        if (monetaryAccountIdFallback)
            data.monetary_account_id_fallback = monetaryAccountIdFallback;
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.put(`/v1/user/${userId}/card/${cardId}`, data, {}, { isEncrypted: true }, axiosClient));
        return response.Response;
    }
}
exports.default = Card;
