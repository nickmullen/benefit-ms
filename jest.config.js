/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],
  coverageThreshold: {
    './src/controllers': {
      branches: 71.42,
      functions: 77.77,
      lines: 92.82,
      statements: -6
    }
  }
};
