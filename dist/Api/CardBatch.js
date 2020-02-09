"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardBatch {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param {cards[]} cards
     * @param options
     * @returns {Promise<any>}
     */
    async post(userId, cards, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/card-batch", "POST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post(`/v1/user/${userId}/card-batch`, {
            cards: cards
        }, {}, { isEncrypted: true }, axiosClient));
        return response.Response;
    }
}
exports.default = CardBatch;
