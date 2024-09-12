const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { hyphenChar: "-" });
});

describe("Basic text", () => {
  test("Text 1 should process to predictable result", () => {
    const basicText =
      "The Tortoise never stopped for a moment, walking slowly but steadily, right to the end of the course. The Hare ran fast and stopped to lie down for a rest. But he fell fast asleep. Eventually, he woke up and ran as fast as he could. But when he reached the end, he saw the Tortoise there already, sleeping comfortably after her effort.";
    const predictable =
      "The Tor-toise nev-er stopped for a mo-ment, walk-ing slow-ly but steadi-ly, right to the end of the course. The Hare ran fast and stopped to lie down for a rest. But he fell fast asleep. Even-tu-al-ly, he woke up and ran as fast as he could. But when he reached the end, he saw the Tor-toise there al-ready, sleep-ing com-fort-ably af-ter her ef-fort.";

    expect(hyphenate(basicText)).toBe(predictable);
  });
});
