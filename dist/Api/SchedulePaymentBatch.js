"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SchedulePaymentBatch {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {number} paymentId
     * @param options
     * @returns {Promise<void>}
     */
    async delete(userId, monetaryAccountId, paymentId, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/schedule-payment-batch", "DELETE");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.delete(`/v1/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${paymentId}`, {}, {}, axiosClient));
        return response.Response;
    }
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {PaymentRequestObject} paymentRequestObject
     * @param {Schedule} schedule
     * @param options
     * @returns {Promise<void>}
     */
    async post(userId, monetaryAccountId, paymentRequestObjectCollection, schedule, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/schedule-payment-batch", "POST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post(`/v1/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch`, {
            payments: paymentRequestObjectCollection,
            schedule: schedule
        }, {}, {}, axiosClient));
        return response.Response;
    }
}
exports.default = SchedulePaymentBatch;
