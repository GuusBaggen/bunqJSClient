import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
import PaginationOptions from "../Types/PaginationOptions";
import { ShareInviteMonetaryAccountResponsePutStatus } from "../Types/ShareInviteMonetaryAccountResponse";
export default class ShareInviteMonetaryAccountResponse implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     * @param {number} userId
     * @param {number} shareInviteMonetaryAccountResponseId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    get(userId: number, shareInviteMonetaryAccountResponseId: number, options?: PaginationOptions): Promise<void>;
    /**
     * @param {number} userId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    list(userId: number, options?: PaginationOptions): Promise<any>;
    /**
     * @param {number} userId
     * @param {number} shareInviteMonetaryAccountResponseId
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @returns {Promise<{}>}
     */
    put(userId: number, shareInviteMonetaryAccountResponseId: number, status: ShareInviteMonetaryAccountResponsePutStatus): Promise<any>;
}
