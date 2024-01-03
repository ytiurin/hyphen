/** Text hyphenation in Javascript.
 *  Copyright (C) 2024 Yevhen Tiurin (yevhentiurin@gmail.com)
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
  function createHTMLVerifier() {
    var skip = false;
    return function (accumulate, chars) {
      if (skip) {
        if (chars[0] === ">") {
          accumulate();
          skip = false;
        }
      } else if (
        chars[0] === "<" &&
        (!isNotLetter(chars[1]) || chars[1] === "/")
      ) {
        skip = true;
      }
      return skip;
    };
  }
  function createHyphenCharVerifier(hyphenChar) {
    var skip = false;
    return function (accumulate, chars) {
      if (skip) {
        if (!isNotLetter(chars[0]) && isNotLetter(chars[1])) {
          accumulate();
          skip = false;
        }
      } else if (!isNotLetter(chars[0]) && chars[1] === hyphenChar) {
        skip = true;
      }
      return skip;
    };
  }
  function createHyphenationVerifier(verifiers, minWordLength) {
    return function () {
      var accum0 = "";
      var accum = "";
      function accumulate() {
        accum0 += accum;
        accum = "";
      }
      function resolveWith(value) {
        accum0 = "";
        accum = "";
        return value;
      }
      return function (char1, char2) {
        accum += char1;
        var skip = verifiers.reduce(function (skip2, verify) {
          return skip2 || verify(accumulate, [char1, char2]);
        }, false);
        if (!skip) {
          if (isNotLetter(char1) && !isNotLetter(char2)) {
            accumulate();
          }
          if (!isNotLetter(char1) && isNotLetter(char2)) {
            if (accum.length >= minWordLength) {
              return resolveWith([accum0, accum]);
            } else {
              accumulate();
            }
          }
        }
        if (char2 === "") {
          if (accum.length < minWordLength || skip) {
            accumulate();
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
  function hyphenateWord(text, levelsTable, patternTree, debug, hyphenChar) {
    var levels = new Array(text.length + 1),
      loweredText = ("." + text.toLocaleLowerCase() + ".").split(""),
      wordSlice,
      letter,
      treePtr,
      nextPtr,
      patternLevelsIndex,
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
        patternLevelsIndex = nextPtr[1];
        if (treePtr === void 0) {
          treePtr = {};
          patternLevelsIndex = nextPtr;
        }
        if (isLastLetter()) {
          continue;
        }
        if (patternLevelsIndex === void 0) {
          continue;
        }
        if (!levelsTable[patternLevelsIndex].splice) {
          levelsTable[patternLevelsIndex] = levelsTable[
            patternLevelsIndex
          ].slice("");
        }
        patternLevels = levelsTable[patternLevelsIndex];
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
    var hyphenatedText = "";
    for (var i = 0; i < levels.length; i++) {
      hyphenatedText +=
        (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
    }
    return hyphenatedText;
  }

  function start(
    text,
    levelsTable,
    patterns,
    cache,
    debug,
    hyphenChar,
    skipHTML,
    minWordLength,
    isAsync
  ) {
    function done() {
      resolveNewText(newText);
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
    function nextTick() {
      var loopStart = /* @__PURE__ */ new Date();
      while (
        (!isAsync || /* @__PURE__ */ new Date() - loopStart < 10) &&
        (fragments = readText(text))
      ) {
        if (fragments[1]) {
          var cacheKey = fragments[1].length ? "~" + fragments[1] : "";
          if (cache[cacheKey] === void 0) {
            cache[cacheKey] = hyphenateWord(
              fragments[1],
              levelsTable,
              patterns,
              debug,
              hyphenChar
            );
          }
          fragments[1] = cache[cacheKey];
        }
        newText += fragments[0] + fragments[1];
      }
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
  var SETTING_DEFAULT_EXCEPTIONS = [];
  var SETTING_DEFAULT_HTML = true;
  var SETTING_DEFAULT_HYPH_CHAR = "\xAD";
  var SETTING_DEFAULT_MIN_WORD_LENGTH = 5;
  var SETTING_NAME_ASYNC = "async";
  var SETTING_NAME_DEBUG = "debug";
  var SETTING_NAME_EXCEPTIONS = "exceptions";
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
  function extend(target, source) {
    target = target || {};
    for (var key in source) {
      target[key] = source[key];
    }
    return target;
  }
  function validateArray(value) {
    return value instanceof Array;
  }
  function keyOrDefault(object, key, defaultValue, test) {
    if (key in object && (test ? test(object[key]) : true)) {
      return object[key];
    }
    return defaultValue;
  }
  function exceptionsFromDefinition(excetionsList, hyphenChar) {
    return excetionsList.reduce(function (exceptions, exception) {
      exceptions["~" + exception.replace(/\-/g, "")] = exception.replace(
        /\-/g,
        hyphenChar
      );
      return exceptions;
    }, {});
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
      levelsTable = patternsDefinition[0].split(","),
      patterns = JSON.parse(patternsDefinition[1]),
      minWordLength =
        keyOrDefault(
          options,
          SETTING_NAME_MIN_WORD_LENGTH,
          SETTING_DEFAULT_MIN_WORD_LENGTH
        ) >> 0,
      skipHTML = keyOrDefault(options, SETTING_NAME_HTML, SETTING_DEFAULT_HTML),
      userExceptions = keyOrDefault(
        options,
        SETTING_NAME_EXCEPTIONS,
        SETTING_DEFAULT_EXCEPTIONS,
        validateArray
      );
    var cacheKey = hyphenChar + minWordLength;
    exceptions[cacheKey] = {};
    if (patternsDefinition[2]) {
      exceptions[cacheKey] = exceptionsFromDefinition(
        patternsDefinition[2],
        hyphenChar
      );
    }
    if (userExceptions && userExceptions.length) {
      exceptions[cacheKey] = extend(
        exceptions[cacheKey],
        exceptionsFromDefinition(userExceptions, hyphenChar)
      );
    }
    caches[cacheKey] = extend({}, exceptions[cacheKey]);
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
        localUserExceptions = keyOrDefault(
          options2,
          SETTING_NAME_EXCEPTIONS,
          SETTING_DEFAULT_EXCEPTIONS,
          validateArray
        ),
        cacheKey2 = localHyphenChar + localMinWordLength;
      if (!exceptions[cacheKey2] && patternsDefinition[2]) {
        exceptions[cacheKey2] = exceptionsFromDefinition(
          patternsDefinition[2],
          localHyphenChar
        );
        caches[cacheKey2] = extend(caches[cacheKey2], exceptions[cacheKey2]);
      }
      if (localUserExceptions && localUserExceptions.length) {
        exceptions[cacheKey2] = extend(
          exceptions[cacheKey2],
          exceptionsFromDefinition(localUserExceptions, localHyphenChar)
        );
        caches[cacheKey2] = extend(caches[cacheKey2], exceptions[cacheKey2]);
      }
      return start(
        text,
        levelsTable,
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
