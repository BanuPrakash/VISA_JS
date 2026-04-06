const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.d.ts', // Exclude type definitions
    '!src/index.js', // Exclude entry points
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10, // Fails if more than 10 uncovered statements exist
    },
  },
  coverageReporters: ['text', 'lcov'],
};

module.exports = config;
