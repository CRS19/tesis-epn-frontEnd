module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["../node_modules/(?!@kushki)"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["../jest.setup.tsx"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: "jsdom",
  coverageDirectory: "../coverage",
  collectCoverageFrom: ["<rootDir>/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "src/store/actionTypes",
    "src/templates",
    "src/shared/enums",
    "src/shared/interfaces",
    "src/shared/constants",
    "src/shared/utils",
    "index.(ts|tsx)",
    ".(interfaces|styles).(ts|tsx)",
  ],
};
