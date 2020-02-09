import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
import PaginationOptions from "../Types/PaginationOptions";
import CountryPermissionCollection from "../Types/CountryPermissionCollection";
import PinCodeAssignmentCollection from "../Types/PinCodeAssignmentCollection";
import Amount from "../Types/Amount";
export default class Card implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     * @param {number} userId
     * @param options
     * @returns {Promise<any>}
     */
    get(userId: number, cardId: number, options?: any): Promise<any>;
    /**
     * @param {number} userId
     * @param {CardListOptions} options
     * @returns {Promise<void>}
     */
    list(userId: number, options?: PaginationOptions): Promise<any>;
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
    update(userId: number, cardId: number, pinCode?: string, activationCode?: string, status?: string, cardLimit?: Amount, atmLimit?: Amount, countryPermissions?: CountryPermissionCollection, pinCodeAssignment?: PinCodeAssignmentCollection, monetaryAccountIdFallback?: number, options?: any): Promise<any>;
}
