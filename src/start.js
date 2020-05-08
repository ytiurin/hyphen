function start(
  text,
  patterns,
  cache,
  debug,
  hyphenChar,
  skipHTML,
  minWordLength,
  isAsync
) {
  function done() {
    allTime = new Date() - allTime;
    resolveNewText(newText);

    if (debug) {
      console.log(
        "----------------\nHyphenation stats: " +
          processedN +
          " text chunks processed, " +
          hyphenatedN +
          " words hyphenated"
      );
      console.log("Work time: " + workTime / 1000);
      console.log("Wait time: " + (allTime - workTime) / 1000);
      console.log("All time: " + allTime / 1000);
    }
  }

  var //
    newText = "",
    nextTextChunk,
    reader = createTextChunkReader(text, hyphenChar, skipHTML, minWordLength),
    readNextTextChunk = reader[0],
    shouldNextHyphenate = reader[1],
    states = { hyphenateWord: 1, concatenate: 2 },
    processedN = 0,
    hyphenatedN = 0;

  var //
    allTime = new Date(),
    workTime = 0;

  var resolveNewText = function () {};

  function nextTick() {
    var loopStart = new Date();

    while (
      (!isAsync || new Date() - loopStart < 10) &&
      (nextTextChunk = readNextTextChunk())
    ) {
      var state = shouldNextHyphenate()
        ? states.hyphenateWord
        : states.concatenate;

      switch (state) {
        case states.hyphenateWord:
          if (!cache[nextTextChunk])
            cache[nextTextChunk] = hyphenateWord(
              nextTextChunk,
              patterns,
              debug,
              hyphenChar
            );

          if (nextTextChunk !== cache[nextTextChunk]) hyphenatedN++;

          nextTextChunk = cache[nextTextChunk];

        case states.concatenate:
          newText += nextTextChunk;
      }

      processedN++;
    }
    workTime += new Date() - loopStart;

    if (!nextTextChunk) {
      done();
    } else {
      setTimeout(nextTick);
    }
  }

  if (isAsync) {
    setTimeout(nextTick);
    return new Promise(function (resolve) {
      resolveNewText = resolve;
    });
  } else {
    nextTick();
    return newText;
  }
}
