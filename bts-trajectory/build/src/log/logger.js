"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const bunyan_1 = require("bunyan");
const app = process.env.APP || 'local';
const rack = process.env.RACK || 'local';
const build = process.env.BUILD || 'local';
const release = process.env.RELEASE || 'local';
const projectRoot = path_1.default.resolve(__dirname, '..', '..');
const loggers = new Set();
const streams = [{ stream: process.stdout }];
const isLogLevel = (logLevel) => !!logLevel &&
    ['trace', 'debug', 'info', 'warn', 'error', 'fatal'].includes(logLevel);
const toLoggerName = (filename) => path_1.default.relative(projectRoot, filename);
exports.defaultLogLevel = isLogLevel(process.env.LOG_LEVEL)
    ? process.env.LOG_LEVEL
    : 'info';
exports.getLogger = (fileName, logLevel) => {
    const logger = bunyan_1.createLogger({
        name: toLoggerName(fileName),
        level: isLogLevel(logLevel) ? logLevel : exports.defaultLogLevel,
        serializers: bunyan_1.stdSerializers,
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
exports.addStream = (stream) => {
    streams.push(stream);
    loggers.forEach(logger => logger.addStream(stream));
};
exports.test = { isLogLevel, toLoggerName };
//# sourceMappingURL=logger.js.map