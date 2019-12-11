import path from 'path';
import Logger, {
  LogLevelString,
  createLogger,
  stdSerializers,
  Stream,
} from 'bunyan';

const app = process.env.APP || 'local';
const rack = process.env.RACK || 'local';
const build = process.env.BUILD || 'local';
const release = process.env.RELEASE || 'local';
const projectRoot = path.resolve(__dirname, '..', '..');
const loggers = new Set<Logger>();
const streams: Stream[] = [{ stream: process.stdout }];

const isLogLevel = (logLevel?: unknown): logLevel is LogLevelString =>
  !!logLevel &&
  ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].includes(
    logLevel as string,
  );

const toLoggerName = (filename: string): string =>
  path.relative(projectRoot, filename);

export const defaultLogLevel = isLogLevel(process.env.LOG_LEVEL)
  ? process.env.LOG_LEVEL
  : 'info';

export const getLogger = (
  fileName: string,
  logLevel?: LogLevelString,
): Logger => {
  const logger = createLogger({
    name: toLoggerName(fileName),
    level: isLogLevel(logLevel) ? logLevel : defaultLogLevel,
    serializers: stdSerializers,
    app,
    rack,
    build,
    release,
  });
  if (!loggers.has(logger)) {
    loggers.add(logger);
  }
  return logger;
};

export const addStream = (stream: Stream) => {
  streams.push(stream);
  loggers.forEach(logger => logger.addStream(stream));
};

export const test = { isLogLevel, toLoggerName };
