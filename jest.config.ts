export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  // This will tell Jest to transform `node-fetch` using Babel
  transformIgnorePatterns: [
    "/node_modules/(?!node-fetch)"
  ]
};
