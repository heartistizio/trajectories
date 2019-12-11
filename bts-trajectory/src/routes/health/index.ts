import { Context, Next } from 'koa';

export const healthMiddleware = async (ctx: Context, next: Next) => {
  ctx.type = 'text/plain';
  ctx.status = 200;
  ctx.body = 'OK';
  await next();
};
