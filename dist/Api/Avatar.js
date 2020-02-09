"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Avatar {
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter) {
        this.ApiAdapter = ApiAdapter;
        this.Session = ApiAdapter.Session;
    }
    async post(attachmentUuid, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/avatar", "POST");
        // do the actual call
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.post(`/v1/avatar`, {
            attachment_public_uuid: attachmentUuid
        }, {}, {}, axiosClient));
        return response.Response[0].Uuid.uuid;
    }
}
exports.default = Avatar;
