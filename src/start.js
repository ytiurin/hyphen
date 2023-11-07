import { createTextReader } from "./textReader.js";
import { createHyphenationVerifier } from "./hyphenationVerifier.js";
import { hyphenateWord } from "./hyphenate-word.js";

export function start(
  text,
  patterns,
  cache,
  debug,
  hyphenChar,
  skipHTML,
  minWordLength,
  isAsync
) {
  function done() {
    allTime = new Date() - allTime;
    resolveNewText(newText);

    if (debug) {
      console.log(
        "----------------\nHyphenation stats: " +
          processedN +
          " text chunks processed, " +
          hyphenatedN +
          " words hyphenated"
      );
      console.log("Work time: " + workTime / 1000);
      console.log("Wait time: " + (allTime - workTime) / 1000);
      console.log("All time: " + allTime / 1000);
    }
  }

  var newText = "",
    fragments,
    readText = createTextReader(
      createHyphenationVerifier(hyphenChar, skipHTML, minWordLength)
    ),
    processedN = 0,
    hyphenatedN = 0,
    allTime = new Date(),
    workTime = 0,
    resolveNewText = function () {};

  function nextTick() {
    var loopStart = new Date();

    while (
      (!isAsync || new Date() - loopStart < 10) &&
      (fragments = readText(text))
    ) {
      if (fragments[1]) {
        var cacheKey = fragments[1].length ? "$" + fragments[1] : "";

        if (cache[cacheKey] === undefined) {
          cache[cacheKey] = hyphenateWord(
            fragments[1],
            patterns,
            debug,
            hyphenChar
          );
        }

        if (fragments[1] !== cache[cacheKey]) {
          hyphenatedN++;
        }

        fragments[1] = cache[cacheKey];
      }

      newText += fragments[0] + fragments[1];
      processedN++;
    }

    workTime += new Date() - loopStart;

    if (!fragments) {
      done();
    } else {
      setTimeout(nextTick);
    }
  }

  if (isAsync) {
    setTimeout(nextTick);
    return new Promise(function (resolve) {
      resolveNewText = resolve;
    });
  } else {
    nextTick();
    return newText;
  }
}
