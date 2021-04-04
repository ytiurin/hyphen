const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("Minimum word length hyphenation", () => {
  test("Should hyphenate word of length >= 5 by default", () => {
    expect(hyphenate("beautiful")).toBe("beau-ti-ful");
  });

  test("Should NOT hyphenate word of length 9, when option minWordLength = 10", () => {
    expect(hyphenate("beautiful", { minWordLength: 10 })).toBe("beautiful");
  });

  test("Should NOT hyphenate word of length < 5 by default", () => {
    expect(hyphenate("lady")).toBe("lady");
  });

  test("Should hyphenate word of length 4, when option minWordLength = 4", () => {
    expect(hyphenate("lady", { minWordLength: 4 })).toBe("la-dy");
  });
});
