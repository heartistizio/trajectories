import Router from 'koa-router';
import { healthMiddleware } from './health';
import { trajectoriesMiddleware } from './trajectories/middleware';

export const router = new Router({ prefix: '/v1' });

router.get('/_internal/health', healthMiddleware as any);

router.get('/trajectories', trajectoriesMiddleware as any);
