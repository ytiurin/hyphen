import { createHyphenator } from "../src/create-hyphenator";
import enUs from "../patterns/en-us";

let hyphenate: ReturnType<typeof createHyphenator>;
let hyphenateHTML: ReturnType<typeof createHyphenator>;

beforeAll(() => {
  hyphenate = createHyphenator(enUs, { hyphenChar: "-" });
  hyphenateHTML = createHyphenator(enUs, { html: true, hyphenChar: "-" });
});

describe("HTML syntax hyphenation", () => {
  test("Should hyphenate HTML syntax by default", () => {
    expect(hyphenate("<beautiful>")).toBe("<beau-ti-ful>");
  });

  test("Should NOT hyphenate HTML syntax, if `html` option set to true", () => {
    expect(hyphenateHTML('<beautiful class="beautiful">')).toBe(
      '<beautiful class="beautiful">',
    );
  });

  test("Should NOT recognize text as HTML, if `<` char is followed by space", () => {
    expect(hyphenateHTML("< beautiful >")).toBe("< beau-ti-ful >");
  });
});
