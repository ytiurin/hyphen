const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("Patterns exceptions", () => {
  test("Text 1 should be same as exception value", () => {
    const text = "project";
    const predictable = "project";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("Text 2 should be same as exception value", () => {
    const text = "table";
    const predictable = "ta-ble";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("Text 3 should be same as exception value", () => {
    const text = "Table";
    const predictable = "Ta-ble";

    expect(hyphenate(text)).toBe(predictable);
  });

  test("Text 4 should be same as exception value", () => {
    const text = "TABLE";
    const predictable = "TA-BLE";

    expect(hyphenate(text)).toBe(predictable);
  });
});
