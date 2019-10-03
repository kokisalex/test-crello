module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/', '/build/', '/static/'],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '**/*.js',
  ],
  transform: { '\\.js': 'babel-jest' }
};
