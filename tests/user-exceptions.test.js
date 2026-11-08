const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, {
    hyphenChar: "-",
    exceptions: ["h-e-l-l-o"]
  });
});

describe("User exceptions", () => {
  test("Factory function option should work", () => {
    const text = "hello";
    const predictable = "h-e-l-l-o";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("User function option should work", () => {
    const text = "worry";
    const exception = "w-o-r-r-y";
    const predictable = "w-o-r-r-y";

    expect(hyphenate(text, { exceptions: [exception] })).toBe(predictable);
  });

  test("User function option should not break factory function option", () => {
    const text = "hello";
    const exception = "w-o-r-r-y";
    const predictable = "h-e-l-l-o";

    expect(hyphenate(text, { exceptions: [exception] })).toBe(predictable);
  });

  test("User function option should rewrite factory function option", () => {
    const text = "hello";
    const exception = "h-ello";
    const predictable = "h-ello";

    expect(hyphenate(text, { exceptions: [exception] })).toBe(predictable);
  });

  test("User exceptions should not break patterns exceptions", () => {
    const text = "table project";
    const predictable = "ta-ble project";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("User exceptions should be case insensitive", () => {
    const text = "Hello HELLO";
    const exception = "h-ello";
    const predictable = "H-ello H-ELLO";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("Case insensitive user exceptions should keep every hyphen in place", () => {
    const text = "declaration Declaration DECLARATION";
    const exception = "de-cla-ra-tion";
    const predictable = "de-cla-ra-tion De-cla-ra-tion DE-CLA-RA-TION";

    expect(hyphenate(text, { exceptions: [exception] })).toBe(predictable);
  });

  test("Case insensitive user exceptions should not add a trailing hyphen", () => {
    const hyphenateFresh = createHyphenator(patterns, {
      hyphenChar: "-",
      exceptions: ["h-e-l-l-o"]
    });
    const text = "Hello";
    const predictable = "H-e-l-l-o";

    expect(hyphenateFresh(text)).toBe(predictable);
  });
});
