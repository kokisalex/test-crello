module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/static/'],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '**/*.js',
  ],
  transform: {
    '\\.js$': './jestTransformer.js',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'jest-transform-css'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
};
