import { start } from "./start.js";

var SETTING_DEFAULT_ASYNC = false,
  SETTING_DEFAULT_DEBUG = false,
  SETTING_DEFAULT_EXCEPTIONS = [],
  SETTING_DEFAULT_HTML = true,
  SETTING_DEFAULT_HYPH_CHAR = "\u00AD",
  SETTING_DEFAULT_MIN_WORD_LENGTH = 5,
  SETTING_DEFAULT_CASE_INSENSITIVE = false,
  SETTING_NAME_ASYNC = "async",
  SETTING_NAME_DEBUG = "debug",
  SETTING_NAME_EXCEPTIONS = "exceptions",
  SETTING_NAME_HTML = "html",
  SETTING_NAME_HYPH_CHAR = "hyphenChar",
  SETTING_NAME_MIN_WORD_LENGTH = "minWordLength",
  SETTING_NAME_CASE_INSENSITIVE = "caseInsensitive";
  

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

function exceptionsFromDefinition(excetionsList, hyphenChar) {
  return excetionsList.reduce(function (exceptions, exception) {
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
    ),
    caseInsensitiveMode = keyOrDefault(
      options,
      SETTING_NAME_CASE_INSENSITIVE,
      SETTING_DEFAULT_CASE_INSENSITIVE
    );

  // Prepare cache
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

  return function (text, options) {
    options = options || {};

    var localDebug = keyOrDefault(options, SETTING_NAME_DEBUG, debug),
      localHyphenChar = keyOrDefault(
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
      exceptions[cacheKey] = exceptionsFromDefinition(
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

      caches[cacheKey] = extend(caches[cacheKey], exceptions[cacheKey]);
    }

    return start(
      text,
      levelsTable,
      patterns,
      caches[cacheKey],
      localDebug,
      localHyphenChar,
      skipHTML,
      localMinWordLength,
      asyncMode,
      caseInsensitiveMode
    );
  };
}
