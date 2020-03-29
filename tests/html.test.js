const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns);
});

describe("HTML syntax hyphenation", () => {
  test("Should hyphenate HTML syntax by default", () => {
    expect(hyphenate("<beautiful>", { hyphenChar: "-" })).toBe("<beau-ti-ful>");
  });

  test("Should NOT hyphenate HTML syntax, if `html` option set to true", () => {
    expect(hyphenate("<beautiful>", { html: true, hyphenChar: "-" })).toBe(
      "<beautiful>"
    );
  });

  test("Should NOT recognize text as HTML, if `<` char is followed by space", () => {
    expect(hyphenate("< beautiful >", { html: true, hyphenChar: "-" })).toBe(
      "< beau-ti-ful >"
    );
  });
});
