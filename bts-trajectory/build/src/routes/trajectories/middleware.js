"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _logger_1 = require("#logger");
const _config_1 = require("#config");
const guards_1 = require("#src/guards");
const random_from_object_1 = require("#utils/random-from-object");
const LOG = _logger_1.getLogger(__filename);
exports.trajectoriesMiddleware = async (ctx, next) => {
    const { query: { profile }, } = ctx;
    const profileCreator = guards_1.isAllowedProfile(profile)
        ? _config_1.config.profiles[profile]
        : Object.values(_config_1.config.profiles)[random_from_object_1.randomFromObject(_config_1.config.profiles)];
    LOG.info(profileCreator);
    ctx.body = profileCreator();
    await next();
};
//# sourceMappingURL=middleware.js.map