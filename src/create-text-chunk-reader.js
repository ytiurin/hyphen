function createTextChunkReader(text, hyphenChar) {
  function readNextTextChunk() {
    var nextTextChunk = "";

    shouldHyphenate = void 0;

    chunkReader: while (nextCharIndex <= text.length) {
      var //
        nextChar = text.charAt(nextCharIndex++),
        charIsLetter =
          !!nextChar && !/\s|[\!-\@\[-\`\{-\~\u2013-\u203C]/.test(nextChar),
        charIsAngleOpen = nextChar === "<",
        charIsAngleClose = nextChar === ">",
        charIsHyphen = nextChar === hyphenChar;

      do {
        if (state === STATE_READ_TAG) {
          if (charIsAngleClose) {
            state = STATE_RETURN_TAG;
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
            shouldHyphenate || (nextTextChunk.length > 4 && SHOULD_HYPHENATE);
          break;
        }

        shouldHyphenate = SHOULD_SKIP;
        state = STATE_RETURN_CHAR;
      } while (0);

      if (charIsAngleOpen && state !== STATE_RETURN_WORD) {
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

        case STATE_RETURN_CHAR:
          nextTextChunk = nextChar;
          break chunkReader;

        case STATE_RETURN_TAG:
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

  var //
    nextCharIndex = 0,
    SHOULD_HYPHENATE = 1,
    SHOULD_SKIP = 2,
    shouldHyphenate,
    STATE_READ_TAG = 1,
    STATE_READ_WORD = 2,
    STATE_RETURN_CHAR = 3,
    STATE_RETURN_TAG = 4,
    STATE_RETURN_WORD = 5,
    state;

  return [readNextTextChunk, shouldNextHyphenate];
}
