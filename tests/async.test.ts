import { createHyphenator } from '../src/create-hyphenator';
import patterns from '../patterns/en-us';

test('Hyphenate should let setTimeout callback execute before produce the result', () => {
  expect.assertions(1);
  const hyphenate = createHyphenator(patterns, { async: true });

  let ticks = 0;
  setTimeout(function nextTick() {
    ticks++;
    setTimeout(nextTick);
  });

  return (hyphenate('beautiful') as Promise<string>).then(function () {
    expect(ticks).toBeGreaterThan(0);
  });
});
