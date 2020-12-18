import { PatternData } from "./types";

export function hyphenateWord(
  text: string,
  patterns: PatternData[],
  debug: boolean,
  hyphenChar: string,
): string {
  const levels = new Array(text.length + 1);
  const loweredText = text.toLocaleLowerCase();
  const p = [];
  for (let i = levels.length; i--; ) levels[i] = 0;

  for (const patternData of patterns) {
    let fromChar = 0;
    let endPattern = false;
    while (!endPattern) {
      const patternEntityIndex = loweredText.indexOf(
        patternData.text,
        fromChar,
      );
      const patternFits =
        patternEntityIndex > -1 &&
        (patternData.stickToLeft ? patternEntityIndex === 0 : true) &&
        (patternData.stickToRight
          ? patternEntityIndex + patternData.text.length === text.length
          : true);

      if (patternFits) {
        p.push(patternData.pattern + ">" + patternData.levels.join(""));

        for (let i = 0; i < patternData.levels.length; i++)
          levels[patternEntityIndex + i] = Math.max(
            patternData.levels[i],
            levels[patternEntityIndex + i],
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

  let hyphenatedText = "";
  let leveledText = "";
  let debugHyphenatedText = "";

  for (let i = 0; i < levels.length; i++) {
    hyphenatedText += (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
    debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
    leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
  }

  if (debug)
    // eslint-disable-next-line no-console
    console.log({
      text,
      p,
      levels,
      leveledText,
      debugHyphenatedText,
    });

  return hyphenatedText;
}
