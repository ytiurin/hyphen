const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("HTML syntax hyphenation", () => {
  test("Should NOT hyphenate HTML syntax, if `html` option set to true", () => {
    expect(hyphenate('<beautiful class="beautiful">')).toBe(
      '<beautiful class="beautiful">'
    );
  });

  test("Should NOT recognize text as HTML, if `<` char is followed by space", () => {
    expect(hyphenate("< beautiful >")).toBe("< beau-ti-ful >");
  });
});
