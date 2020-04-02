var //
  SETTING_ASYNC_MODE = false,
  SETTING_DEBUG = false,
  SETTING_HYPHEN_CHAR = "\u00AD",
  SETTING_SKIP_HTML = false;

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
    asyncMode = keyOrDefault(options, "async", SETTING_ASYNC_MODE),
    caches = {},
    debug = keyOrDefault(options, "debug", SETTING_DEBUG),
    exceptions = {},
    hyphenChar = keyOrDefault(options, "hyphenChar", SETTING_HYPHEN_CHAR),
    patterns = patternsDefinition.patterns.map(preprocessPattern),
    skipHTML = keyOrDefault(options, "html", SETTING_SKIP_HTML);

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
      localDebug = keyOrDefault(options, "debug", debug),
      localHyphenChar = keyOrDefault(options, "hyphenChar", hyphenChar);

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
      skipHTML,
      asyncMode
    );
  };
}
