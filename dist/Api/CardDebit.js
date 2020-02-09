"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardDebit {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param {string} name
     * @param {string} description
     * @param {CounterpartyAlias} alias
     * @param {CardType} cardType
     * @param {PinCodeAssignmentCollection} assignments
     * @param {number} monetaryAccountIdFallback
     * @param options
     * @returns {Promise<any>}
     */
    async post(userId, name, description, alias = null, cardType = null, assignments = null, monetaryAccountIdFallback = null, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card-debit", "POST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post(`/v1/user/${userId}/card-debit`, {
            second_line: description,
            name_on_card: name,
            alias: alias,
            type: cardType,
            pin_code_assignment: assignments,
            monetary_account_id_fallback: monetaryAccountIdFallback
        }, {}, { isEncrypted: true }, axiosClient));
        return response.Response;
    }
}
exports.default = CardDebit;
