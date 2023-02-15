var SETTING_DEFAULT_ASYNC = false,
  SETTING_DEFAULT_DEBUG = false,
  SETTING_DEFAULT_HTML = false,
  SETTING_DEFAULT_HYPH_CHAR = "\u00AD",
  SETTING_DEFAULT_MIN_WORD_LENGTH = 5,
  SETTING_NAME_ASYNC = "async",
  SETTING_NAME_DEBUG = "debug",
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
  return patternsDefinition.exceptions.reduce(function (exceptions, exception) {
    exceptions[exception.replace(/\-/g, "")] = exception.replace(
      /\-/g,
      hyphenChar
    );
    return exceptions;
  }, {});
}

function createHyphenator(patternsDefinition, options) {
  options = options || {};
  var //
    asyncMode = keyOrDefault(
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
    patterns = patternsDefinition.patterns.map(preprocessPattern),
    minWordLength =
      keyOrDefault(
        options,
        SETTING_NAME_MIN_WORD_LENGTH,
        SETTING_DEFAULT_MIN_WORD_LENGTH
      ) >> 0,
    skipHTML = keyOrDefault(options, SETTING_NAME_HTML, SETTING_DEFAULT_HTML);

  // Prepare cache
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
      cacheKey = localHyphenChar + localMinWordLength;

    if (!exceptions[cacheKey]) {
      exceptions[cacheKey] = exceptionsFromDefinition(
        patternsDefinition,
        localHyphenChar
      );
    }

    if (!caches[cacheKey]) {
      caches[cacheKey] = cloneObj(exceptions[cacheKey]);
    }

    return start(
      text,
      patterns,
      caches[cacheKey],
      localDebug,
      localHyphenChar,
      skipHTML,
      localMinWordLength,
      asyncMode
    );
  };
}
