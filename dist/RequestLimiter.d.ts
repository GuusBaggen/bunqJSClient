import { AxiosInstance } from "axios";
export interface IRequestLimiterCallback {
    (axiosClient: AxiosInstance): Promise<any>;
}
export default class RequestLimiter {
    private max_requests;
    private interval;
    private axiosClient;
    private requests;
    private lastRequest;
    private timer;
    private queue;
    constructor(max_requests: number, interval: number, axiosClient: AxiosInstance | false);
    /**
     * Wrap the callable given by the user and wrap it in a promise
     * @param callable
     * @returns {Promise<any>}
     */
    private wrapCallable;
    /**
     * Check if a new item from the queue should be called
     */
    private check;
    /**
     * Start the timer which updates and resets the limits
     */
    private setTimer;
    /**
     * Clear the timer
     */
    private clearTimer;
    /**
     * Run the request limit checker
     * @param callable
     * @returns {any}
     */
    run: any;
}
