const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("Reserved words hyphenation", () => {
  test("Should hyphenate constructor word correctly", () => {
    expect(hyphenate("constructor")).toBe("con-struc-tor");
  });
});