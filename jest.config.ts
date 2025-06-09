import nextJest from "next/jest.js";
import type { Config } from "jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@hooks$": "<rootDir>/hooks/index.ts",
    "^@components/shared$": "<rootDir>/components/shared/index.ts",
    "^@components/navigation$": "<rootDir>/components/navigation/index.ts",
    "^@components/layout$": "<rootDir>/components/layout/index.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(customJestConfig);
