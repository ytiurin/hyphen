function preprocessPattern(pattern) {
  var //
    patternCharIndex = 0,
    patternChar,
    patternData = {
      pattern: pattern,
      text: "",
      levels: [],
      stickToLeft: 0,
      stickToRight: 0
    },
    states = { alphabet: 1, level: 2, stickToLeft: 3, stickToRight: 4 };

  while ((patternChar = pattern.charAt(patternCharIndex++))) {
    var //
      charIsDot = patternChar === ".",
      charIsNumber = !charIsDot && /\d/.test(patternChar),
      state = charIsDot
        ? patternCharIndex - 1 === 0
          ? states.stickToLeft
          : states.stickToRight
        : charIsNumber
        ? states.level
        : states.alphabet;

    switch (state) {
      case states.alphabet:
        !prevCharIsNumber && patternData.levels.push(0);
        patternData.text += patternChar;
        break;

      case states.level:
        patternData.levels.push(parseInt(patternChar));
        break;

      case states.stickToLeft:
        patternData.stickToLeft = true;
        break;

      case states.stickToRight:
        patternData.stickToRight = true;
        break;
    }

    var prevCharIsNumber = charIsNumber;
  }

  return patternData;
}
