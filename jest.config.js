/* eslint-disable prettier/prettier */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.tsx',
    '!<rootDir>/pages/_app.tsx',
  ],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
