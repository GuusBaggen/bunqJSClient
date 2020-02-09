/**
 * Hashes a string using sha256
 * @param {string} string
 * @param {string} encoding = "raw"
 * @returns {Promise<string>}
 */
export declare const stringToHash: (string: string, encoding?: string) => Promise<any>;
/**
 * Encrypts a string using a publicKey
 * @param {string} data
 * @param publicKey
 * @returns {Promise<string>}
 */
export declare const encryptString: (data: string, publicKey: any, raw?: boolean) => Promise<any>;
/**
 * Signs a string using a privateKey
 * @param {string} data
 * @param privateKey
 * @param {string} encoding = "raw"
 * @returns {Promise<string>}
 */
export declare const signString: (data: string, privateKey: any, encoding?: string) => Promise<any>;
/**
 * Verifies if a string was signed by a public key
 * @param {string} data
 * @param publicKey
 * @param {string} signature
 * @param {string} encoding = "raw"
 * @returns {Promise<string>}
 */
export declare const verifyString: (data: string, publicKey: any, signature: string, encoding?: string) => Promise<any>;
