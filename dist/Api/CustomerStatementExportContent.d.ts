import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
export default class CustomerStatementExportContent implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     *
     * @param options
     * @returns {Promise<Blob|Buffer>}
     */
    list(userId: number, accountId: number, customerStatementId: number, options?: any): Promise<Blob | ArrayBuffer>;
}
