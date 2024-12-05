export default {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: [],
  transformIgnorePatterns: [
    '[/\\\\\\\\]node_modules[/\\\\\\\\].+\\\\.(js|ts)$'
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};
