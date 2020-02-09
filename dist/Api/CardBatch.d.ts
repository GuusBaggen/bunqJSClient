import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
export default class CardBatch implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    /**
     * @param {number} userId
     * @param {cards[]} cards
     * @param options
     * @returns {Promise<any>}
     */
    post(userId: number, cards: any[], options?: any): Promise<any>;
}
