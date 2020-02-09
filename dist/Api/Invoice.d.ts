import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
import PaginationOptions from "../Types/PaginationOptions";
export default class Invoice implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     * @param {number} userId
     * @param {number} invoiceId
     * @param options
     * @returns {Promise<any>}
     */
    get(userId: number, invoiceId: number, options?: any): Promise<any>;
    /**
     * @param {number} userId
     * @param {PaginationOptions} options
     * @returns {Promise<any>}
     */
    list(userId: number, options?: PaginationOptions): Promise<any>;
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {number} invoiceId
     * @param options
     * @returns {Promise<any>}
     */
    getMonetaryAccount(userId: number, monetaryAccountId: number, invoiceId: number, options?: any): Promise<any>;
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {PaginationOptions} options
     * @returns {Promise<any>}
     */
    listMonetaryAccount(userId: number, monetaryAccountId: number, options?: PaginationOptions): Promise<any>;
}
