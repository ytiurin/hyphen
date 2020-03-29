const createHyphenator = require("../hyphen.js");
const patterns = require("../patterns/en-us.js");

let hyphenate;

beforeAll(() => {
  hyphenate = createHyphenator(patterns, { async: true });
});

test("Hyphenate should let setTimeout callback execute before produce the result", () => {
  expect.assertions(1);

  let ticks = 0;
  setTimeout(function nextTick() {
    ticks++;
    setTimeout(nextTick);
  });

  return hyphenate("beautiful").then(function () {
    expect(ticks).toBeGreaterThan(0);
  });
});
