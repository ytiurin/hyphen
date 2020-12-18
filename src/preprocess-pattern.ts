import { PatternData } from "./types";

export function preprocessPattern(pattern: string): PatternData {
  let patternCharIndex = 0;
  let patternChar = "";
  let prevCharIsNumber = false;
  const patternData: PatternData = {
    pattern: pattern,
    text: "",
    levels: [],
    stickToLeft: false,
    stickToRight: false,
  };
  const states = { alphabet: 1, level: 2, stickToLeft: 3, stickToRight: 4 };

  while ((patternChar = pattern.charAt(patternCharIndex++))) {
    const charIsDot = patternChar === ".";
    const charIsNumber = !charIsDot && /\d/.test(patternChar);
    const state = charIsDot
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

    prevCharIsNumber = charIsNumber;
  }

  return patternData;
}
