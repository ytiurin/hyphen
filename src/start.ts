import { createTextChunkReader } from './create-text-chunk-reader';
import { hyphenateWord } from './hyphenate-word';
import { PatternData } from './types';

export function start(
  text: string,
  patterns: PatternData[],
  cache: { [chunk: string]: string },
  debug: boolean,
  hyphenChar: string,
  skipHTML: boolean,
  minWordLength: number,
  isAsync: boolean,
) {
  let newText = '';
  let nextTextChunk: string | undefined;
  const { readNextTextChunk, shouldNextHyphenate } = createTextChunkReader(
    text,
    hyphenChar,
    skipHTML,
    minWordLength,
  );

  const states = { hyphenateWord: 1, concatenate: 2 };
  let processedN = 0;
  let hyphenatedN = 0;

  let allTime = new Date().getTime();
  let workTime = 0;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let resolveNewText = function (text: string) {
    // pass
  };

  function done() {
    allTime = new Date().getTime() - allTime;
    resolveNewText(newText);

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`----------------
Hyphenation stats: ${processedN} text chunks processed, ${hyphenatedN} words hyphenated
Work time: ${workTime / 1000}
Wait time: ${(allTime - workTime) / 1000}
All time: ${allTime / 1000}`);
    }
  }

  function nextTick() {
    const loopStart = new Date().getTime();

    while (
      (!isAsync || new Date().getTime() - loopStart < 10) &&
      (nextTextChunk = readNextTextChunk())
    ) {
      const state = shouldNextHyphenate()
        ? states.hyphenateWord
        : states.concatenate;

      switch (state) {
        case states.hyphenateWord:
          if (!cache[nextTextChunk])
            cache[nextTextChunk] = hyphenateWord(
              nextTextChunk,
              patterns,
              debug,
              hyphenChar,
            );

          if (nextTextChunk !== cache[nextTextChunk]) hyphenatedN++;

          nextTextChunk = cache[nextTextChunk];

        // eslint-disable-next-line no-fallthrough
        case states.concatenate:
          newText += nextTextChunk;
      }

      processedN++;
    }
    workTime += new Date().getTime() - loopStart;

    if (!nextTextChunk) {
      done();
    } else {
      setTimeout(nextTick);
    }
  }

  if (isAsync) {
    setTimeout(nextTick);
    return new Promise<string>(function (resolve) {
      resolveNewText = resolve;
    });
  } else {
    nextTick();
    return newText;
  }
}
