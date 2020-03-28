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
      (settings && settings.hyphenChar !== undefined && settings.hyphenChar) ||
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
