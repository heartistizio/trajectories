"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const _config_1 = require("#config");
const _logger_1 = require("#logger");
const router_1 = require("#routes/router");
const cors_1 = require("./middlewares/cors");
const LOG = _logger_1.getLogger(__filename);
const start = async () => {
    const server = new koa_1.default();
    server.use(cors_1.createCorsMiddleware());
    server.use(router_1.router.routes());
    server.listen(_config_1.config.PORT);
};
start().catch((err) => {
    LOG.fatal('Fatal error: %O', err);
    process.exit(2);
});
//# sourceMappingURL=index.js.map