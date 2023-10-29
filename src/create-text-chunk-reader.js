export function createTextChunkReader(
  text,
  hyphenChar,
  skipHTML,
  minWordLength
) {
  function readNextTextChunk() {
    var nextTextChunk = "";

    shouldHyphenate = void 0;

    chunkReader: while (nextCharIndex <= text.length) {
      var //
        nextChar = text.charAt(nextCharIndex++),
        charIsLetter =
          (!!nextChar && !/\s|[\!-\@\[-\`\{-\~\u2013-\u203C]/.test(nextChar)) ||
          nextChar === "'",
        charIsAngleOpen = nextChar === "<",
        charIsAngleClose = nextChar === ">",
        charIsHyphen = nextChar === hyphenChar;

      do {
        if (state === STATE_READ_TAG) {
          if (charIsAngleClose) {
            state = STATE_RETURN_UNTOUCHED;
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
            shouldHyphenate ||
            (nextTextChunk.length >= minWordLength && SHOULD_HYPHENATE);
          break;
        }

        shouldHyphenate = SHOULD_SKIP;
        state = STATE_RETURN_UNTOUCHED;
      } while (0);

      if (
        charIsAngleOpen &&
        state !== STATE_RETURN_WORD &&
        skipHTML &&
        !isSpacelike(text.charAt(nextCharIndex))
      ) {
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

        case STATE_RETURN_UNTOUCHED:
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

  var isSpacelike = RegExp.prototype.test.bind(/\s/);

  var //
    nextCharIndex = 0,
    SHOULD_HYPHENATE = 1,
    SHOULD_SKIP = 2,
    shouldHyphenate,
    STATE_READ_TAG = 1,
    STATE_READ_WORD = 2,
    STATE_RETURN_UNTOUCHED = 3,
    STATE_RETURN_WORD = 4,
    state;

  return [readNextTextChunk, shouldNextHyphenate];
}
