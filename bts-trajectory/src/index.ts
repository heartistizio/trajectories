import Koa from 'koa';
import { config } from '#config';
import { getLogger } from '#logger';
import { router } from '#routes/router';
import { createCorsMiddleware } from './middlewares/cors';

const LOG = getLogger(__filename);

const start = async () => {
  const server: Koa = new Koa();

  server.use(createCorsMiddleware());
  server.use(router.routes());
  server.listen(config.PORT);
};

start().catch((err: {}) => {
  LOG.fatal('Fatal error: %O', err);
  process.exit(2);
});
