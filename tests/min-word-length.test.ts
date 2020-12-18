import { createHyphenator } from "../src/create-hyphenator";
import enUs from "../patterns/en-us";

let hyphenate: ReturnType<typeof createHyphenator>;

beforeAll(() => {
  hyphenate = createHyphenator(enUs, { hyphenChar: "-" });
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
