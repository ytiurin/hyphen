const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate, hyphenateHTML;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
  hyphenateHTML = createHyphenator(patterns, { html: true, hyphenChar: "-" });
});

describe("HTML syntax hyphenation", () => {
  test("Should hyphenate HTML syntax by default", () => {
    expect(hyphenate("<beautiful>")).toBe("<beau-ti-ful>");
  });

  test("Should NOT hyphenate HTML syntax, if `html` option set to true", () => {
    expect(hyphenateHTML("<beautiful>")).toBe("<beautiful>");
  });

  test("Should NOT recognize text as HTML, if `<` char is followed by space", () => {
    expect(hyphenateHTML("< beautiful >")).toBe("< beau-ti-ful >");
  });
});
