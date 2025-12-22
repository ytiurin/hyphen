const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeEach(() => {
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

  test("Factory function option is case sensitive by default", () => {
    const textLower = "hello";
    const textCapitalized = "Hello";
    const textUpper = "HELLO"
    const predictableLower = "h-e-l-l-o";
    const predictableCapitalized = "Hel-lo";
    const predictableUPPER = "HEL-LO";
    expect(hyphenate(textLower)).toBe(predictableLower);
    expect(hyphenate(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenate(textUpper)).toBe(predictableUPPER);
    expect(hyphenate(textLower)).toBe(predictableLower);
    expect(hyphenate(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenate(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenate(textUpper)).toBe(predictableUPPER);
    expect(hyphenate(textLower)).toBe(predictableLower);
  });

  test("Factory function option works case insensitive", () => {
    const hyphenateWithCaseInsenstive = createHyphenator(patterns, {
      hyphenChar: "-",
      exceptions: ["h-e-l-l-o"],
      caseInsensitive: true,
    });
    const textLower = "hello";
    const textCapitalized = "Hello";
    const textUpper = "HELLO"
    const predictableLower = "h-e-l-l-o";
    const predictableCapitalized = "H-e-l-l-o";
    const predictableUPPER = "H-E-L-L-O";
    expect(hyphenateWithCaseInsenstive(textLower)).toBe(predictableLower);
    expect(hyphenateWithCaseInsenstive(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithCaseInsenstive(textUpper)).toBe(predictableUPPER);
    expect(hyphenateWithCaseInsenstive(textLower)).toBe(predictableLower);
    expect(hyphenateWithCaseInsenstive(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithCaseInsenstive(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithCaseInsenstive(textUpper)).toBe(predictableUPPER);
    expect(hyphenateWithCaseInsenstive(textLower)).toBe(predictableLower);
  });

  test("Factory function option works case insensitive and case insenstive works with multi character hyphens", () => {
    const hyphenateWithMultiCharHyphen = createHyphenator(patterns, {
      hyphenChar: "- ",
      exceptions: ["h-e-l-l-o"],
      caseInsensitive: true,
    });
    const textLower = "hello";
    const textCapitalized = "Hello";
    const textUpper = "HELLO"
    const predictableLower = "h- e- l- l- o";
    const predictableCapitalized = "H- e- l- l- o";
    const predictableUPPER = "H- E- L- L- O";
    expect(hyphenateWithMultiCharHyphen(textLower)).toBe(predictableLower);
    expect(hyphenateWithMultiCharHyphen(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithMultiCharHyphen(textUpper)).toBe(predictableUPPER);
    expect(hyphenateWithMultiCharHyphen(textLower)).toBe(predictableLower);
    expect(hyphenateWithMultiCharHyphen(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithMultiCharHyphen(textCapitalized)).toBe(predictableCapitalized);
    expect(hyphenateWithMultiCharHyphen(textUpper)).toBe(predictableUPPER);
    expect(hyphenateWithMultiCharHyphen(textLower)).toBe(predictableLower);
  });
});
