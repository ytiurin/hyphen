/** Text hyphenation in Javascript.
 *  Copyright (C) 2021 Yevhen Tiurin (yevhentiurin@gmail.com)
 *  https://github.com/ytiurin/hyphen
 *
 *  Released under the ISC license
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
  var NUMS = ["1", "2", "3", "4", "5", "6"];
  function createIterator(str) {
    var i = 0;
    function next() {
      return str[i++];
    }
    return next;
  }
  function createPatternTree(patterns) {
    var pattern,
      symb,
      maxPatternLength = 0,
      patternTree = [{}],
      nextPattern = createIterator(patterns);
    while ((pattern = nextPattern())) {
      var ptr = patternTree,
        symb,
        weights = [],
        patternLength = 0,
        prevSymbIsNumber = false,
        nextSymbol = createIterator(pattern.split(""));
      while ((symb = nextSymbol())) {
        if (NUMS.indexOf(symb) > -1) {
          weights.push(parseInt(symb));
          prevSymbIsNumber = true;
        } else {
          if (!prevSymbIsNumber && symb !== ".") {
            weights.push(0);
          }
          if (symb !== ".") {
            patternLength++;
          }
          ptr[0][symb] = ptr[0][symb] || [{}];
          ptr = ptr[0][symb];
          prevSymbIsNumber = false;
        }
      }
      while (weights[weights.length - 1] === 0) {
        weights.pop();
      }
      ptr[1] = weights;
      ptr[2] = pattern;
      if (maxPatternLength < patternLength) {
        maxPatternLength = patternLength;
      }
    }
    return [patternTree[0], maxPatternLength];
  }

  function createTextReader(setup) {
    var char1 = "";
    var char2 = "";
    var i = 0;
    var verifier = setup();
    return function (text) {
      while (i < text.length) {
        char1 = text.charAt(i++);
        char2 = text.charAt(i);
        var verified = verifier(char1, char2);
        if (verified !== void 0) {
          return verified;
        }
      }
    };
  }

  var isNotLetter = RegExp.prototype.test.bind(
    /\s|(?![\'])[\!-\@\[-\`\{-\~\u2013-\u203C]/
  );
  function createHyphenationVerifier(hyphenChar, skipHTML, minWordLength) {
    return function () {
      var accum0 = "";
      var accum = "";
      var isHTMLTag = false;
      var skipCurrent = false;
      function resolveWith(value) {
        accum0 = "";
        accum = "";
        isHTMLTag = false;
        skipCurrent = false;
        return value;
      }
      return function (char1, char2) {
        accum += char1;
        if (isHTMLTag) {
          if (char1 === ">") {
            accum0 += accum;
            accum = "";
            isHTMLTag = false;
          }
        } else {
          if (char1 === hyphenChar) {
            skipCurrent = true;
          }
          if (
            char1 === "<" &&
            (!isNotLetter(char2) || char2 === "/") &&
            skipHTML
          ) {
            isHTMLTag = true;
          }
          if (isNotLetter(char1) && !isNotLetter(char2)) {
            accum0 += accum;
            accum = "";
          }
          if (!isNotLetter(char1) && isNotLetter(char2)) {
            if (accum.length >= minWordLength && !skipCurrent) {
              return resolveWith([accum0, accum]);
            } else {
              accum0 += accum;
              accum = "";
            }
          }
        }
        if (char2 === "") {
          if (accum.length < minWordLength || skipCurrent) {
            accum0 += accum;
            accum = "";
          }
          return resolveWith([accum0, accum]);
        }
      };
    };
  }

  function createCharIterator(str) {
    var i = 0;
    function nextChar() {
      return str[i++];
    }
    function isLastLetter() {
      return str.length === i + 1;
    }
    return [nextChar, isLastLetter];
  }
  function createStringSlicer(str) {
    var i = 0,
      slice = str;
    function next() {
      slice = str.slice(i++);
      if (slice.length < 3) {
        return;
      }
      return slice;
    }
    function isFirstCharacter() {
      return i === 2;
    }
    return [next, isFirstCharacter];
  }
  function hyphenateWord(text, patternTree, debug, hyphenChar) {
    var levels = new Array(text.length + 1),
      loweredText = ("." + text.toLocaleLowerCase() + ".").split(""),
      p = [],
      wordSlice,
      letter,
      treePtr,
      nextPtr,
      patternLevels,
      patternEntityIndex = -1,
      slicer,
      nextSlice,
      isFirstCharacter,
      charIterator,
      nextLetter,
      isLastLetter;
    for (var i = levels.length; i--; ) levels[i] = 0;
    slicer = createStringSlicer(loweredText);
    nextSlice = slicer[0];
    isFirstCharacter = slicer[1];
    while ((wordSlice = nextSlice())) {
      patternEntityIndex++;
      if (isFirstCharacter()) {
        patternEntityIndex--;
      }
      treePtr = patternTree;
      charIterator = createCharIterator(wordSlice);
      nextLetter = charIterator[0];
      isLastLetter = charIterator[1];
      while ((letter = nextLetter())) {
        if (treePtr[letter] === void 0) {
          break;
        }
        nextPtr = treePtr[letter];
        treePtr = nextPtr[0];
        patternLevels = nextPtr[1];
        if (isLastLetter()) {
          continue;
        }
        if (patternLevels === void 0) {
          continue;
        }
        for (var k = 0; k < patternLevels.length; k++)
          levels[patternEntityIndex + k] = Math.max(
            patternLevels[k],
            levels[patternEntityIndex + k]
          );
      }
    }
    levels[0] = levels[1] = levels[levels.length - 1] = levels[
      levels.length - 2
    ] = 0;
    var hyphenatedText = "",
      leveledText = "",
      debugHyphenatedText = "";
    for (var i = 0; i < levels.length; i++) {
      hyphenatedText +=
        (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
      if (debug) {
        debugHyphenatedText +=
          (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
        leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
      }
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

  function start(
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
      allTime = /* @__PURE__ */ new Date() - allTime;
      resolveNewText(newText);
      if (debug) {
        console.log(
          "----------------\nHyphenation stats: " +
            processedN +
            " text chunks processed, " +
            hyphenatedN +
            " words hyphenated"
        );
        console.log("Work time: " + workTime / 1e3);
        console.log("Wait time: " + (allTime - workTime) / 1e3);
        console.log("All time: " + allTime / 1e3);
      }
    }
    var newText = "",
      fragments,
      readText = createTextReader(
        createHyphenationVerifier(hyphenChar, skipHTML, minWordLength)
      ),
      processedN = 0,
      hyphenatedN = 0,
      allTime = /* @__PURE__ */ new Date(),
      workTime = 0,
      resolveNewText = function () {};
    function nextTick() {
      var loopStart = /* @__PURE__ */ new Date();
      while (
        (!isAsync || /* @__PURE__ */ new Date() - loopStart < 10) &&
        (fragments = readText(text))
      ) {
        if (fragments[1]) {
          var cacheKey = fragments[1].length ? "$" + fragments[1] : "";
          if (cache[cacheKey] === void 0) {
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
      workTime += /* @__PURE__ */ new Date() - loopStart;
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

  var SETTING_DEFAULT_ASYNC = false;
  var SETTING_DEFAULT_DEBUG = false;
  var SETTING_DEFAULT_HTML = false;
  var SETTING_DEFAULT_HYPH_CHAR = "\xAD";
  var SETTING_DEFAULT_MIN_WORD_LENGTH = 5;
  var SETTING_NAME_ASYNC = "async";
  var SETTING_NAME_DEBUG = "debug";
  var SETTING_NAME_HTML = "html";
  var SETTING_NAME_HYPH_CHAR = "hyphenChar";
  var SETTING_NAME_MIN_WORD_LENGTH = "minWordLength";
  var _global =
    typeof global === "object"
      ? global
      : typeof window === "object"
      ? window
      : typeof self === "object"
      ? self
      : false
      ? void 0
      : {};
  function cloneObj(source) {
    var target = {};
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
  function keyOrDefault(object, key, defaultValue) {
    if (key in object) {
      return object[key];
    }
    return defaultValue;
  }
  function exceptionsFromDefinition(patternsDefinition, hyphenChar) {
    return patternsDefinition.exceptions.reduce(function (
      exceptions,
      exception
    ) {
      exceptions[exception.replace(/\-/g, "")] = exception.replace(
        /\-/g,
        hyphenChar
      );
      return exceptions;
    },
    {});
  }
  function createHyphenator(patternsDefinition, options) {
    options = options || {};
    var asyncMode = keyOrDefault(
        options,
        SETTING_NAME_ASYNC,
        SETTING_DEFAULT_ASYNC
      ),
      caches = {},
      debug = keyOrDefault(options, SETTING_NAME_DEBUG, SETTING_DEFAULT_DEBUG),
      exceptions = {},
      hyphenChar = keyOrDefault(
        options,
        SETTING_NAME_HYPH_CHAR,
        SETTING_DEFAULT_HYPH_CHAR
      ),
      patterns = createPatternTree(
        patternsDefinition.patterns.filter(function (p) {
          return p !== " " && p !== "";
        })
      )[0],
      minWordLength =
        keyOrDefault(
          options,
          SETTING_NAME_MIN_WORD_LENGTH,
          SETTING_DEFAULT_MIN_WORD_LENGTH
        ) >> 0,
      skipHTML = keyOrDefault(options, SETTING_NAME_HTML, SETTING_DEFAULT_HTML);
    var cacheKey = hyphenChar + minWordLength;
    exceptions[cacheKey] = exceptionsFromDefinition(
      patternsDefinition,
      hyphenChar
    );
    caches[cacheKey] = cloneObj(exceptions[cacheKey]);
    if (asyncMode && !("Promise" in _global)) {
      throw new Error(
        "Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode"
      );
    }
    return function (text, options2) {
      options2 = options2 || {};
      var localDebug = keyOrDefault(options2, SETTING_NAME_DEBUG, debug),
        localHyphenChar = keyOrDefault(
          options2,
          SETTING_NAME_HYPH_CHAR,
          hyphenChar
        ),
        localMinWordLength =
          keyOrDefault(options2, SETTING_NAME_MIN_WORD_LENGTH, minWordLength) >>
          0,
        cacheKey2 = localHyphenChar + localMinWordLength;
      if (!exceptions[cacheKey2]) {
        exceptions[cacheKey2] = exceptionsFromDefinition(
          patternsDefinition,
          localHyphenChar
        );
      }
      if (!caches[cacheKey2]) {
        caches[cacheKey2] = cloneObj(exceptions[cacheKey2]);
      }
      return start(
        text,
        patterns,
        caches[cacheKey2],
        localDebug,
        localHyphenChar,
        skipHTML,
        localMinWordLength,
        asyncMode
      );
    };
  }

  return createHyphenator;
});
