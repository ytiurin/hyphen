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
});
