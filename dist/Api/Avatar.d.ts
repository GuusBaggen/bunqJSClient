import ApiAdapter from "../ApiAdapter";
import Session from "../Session";
import ApiEndpointInterface from "../Interfaces/ApiEndpointInterface";
export default class Avatar implements ApiEndpointInterface {
    ApiAdapter: ApiAdapter;
    Session: Session;
    /**
     * @param {ApiAdapter} ApiAdapter
     */
    constructor(ApiAdapter: ApiAdapter);
    post(attachmentUuid: string, options?: any): Promise<string>;
}
