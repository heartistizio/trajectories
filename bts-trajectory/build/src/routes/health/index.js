"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthMiddleware = async (ctx, next) => {
    ctx.type = 'text/plain';
    ctx.status = 200;
    ctx.body = 'OK';
    await next();
};
//# sourceMappingURL=index.js.map