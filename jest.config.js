const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "spin.js": "<rootDir>/__mocks__/spinMock.js",
  }
};
module.exports = createJestConfig(customJestConfig);