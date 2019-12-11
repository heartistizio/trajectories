import { test } from './logger';

const { toLoggerName, isLogLevel } = test;

describe('src/logger', () => {
  describe('isLogLevel()', () => {
    it('returns true if the string is a valid log level', () => {
      expect(isLogLevel('info')).toEqual(true);
    });
    it('returns false if the string is not a valid log level', () => {
      expect(isLogLevel('inf')).toEqual(false);
    });
    it('returns false if the provided log level is not a string', () => {
      expect(isLogLevel(['info'])).toEqual(false);
    });
    it('returns false if no log level is provided', () => {
      expect(isLogLevel(undefined)).toEqual(false);
    });
  });

  describe('toLoggerName', () => {
    it('Converts the file name to a relative path from the root', () => {
      expect(toLoggerName(__filename)).toEqual('src/log/logger.spec.ts');
    });
    it('Does not convert names that do not resemble a file name', () => {
      expect(toLoggerName('hello world')).toEqual('hello world');
    });
  });
});
