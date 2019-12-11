import { router } from './router';

describe('router should contain the', () => {
  it('health check path', () => {
    expect(router.stack).toContainEqual(
      expect.objectContaining({
        path: '/v1/_internal/health',
      }),
    );
  });
});
