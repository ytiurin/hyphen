const isSpacelike = (text: string): boolean => /\s/.test(text);

export function createTextChunkReader(
  text,
  hyphenChar,
  skipHTML,
  minWordLength,
) {
  let nextCharIndex = 0;
  const SHOULD_HYPHENATE = 1;
  const SHOULD_SKIP = 2;
  let shouldHyphenate;
  const STATE_READ_TAG = 1;
  const STATE_READ_WORD = 2;
  const STATE_RETURN_UNTOUCHED = 3;
  const STATE_RETURN_WORD = 4;
  let state;
  function readNextTextChunk() {
    let nextTextChunk = '';

    shouldHyphenate = void 0;

    chunkReader: while (nextCharIndex <= text.length) {
      const nextChar = text.charAt(nextCharIndex++);
      const charIsLetter =
        !!nextChar && !/\s|[!-@[-`{-~\u2013-\u203C]/.test(nextChar);
      const charIsAngleOpen = nextChar === '<';
      const charIsAngleClose = nextChar === '>';
      const charIsHyphen = nextChar === hyphenChar;

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
        // eslint-disable-next-line no-constant-condition
      } while (false);

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

  return { readNextTextChunk, shouldNextHyphenate };
}
