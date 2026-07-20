module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts', '**/libs/**/*.test.ts', '**/exercises/**/*.test.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
};
