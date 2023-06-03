function hyphenateWord(text, patterns, debug, hyphenChar) {
  var //
    levels = new Array(text.length + 1),
    loweredText = text.toLocaleLowerCase(),
    p = [],
    patternData,
    patternIndex = 0;

  for (var i = levels.length; i--; ) levels[i] = 0;

  while ((patternData = patterns[patternIndex++])) {
    var //
      fromChar = 0,
      endPattern = false;
    while (!endPattern) {
      var //
        patternEntityIndex = loweredText.indexOf(patternData.text, fromChar),
        patternFits =
          patternEntityIndex > -1 &&
          (patternData.stickToLeft ? patternEntityIndex === 0 : true) &&
          (patternData.stickToRight
            ? patternEntityIndex + patternData.text.length === text.length
            : true);

      if (patternFits) {
        p.push(patternData.pattern + ">" + patternData.levels.join(""));

        for (var i = 0; i < patternData.levels.length; i++)
          levels[patternEntityIndex + i] = Math.max(
            patternData.levels[i],
            levels[patternEntityIndex + i]
          );
      }
      if (patternEntityIndex > -1 && patternData.text.length > 0) {
        fromChar = patternEntityIndex + patternData.text.length + 1;
      } else {
        endPattern = true;
      }
    }
  }

  levels[0] = levels[1] = levels[levels.length - 1] = levels[
    levels.length - 2
  ] = 0;

  var //
    hyphenatedText = "",
    leveledText = "",
    debugHyphenatedText = "";

  for (var i = 0; i < levels.length; i++) {
    hyphenatedText += (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);

    if (debug) {
      debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
      leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
    }
  }

  if (debug)
    console.log.apply(
      console,
      [text, "->"]
        .concat(p)
        .concat(["->"])
        .concat(levels)
        .concat(["->", leveledText])
        .concat(["->", debugHyphenatedText])
    );

  return hyphenatedText;
}
