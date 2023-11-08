function createCharIterator(str) {
  var i = 0;

  function nextChar() {
    return str[i++];
  }

  function isLastLetter() {
    return str.length === i + 1;
  }

  return [nextChar, isLastLetter];
}

function createStringSlicer(str) {
  var i = 0,
    slice = str;

  function next() {
    slice = str.slice(i++);

    if (slice.length < 3) {
      return;
    }

    return slice;
  }

  function isFirstCharacter() {
    return i === 2;
  }

  return [next, isFirstCharacter];
}

export function hyphenateWord(text, patternTree, debug, hyphenChar) {
  var levels = new Array(text.length + 1),
    loweredText = ("." + text.toLocaleLowerCase() + ".").split(""),
    wordSlice,
    letter,
    treePtr,
    nextPtr,
    patternLevels,
    patternEntityIndex = -1,
    slicer,
    nextSlice,
    isFirstCharacter,
    charIterator,
    nextLetter,
    isLastLetter;

  for (var i = levels.length; i--; ) levels[i] = 0;

  slicer = createStringSlicer(loweredText);
  nextSlice = slicer[0];
  isFirstCharacter = slicer[1];

  while ((wordSlice = nextSlice())) {
    patternEntityIndex++;
    if (isFirstCharacter()) {
      patternEntityIndex--;
    }

    treePtr = patternTree;

    charIterator = createCharIterator(wordSlice);
    nextLetter = charIterator[0];
    isLastLetter = charIterator[1];

    while ((letter = nextLetter())) {
      if (treePtr[letter] === undefined) {
        break;
      }

      nextPtr = treePtr[letter];
      treePtr = nextPtr[0];
      patternLevels = nextPtr[1];

      if (isLastLetter()) {
        // ignore patterns for last letter
        continue;
      }

      if (patternLevels === undefined) {
        continue;
      }

      for (var k = 0; k < patternLevels.length; k++)
        levels[patternEntityIndex + k] = Math.max(
          patternLevels[k],
          levels[patternEntityIndex + k]
        );
    }
  }

  levels[0] = levels[1] = levels[levels.length - 1] = levels[
    levels.length - 2
  ] = 0;

  var hyphenatedText = "";

  DEV: {
    var leveledText = "",
      debugHyphenatedText = "";
  }

  for (var i = 0; i < levels.length; i++) {
    hyphenatedText += (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);

    DEV: if (debug) {
      debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
      leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
    }
  }

  DEV: if (debug)
    console.log.apply(
      console,
      [text, "->"]
        .concat(levels)
        .concat(["->", leveledText])
        .concat(["->", debugHyphenatedText])
    );

  return hyphenatedText;
}
