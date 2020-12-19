module.exports = {
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
