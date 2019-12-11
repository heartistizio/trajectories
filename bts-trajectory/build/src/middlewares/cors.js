"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@koa/cors"));
exports.createCorsMiddleware = ({ origin, allowMethods, allowHeaders, maxAge, } = {}) => cors_1.default({ origin, allowMethods, allowHeaders, maxAge });
//# sourceMappingURL=cors.js.map