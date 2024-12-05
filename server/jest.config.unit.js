import commonConfig from './jest.config.js';

export default {
  ...commonConfig,
  testMatch: [
    '**/*.unit.test.{js,ts}'
  ],
  collectCoverageFrom: [
    '**/db/**/*.js',
    '**/libs/**/*.js',
    '**/middlewares/**/*.js',
    '**/routes/**/*.js',
    '**/services/**/*.js',
    '**/utils/**/*.js'
  ],
  coverageDirectory: 'coverage/unit'
};
