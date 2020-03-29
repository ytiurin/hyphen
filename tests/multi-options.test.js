const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns);
});

describe("Hyphenate function should produce different results when hyphenChar option change", () => {
  for (let i = 2; i--; ) {
    test("- should give beau-ti-ful", () => {
      expect(hyphenate("beautiful", { hyphenChar: "-" })).toBe("beau-ti-ful");
    });
    test("+ should give beau+ti+ful", () => {
      expect(hyphenate("beautiful", { hyphenChar: "+" })).toBe("beau+ti+ful");
    });
    test("% should give beau%ti%ful", () => {
      expect(hyphenate("beautiful", { hyphenChar: "%" })).toBe("beau%ti%ful");
    });
  }
});
