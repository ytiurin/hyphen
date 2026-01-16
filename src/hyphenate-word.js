import { levelsToMarkers } from "./markers.js";

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

export function hyphenateWord(text, loweredText, levelsTable, patternTrie) {
  var levels = new Array(text.length + 1),
    loweredText = ("." + loweredText + ".").split(""),
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

  for (var i = levels.length; i--; ) levels[i] = 0;

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
        case "[object Array]":
          triePtr = trieNode[0];
          patternLevelsIndex = trieNode[1];
          break;
        case "[object Object]":
          triePtr = trieNode;
          break;
        case "[object Number]":
          patternLevelsIndex = trieNode;
          break;
      }

      if (patternLevelsIndex < 0) {
        continue;
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

  DEV: {
    console.log(
      loweredText.join(""),
      levels.join(""),
      levelsToMarkers(levels).join()
    );
  }

  return levelsToMarkers(levels);
}
