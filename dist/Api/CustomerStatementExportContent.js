"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerStatementExportContent {
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
     * @returns {Promise<Blob|Buffer>}
     */
    async list(userId, accountId, customerStatementId, options = {}) {
        const limiter = this.ApiAdapter.RequestLimitFactory.create("/customer-statement-export/content", "LIST");
        const response = await limiter.run(async (axiosClient) => this.ApiAdapter.get(`/v1/user/${userId}/monetary-account/${accountId}/customer-statement/${customerStatementId}/content`, {}, {
            axiosOptions: {
                responseType: "arraybuffer"
            }
        }, axiosClient));
        // for browsers, wrap in Blob element
        /* istanbul ignore next line */
        if (typeof Blob === "function") {
            return new Blob([response]);
        }
        return response;
    }
}
exports.default = CustomerStatementExportContent;
