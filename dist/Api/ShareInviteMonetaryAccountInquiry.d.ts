import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
import PaginationOptions from "../Types/PaginationOptions";
import CounterpartyAlias from "../Types/CounterpartyAlias";
import { ShareInviteMonetaryAccountInquiryPostOptions, ShareInviteMonetaryAccountInquiryPostShareDetail, ShareInviteMonetaryAccountInquiryPostStatus } from "../Types/ShareInviteMonetaryAccountInquiry";
export default class ShareInviteMonetaryAccountInquiry implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     * @param {number} userId
     * @param {number} accountId
     * @param {number} shareInviteMonetaryAccountInquiryId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    get(userId: number, accountId: number, shareInviteMonetaryAccountInquiryId: number, options?: PaginationOptions): Promise<void>;
    /**
     * @param {number} userId
     * @param {number} accountId
     * @param {PaginationOptions} options
     * @returns {Promise<void>}
     */
    list(userId: number, accountId: number, options?: PaginationOptions): Promise<void>;
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {CounterpartyAlias} counterpartyAlias
     * @param {ShareInviteMonetaryAccountInquiryPostShareDetail} shareDetail
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @param {ShareInviteMonetaryAccountInquiryPostOptions} options
     * @returns {Promise<{}>}
     */
    post(userId: number, monetaryAccountId: number, counterpartyAlias: CounterpartyAlias, shareDetail: ShareInviteMonetaryAccountInquiryPostShareDetail, status?: ShareInviteMonetaryAccountInquiryPostStatus, options?: ShareInviteMonetaryAccountInquiryPostOptions): Promise<any>;
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
    put(userId: number, monetaryAccountId: number, shareInviteMonetaryAccountInquiryId: number, counterpartyAlias: CounterpartyAlias, shareDetail: ShareInviteMonetaryAccountInquiryPostShareDetail, status?: ShareInviteMonetaryAccountInquiryPostStatus, options?: ShareInviteMonetaryAccountInquiryPostOptions): Promise<any>;
    /**
     * @param {number} userId
     * @param {number} monetaryAccountId
     * @param {number} shareInviteMonetaryAccountInquiryId
     * @param {ShareInviteMonetaryAccountInquiryPostStatus} status
     * @returns {Promise<{}>}
     */
    putStatus(userId: number, monetaryAccountId: number, shareInviteMonetaryAccountInquiryId: number, status: ShareInviteMonetaryAccountInquiryPostStatus): Promise<any>;
}
