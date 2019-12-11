import { Context, Next } from 'koa';
import { getLogger } from '#logger';
import { config } from '#config';
import { isAllowedProfile } from '#src/guards';
import { randomFromObject } from '#utils/random-from-object';

const LOG = getLogger(__filename);

export const trajectoriesMiddleware = async (ctx: Context, next: Next) => {
  const {
    query: { profile },
  } = ctx;

  const profileCreator = isAllowedProfile(profile)
    ? config.profiles[profile]
    : Object.values(config.profiles)[randomFromObject(config.profiles)];

  LOG.info(profileCreator);

  ctx.body = profileCreator();

  await next();
};
