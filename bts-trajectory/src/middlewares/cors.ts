import { Middleware } from 'koa';
import corsMiddleware, { Options } from '@koa/cors';

export const createCorsMiddleware = ({
  origin,
  allowMethods,
  allowHeaders,
  maxAge,
}: Options = {}): Middleware =>
  // @ts-ignore
  corsMiddleware({ origin, allowMethods, allowHeaders, maxAge });
