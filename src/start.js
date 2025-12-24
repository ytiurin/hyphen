import { createTextReader } from "./textReader.js";
import {
  createHTMLVerifier,
  createHyphenCharVerifier,
  createHyphenationVerifier
} from "./hyphenationVerifier.js";
import { hyphenateWord } from "./hyphenate-word.js";
import { insertChar } from "./markers.js";

export function start(
  text,
  levelsTable,
  patterns,
  cache,
  markersDict,
  hyphenChar,
  skipHTML,
  minWordLength,
  isAsync
) {
  function done() {
    DEV: allTime = new Date() - allTime;
    resolveNewText(newText);

    DEV: {
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
      createHyphenationVerifier(
        (skipHTML ? [createHTMLVerifier()] : []).concat(
          createHyphenCharVerifier(hyphenChar)
        ),
        minWordLength
      )
    ),
    resolveNewText = function () {};

  DEV: {
    var processedN = 0,
      hyphenatedN = 0,
      allTime = new Date(),
      workTime = 0;
  }

  function nextTick() {
    var loopStart = new Date();

    while (
      (!isAsync || new Date() - loopStart < 10) &&
      (fragments = readText(text))
    ) {
      if (fragments[1]) {
        var cacheKey = fragments[1].length ? "~" + fragments[1] : "";

        if (!Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
          var loweredWord = fragments[1].toLocaleLowerCase();

          if (!Object.prototype.hasOwnProperty.call(markersDict, loweredWord))
            markersDict[loweredWord] = hyphenateWord(
              fragments[1],
              loweredWord,
              levelsTable,
              patterns
            );

          cache[cacheKey] = insertChar(
            fragments[1],
            hyphenChar,
            markersDict[loweredWord]
          );
        }

        DEV: if (fragments[1] !== cache[cacheKey]) {
          hyphenatedN++;
        }

        fragments[1] = cache[cacheKey];
      }

      newText += fragments[0] + fragments[1];
      DEV: processedN++;
    }

    DEV: workTime += new Date() - loopStart;

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
