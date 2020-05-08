const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("Minimum word length hyphenation", () => {
  test("Should hyphenate long word", () => {
    expect(hyphenate("beautiful")).toBe("beau-ti-ful");
  });

  test("Should NOT hyphenate long word when option minWordLength = 9", () => {
    expect(hyphenate("beautiful", { minWordLength: 10 })).toBe("beautiful");
  });

  test("Should NOT hyphenate short word of 4 chars", () => {
    expect(hyphenate("lady")).toBe("lady");
  });
});
