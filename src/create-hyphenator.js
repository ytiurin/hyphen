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

function cloneObj(source) {
  var target = {};
  for (var key in source) {
    target[key] = source[key];
  }
  return target;
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
    asyncMode = options.async || SETTING_ASYNC_MODE,
    caches = {},
    debug = options.debug || SETTING_DEBUG,
    exceptions = {},
    hyphenChar = options.hyphenChar || SETTING_HYPHEN_CHAR,
    patterns = patternsDefinition.patterns.map(preprocessPattern);

  // Prepare cache
  exceptions[hyphenChar] = exceptionsFromDefinition(
    patternsDefinition,
    hyphenChar
  );
  caches[hyphenChar] = cloneObj(exceptions[hyphenChar]);

  if (asyncMode && !("Promise" in _global)) {
    throw new Error(
      "Failed to create hyphenator: Could not find global Promise object, needed for hyphenator to work in async mode"
    );
  }

  return function (text, options) {
    options = options || {};
    var //
      localAsyncMode = options.asyncMode || asyncMode,
      localDebug = options.debug || debug,
      localHyphenChar = options.hyphenChar || hyphenChar;

    exceptions[localHyphenChar] =
      exceptions[localHyphenChar] ||
      exceptionsFromDefinition(patternsDefinition, localHyphenChar);

    caches[localHyphenChar] =
      caches[localHyphenChar] || cloneObj(exceptions[localHyphenChar]);

    return start(
      text,
      patterns,
      caches[localHyphenChar],
      localDebug,
      localHyphenChar,
      localAsyncMode
    );
  };
}
