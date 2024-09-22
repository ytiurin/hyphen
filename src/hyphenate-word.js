function createCharIterator(str) {
  var i = 0;

  function nextChar() {
    return str[i++];
  }

  return nextChar;
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

export function hyphenateWord(
  text,
  levelsTable,
  patternTrie,
  debug,
  hyphenChar
) {
  var levels = new Array(text.length + 1),
    loweredText = ("." + text.toLocaleLowerCase() + ".").split(""),
    wordSlice,
    letter,
    triePtr,
    trieNode,
    patternLevelsIndex,
    patternLevels,
    patternEntityIndex = -1,
    slicer,
    nextSlice,
    isFirstCharacter,
    nextLetter;

  for (var i = levels.length; i--;) levels[i] = 0;

  slicer = createStringSlicer(loweredText);
  nextSlice = slicer[0];
  isFirstCharacter = slicer[1];

  while ((wordSlice = nextSlice())) {
    patternEntityIndex++;
    if (isFirstCharacter()) {
      patternEntityIndex--;
    }

    triePtr = patternTrie;

    nextLetter = createCharIterator(wordSlice);

    while ((letter = nextLetter())) {
      if ((trieNode = triePtr[letter]) === undefined) {
        break;
      }

      triePtr = {};
      patternLevelsIndex = -1;

      switch (Object.prototype.toString.call(trieNode)) {
        case '[object Array]':
          triePtr = trieNode[0];
          patternLevelsIndex = trieNode[1];
          break;
        case '[object Object]':
          triePtr = trieNode;
          break;
        case '[object Number]':
          patternLevelsIndex = trieNode;
          break;
      }

      if (patternLevelsIndex < 0) {
        continue;
      }

      if (!levelsTable[patternLevelsIndex].splice) {
        levelsTable[patternLevelsIndex] = levelsTable[patternLevelsIndex].slice(
          ""
        );
      }

      patternLevels = levelsTable[patternLevelsIndex];

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
