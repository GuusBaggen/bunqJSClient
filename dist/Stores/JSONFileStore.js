"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (fileLocation) => {
    const JSONStore = require("json-store");
    const store = JSONStore(fileLocation);
    return {
        get: (key) => store.get(key),
        set: (key, value) => store.set(key, value),
        remove: (key) => store.set(key, null)
    };
};
