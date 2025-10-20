import { createTextReader } from "./textReader.js";
import {
  createHTMLVerifier,
  createHyphenCharVerifier,
  createHyphenationVerifier
} from "./hyphenationVerifier.js";
import { hyphenateWord } from "./hyphenate-word.js";

function getObjectPropertyCaseInsensitive(obj, key) {
  const lowerKey = key.toLowerCase();
  for (const prop in obj) {
    if (prop.toLowerCase() === lowerKey) {
      return obj[prop];
    }
  }
  return undefined;
}

function addHyphenMarkersFromExisting(existing, newVariant, hyphenChar) {
  let result = '';
  let newVariantIndex = 0;
  let i = 0;

  while (i < existing.length) {
    // Check if the next chunk matches the separator
    if (existing.slice(i, i + hyphenChar.length) === hyphenChar) {
      result += hyphenChar;
      i += hyphenChar.length;
    } else {
      result += newVariant[newVariantIndex] || '';
      newVariantIndex++;
      i++;
    }
  }
  return result;
}

export function start(
  text,
  levelsTable,
  patterns,
  cache,
  debug,
  hyphenChar,
  skipHTML,
  minWordLength,
  isAsync,
  caseInsensitiveMode
) {
  function done() {
    DEV: allTime = new Date() - allTime;
    resolveNewText(newText);

    DEV: if (debug) {
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

        if (caseInsensitiveMode && cache[cacheKey] === undefined && getObjectPropertyCaseInsensitive(cache, cacheKey)) {
          // Use existing cached hyphenate rule for different case variant
          const existingCachedValue = getObjectPropertyCaseInsensitive(cache, cacheKey);
          cache[cacheKey] = addHyphenMarkersFromExisting(existingCachedValue, fragments[1], hyphenChar);
        } else if (cache[cacheKey] === undefined) {
          cache[cacheKey] = hyphenateWord(
            fragments[1],
            levelsTable,
            patterns,
            debug,
            hyphenChar
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
