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
    cacheKey,
    newText = "",
    textChunk,
    reader = createTextChunkReader(text, hyphenChar, skipHTML, minWordLength),
    readNextTextChunk = reader[0],
    shouldNextHyphenate = reader[1],
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
      (textChunk = readNextTextChunk())
    ) {
      cacheKey = textChunk.length ? "$" + textChunk : "";

      if (shouldNextHyphenate()) {
        if (cache[cacheKey] === undefined) {
          cache[cacheKey] = hyphenateWord(
            textChunk,
            patterns,
            debug,
            hyphenChar
          );
        }

        if (textChunk !== cache[cacheKey]) {
          hyphenatedN++;
        }

        textChunk = cache[cacheKey];
      }

      newText += textChunk;
      processedN++;
    }

    workTime += new Date() - loopStart;

    if (!textChunk) {
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
