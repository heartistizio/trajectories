"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const health_1 = require("./health");
const middleware_1 = require("./trajectories/middleware");
exports.router = new koa_router_1.default({ prefix: '/v1' });
exports.router.get('/_internal/health', health_1.healthMiddleware);
exports.router.get('/trajectories', middleware_1.trajectoriesMiddleware);
//# sourceMappingURL=router.js.map