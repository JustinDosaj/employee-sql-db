module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"], // Only run test files in __tests__ folder
  clearMocks: true, // Clear mocks between tests
  setupFiles: ["dotenv/config"], // Load environment variables
};