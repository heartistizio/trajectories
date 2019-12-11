process.env.JEST_JUNIT_OUTPUT = './build/reports/junit.xml';
module.exports = {
  testMatch: ['**/?(*.)(spec).ts'],
  reporters: ['default', 'jest-junit'],
  coverageDirectory: './build/reports/coverage',
  coverageReporters: ['html', 'cobertura'],
  collectCoverageFrom: [
    '!**/*.spec.ts',
    '!**/*.md',
    'src/**/*.ts',
    'tooling/**/*.js',
  ],
  rootDir: './',
  moduleNameMapper: {
    '#config': '<rootDir>/src/configs/config',
    '#data/(.*)': '<rootDir>/src/data/$1',
    '#logger': '<rootDir>/src/log/logger',
    '#profiles': '<rootDir>/src/profiles',
    '#routes/(.*)': '<rootDir>/src/routes/$1',
    '#types': '<rootDir>/src/types',
    '#utils/(.*)': '<rootDir>/src/utils/$1',
    '#src/(.*)': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['/integration-tests/', '<rootDir>/build/'],
  preset: 'ts-jest',
};
