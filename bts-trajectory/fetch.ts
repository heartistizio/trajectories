import rpn from 'request-promise-native';
import createError from 'http-errors';
import { getLogger } from '#log/logger';

const LOG = getLogger(__filename);

const request = rpn.defaults({
  transform: (body, response) => {
    if (body && typeof body === 'string') {
      try {
        response.body = JSON.parse(body);
      } catch (e) {
        LOG.debug('Failed to parse response body as JSON: %s', response.body);
      }
    }

    return response;
  },
});

export const fetch = async (url: string) => {
  const requestOptions = {
    timeout: undefined,
    url,
    resolveWithFullResponse: true,
    simple: false,
  };

  LOG.debug(`Going to fetch ${url} with timeout ${requestOptions.timeout}`);

  const response = await request(requestOptions).catch(err => {
    throw new Error(
      `Failed to fetch ${url} with timeout ${requestOptions.timeout} because ${err.message}`,
    );
  });

  if (response.statusCode === 401) {
    throw createError(
      response.statusCode,
      `Failed to fetch ${url}. 
        It seems that you're not authorized, please check your configuration according to
        https://github.schibsted.io/smp-distribution/iris-core/blob/master/run-local.md#capi-account
        and try again.`,
    );
  }

  if (response.statusCode !== 200) {
    throw createError(
      response.statusCode,
      `Failed to fetch ${url} with status code: ${response.statusCode}`,
    );
  }

  return response.body;
};
