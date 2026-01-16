import { start } from "./start.js";
import { insertChar, markersFromExceptionsDefinition } from "./markers.js";

var SETTING_DEFAULT_ASYNC = false,
  SETTING_DEFAULT_EXCEPTIONS = [],
  SETTING_DEFAULT_HTML = true,
  SETTING_DEFAULT_HYPH_CHAR = "\u00AD",
  SETTING_DEFAULT_MIN_WORD_LENGTH = 5,
  SETTING_NAME_ASYNC = "async",
  SETTING_NAME_EXCEPTIONS = "exceptions",
  SETTING_NAME_HTML = "html",
  SETTING_NAME_HYPH_CHAR = "hyphenChar",
  SETTING_NAME_MIN_WORD_LENGTH = "minWordLength";

var _global =
  typeof global === "object"
    ? global
    : typeof window === "object"
    ? window
    : typeof self === "object"
    ? self
    : typeof this === "object"
    ? this
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

function exceptionsFromMarkers(markers, hyphenChar) {
  var exceptions = {};

  for (var word in markers) {
    exceptions["~" + word] = insertChar(word, hyphenChar, markers[word]);
  }

  return exceptions;
}

function exceptionsFromDefinition(exceptionsList, hyphenChar) {
  return exceptionsList.reduce(function (exceptions, exception) {
    exceptions["~" + exception.replace(/\-/g, "")] = exception.replace(
      /\-/g,
      hyphenChar
    );
    return exceptions;
  }, {});
}

export function createHyphenator(patternsDefinition, options) {
  options = options || {};
  var asyncMode = keyOrDefault(
      options,
      SETTING_NAME_ASYNC,
      SETTING_DEFAULT_ASYNC
    ),
    caches = {},
    markersDict = {},
    exceptions = {},
    hyphenChar = keyOrDefault(
      options,
      SETTING_NAME_HYPH_CHAR,
      SETTING_DEFAULT_HYPH_CHAR
    ),
    levelsTable = patternsDefinition[0],
    patterns = patternsDefinition[1],
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

  // Prepare cache
  var cacheKey = hyphenChar + minWordLength;
  exceptions[cacheKey] = {};

  if (patternsDefinition[2]) {
    exceptions[cacheKey] = exceptionsFromMarkers(
      patternsDefinition[2],
      hyphenChar
    );

    markersDict = patternsDefinition[2];
  }

  if (userExceptions && userExceptions.length) {
    exceptions[cacheKey] = extend(
      exceptions[cacheKey],
      exceptionsFromDefinition(userExceptions, hyphenChar)
    );

    markersDict = extend(
      markersDict,
      markersFromExceptionsDefinition(userExceptions)
    );
  }

  caches[cacheKey] = extend({}, exceptions[cacheKey]);

  if (asyncMode && !("Promise" in _global)) {
    throw new Error(
      "Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode"
    );
  }

  return function (text, options) {
    options = options || {};

    var localHyphenChar = keyOrDefault(
        options,
        SETTING_NAME_HYPH_CHAR,
        hyphenChar
      ),
      localMinWordLength =
        keyOrDefault(options, SETTING_NAME_MIN_WORD_LENGTH, minWordLength) >> 0,
      localUserExceptions = keyOrDefault(
        options,
        SETTING_NAME_EXCEPTIONS,
        SETTING_DEFAULT_EXCEPTIONS,
        validateArray
      ),
      cacheKey = localHyphenChar + localMinWordLength;

    if (!exceptions[cacheKey] && patternsDefinition[2]) {
      exceptions[cacheKey] = exceptionsFromMarkers(
        patternsDefinition[2],
        localHyphenChar
      );

      caches[cacheKey] = extend(caches[cacheKey], exceptions[cacheKey]);
    }

    if (localUserExceptions && localUserExceptions.length) {
      exceptions[cacheKey] = extend(
        exceptions[cacheKey],
        exceptionsFromDefinition(localUserExceptions, localHyphenChar)
      );

      markersDict = extend(
        markersDict,
        markersFromExceptionsDefinition(localUserExceptions)
      );

      caches[cacheKey] = extend(caches[cacheKey], exceptions[cacheKey]);
    }

    return start(
      text,
      levelsTable,
      patterns,
      caches[cacheKey],
      markersDict,
      localHyphenChar,
      skipHTML,
      localMinWordLength,
      asyncMode
    );
  };
}
