import { preprocessPattern } from './preprocess-pattern';
import { start } from './start';

const MIN_WORD_LENGTH_BOUNDRY = 5;
const SETTING_DEFAULT_ASYNC = false;
const SETTING_DEFAULT_DEBUG = false;
const SETTING_DEFAULT_HTML = false;
const SETTING_DEFAULT_HYPH_CHAR = '\u00AD';
const SETTING_NAME_ASYNC = 'async';
const SETTING_NAME_DEBUG = 'debug';
const SETTING_NAME_HTML = 'html';
const SETTING_NAME_HYPH_CHAR = 'hyphenChar';
const SETTING_NAME_MIN_WORD_LENGTH = 'minWordLength';

function cloneObj(source) {
  const target = {};
  for (const key in source) {
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
    exceptions[exception.replace(/-/g, '')] = exception.replace(
      /-/g,
      hyphenChar,
    );
    return exceptions;
  }, {});
}

export function createHyphenator(patternsDefinition, options: object = {}) {
  const //
    asyncMode = keyOrDefault(
      options,
      SETTING_NAME_ASYNC,
      SETTING_DEFAULT_ASYNC,
    ),
    caches = {},
    debug = keyOrDefault(options, SETTING_NAME_DEBUG, SETTING_DEFAULT_DEBUG),
    exceptions = {},
    hyphenChar = keyOrDefault(
      options,
      SETTING_NAME_HYPH_CHAR,
      SETTING_DEFAULT_HYPH_CHAR,
    ),
    patterns = patternsDefinition.patterns.map(preprocessPattern),
    minWordLength = Math.max(
      options[SETTING_NAME_MIN_WORD_LENGTH] >> 0,
      MIN_WORD_LENGTH_BOUNDRY,
    ),
    skipHTML = keyOrDefault(options, SETTING_NAME_HTML, SETTING_DEFAULT_HTML);

  // Prepare cache
  const cacheKey = hyphenChar + minWordLength;
  exceptions[cacheKey] = exceptionsFromDefinition(
    patternsDefinition,
    hyphenChar,
  );
  caches[cacheKey] = cloneObj(exceptions[cacheKey]);

  return function (text: string, options: object = {}) {
    const localDebug = keyOrDefault(options, SETTING_NAME_DEBUG, debug),
      localHyphenChar = keyOrDefault(
        options,
        SETTING_NAME_HYPH_CHAR,
        hyphenChar,
      ),
      localMinWordLength = Math.max(
        options[SETTING_NAME_MIN_WORD_LENGTH] >> 0,
        minWordLength,
      ),
      cacheKey = localHyphenChar + localMinWordLength;

    if (!exceptions[cacheKey]) {
      exceptions[cacheKey] = exceptionsFromDefinition(
        patternsDefinition,
        localHyphenChar,
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
      asyncMode,
    );
  };
}
