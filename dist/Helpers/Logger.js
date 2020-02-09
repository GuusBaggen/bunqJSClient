"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loglevel = require("loglevel");
// set logging level based on env
loglevel.setLevel(process.env.BUNQ_JS_CLIENT_LOG_LEVEL || process.env.NODE_ENV === "development" ? "trace" : "warn");
// export the logger
exports.default = loglevel;
