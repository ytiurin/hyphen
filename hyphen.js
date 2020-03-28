/** Franklin M. Liang's hyphenation algorithm, implemented in Javascript.
 *  Copyright (C) 2016 Yevhen Tiurin (yevhentiurin@gmail.com)
 *  https://github.com/ytiurin/hyphen
 *
 *  Released under the MIT license
 *  https://github.com/ytiurin/hyphen/blob/master/LICENSE
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.createHyphenator = factory();
  }
})(this, function () {
  var //
    SETTING_ASYNC_MODE = false,
    SETTING_DEBUG = false,
    SETTING_HYPHEN_CHAR = "\u00AD";

  var _global =
    typeof global === "object"
      ? global
      : typeof window === "object"
      ? /* eslint-disable-next-line no-undef */
        window
      : typeof this === "object"
      ? this
      : {};

  function createHyphenator(patternsDefinition, settings) {
    var // Settings
      debug =
        (settings && settings.debug !== undefined && settings.debug) ||
        SETTING_DEBUG,
      hyphenChar =
        (settings &&
          settings.hyphenChar !== undefined &&
          settings.hyphenChar) ||
        SETTING_HYPHEN_CHAR,
      asyncMode =
        (settings && settings.async !== undefined && settings.async) ||
        SETTING_ASYNC_MODE,
      // Prepare cache
      cache = patternsDefinition.exceptions.reduce(function (cache, exception) {
        cache[exception.replace(/\-/g, "")] = exception.replace(
          /\-/g,
          hyphenChar
        );
        return cache;
      }, {}),
      // Preprocess patterns
      patterns = patternsDefinition.patterns.map(preprocessPattern);

    if (asyncMode && !("Promise" in _global)) {
      throw new Error(
        "Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode"
      );
    }

    return function (text) {
      return start(text, patterns, cache, debug, hyphenChar, asyncMode);
    };
  }
  function createTextChunkReader(text, hyphenChar) {
    function readNextTextChunk() {
      var nextTextChunk = "";

      shouldHyphenate = void 0;

      chunkReader: while (nextCharIndex <= text.length) {
        var //
          nextChar = text.charAt(nextCharIndex++),
          charIsLetter =
            !!nextChar && !/\s|[\!-\@\[-\`\{-\~\u2013-\u203C]/.test(nextChar),
          charIsAngleOpen = nextChar === "<",
          charIsAngleClose = nextChar === ">",
          charIsHyphen = nextChar === hyphenChar;

        do {
          if (state === STATE_READ_TAG) {
            if (charIsAngleClose) {
              state = STATE_RETURN_TAG;
            }
            break;
          }

          if (charIsHyphen) {
            shouldHyphenate = SHOULD_SKIP;
            state = STATE_READ_WORD;
            break;
          }

          if (charIsLetter) {
            state = STATE_READ_WORD;
            break;
          }

          if (state === STATE_READ_WORD) {
            state = STATE_RETURN_WORD;
            shouldHyphenate =
              shouldHyphenate || (nextTextChunk.length > 4 && SHOULD_HYPHENATE);
            break;
          }

          shouldHyphenate = SHOULD_SKIP;
          state = STATE_RETURN_CHAR;
        } while (0);

        if (charIsAngleOpen && state !== STATE_RETURN_WORD) {
          shouldHyphenate = SHOULD_SKIP;
          state = STATE_READ_TAG;
        }

        switch (state) {
          case STATE_READ_TAG:
            nextTextChunk += nextChar;
            break;

          case STATE_READ_WORD:
            nextTextChunk += nextChar;
            break;

          case STATE_RETURN_CHAR:
            nextTextChunk = nextChar;
            break chunkReader;

          case STATE_RETURN_TAG:
            nextTextChunk += nextChar;
            break chunkReader;

          case STATE_RETURN_WORD:
            nextCharIndex--;
            break chunkReader;
        }
      }
      return nextTextChunk || void 0;
    }

    function shouldNextHyphenate() {
      return shouldHyphenate === SHOULD_HYPHENATE;
    }

    var //
      nextCharIndex = 0,
      SHOULD_HYPHENATE = 1,
      SHOULD_SKIP = 2,
      shouldHyphenate,
      STATE_READ_TAG = 1,
      STATE_READ_WORD = 2,
      STATE_RETURN_CHAR = 3,
      STATE_RETURN_TAG = 4,
      STATE_RETURN_WORD = 5,
      state;

    return [readNextTextChunk, shouldNextHyphenate];
  }
  function hyphenateWord(text, patterns, debug, hyphenChar) {
    var //
      levels = new Array(text.length + 1),
      loweredText = text.toLocaleLowerCase(),
      p = [],
      patternData,
      patternIndex = 0;

    for (var i = levels.length; i--; ) levels[i] = 0;

    while ((patternData = patterns[patternIndex++])) {
      var //
        fromChar = 0,
        endPattern = false;
      while (!endPattern) {
        var //
          patternEntityIndex = loweredText.indexOf(patternData.text, fromChar),
          patternFits =
            patternEntityIndex > -1 &&
            (patternData.stickToLeft ? patternEntityIndex === 0 : true) &&
            (patternData.stickToRight
              ? patternEntityIndex + patternData.text.length === text.length
              : true);

        if (patternFits) {
          p.push(patternData.pattern + ">" + patternData.levels.join(""));

          for (var i = 0; i < patternData.levels.length; i++)
            levels[patternEntityIndex + i] = Math.max(
              patternData.levels[i],
              levels[patternEntityIndex + i]
            );
        }
        if (patternEntityIndex > -1 && patternData.text.length > 0) {
          fromChar = patternEntityIndex + patternData.text.length + 1;
        } else {
          endPattern = true;
        }
      }
    }

    levels[0] = levels[1] = levels[levels.length - 1] = levels[
      levels.length - 2
    ] = 0;

    var //
      hyphenatedText = "",
      leveledText = "",
      debugHyphenatedText = "";

    for (var i = 0; i < levels.length; i++) {
      hyphenatedText +=
        (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
      debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
      leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
    }

    if (debug)
      console.log.apply(
        console,
        [text, "->"]
          .concat(p)
          .concat(["->"])
          .concat(levels)
          .concat(["->", leveledText])
          .concat(["->", debugHyphenatedText])
      );

    return hyphenatedText;
  }
  function preprocessPattern(pattern) {
    var //
      patternCharIndex = 0,
      patternChar,
      patternData = {
        pattern: pattern,
        text: "",
        levels: [],
        stickToLeft: 0,
        stickToRight: 0
      },
      states = { alphabet: 1, level: 2, stickToLeft: 3, stickToRight: 4 };

    while ((patternChar = pattern.charAt(patternCharIndex++))) {
      var //
        charIsDot = patternChar === ".",
        charIsNumber = !charIsDot && /\d/.test(patternChar),
        state = charIsDot
          ? patternCharIndex - 1 === 0
            ? states.stickToLeft
            : states.stickToRight
          : charIsNumber
          ? states.level
          : states.alphabet;

      switch (state) {
        case states.alphabet:
          !prevCharIsNumber && patternData.levels.push(0);
          patternData.text += patternChar;
          break;

        case states.level:
          patternData.levels.push(parseInt(patternChar));
          break;

        case states.stickToLeft:
          patternData.stickToLeft = true;
          break;

        case states.stickToRight:
          patternData.stickToRight = true;
          break;
      }

      var prevCharIsNumber = charIsNumber;
    }

    return patternData;
  }
  function start(text, patterns, cache, debug, hyphenChar, isAsync) {
    function done() {
      allTime = new Date() - allTime;
      resolveNewText(newText);

      if (debug) {
        console.log(
          "----------------\nHyphenation stats: " +
            processedN +
            " words processed, " +
            hyphenatedN +
            " words hyphenated"
        );
        console.log("Work time: " + workTime / 1000);
        console.log("Wait time: " + (allTime - workTime) / 1000);
        console.log("All time: " + allTime / 1000);
      }
    }

    var //
      newText = "",
      nextTextChunk,
      reader = createTextChunkReader(text, hyphenChar),
      readNextTextChunk = reader[0],
      shouldNextHyphenate = reader[1],
      states = { hyphenateWord: 1, concatenate: 2 },
      processedN = 0,
      hyphenatedN = 0;

    var //
      allTime = new Date(),
      workTime = 0;

    var resolveNewText = function () {};

    (function nextTick() {
      var loopStart = new Date();

      while (
        (!isAsync || new Date() - loopStart < 10) &&
        (nextTextChunk = readNextTextChunk())
      ) {
        var state = shouldNextHyphenate()
          ? states.hyphenateWord
          : states.concatenate;

        switch (state) {
          case states.hyphenateWord:
            if (!cache[nextTextChunk])
              cache[nextTextChunk] = hyphenateWord(
                nextTextChunk,
                patterns,
                debug,
                hyphenChar
              );

            if (nextTextChunk !== cache[nextTextChunk]) hyphenatedN++;

            nextTextChunk = cache[nextTextChunk];

          case states.concatenate:
            newText += nextTextChunk;
        }

        processedN++;
      }
      workTime += new Date() - loopStart;

      if (!nextTextChunk) {
        done();
      } else {
        setTimeout(nextTick);
      }
    })();

    if (isAsync) {
      /* eslint-disable-next-line no-undef */
      return new Promise(function (resolve) {
        resolveNewText = resolve;
      });
    } else {
      return newText;
    }
  }
  return createHyphenator;
});
