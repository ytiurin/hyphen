var isNotLetter = RegExp.prototype.test.bind(
  /\s|(?![\'])[\!-\@\[-\`\{-\~\u2013-\u203C]/
);

export function createHyphenationVerifier(hyphenChar, skipHTML, minWordLength) {
  return function () {
    var accum0 = "";
    var accum = "";
    var isHTMLTag = false;
    var skipCurrent = false;

    function resolveWith(value) {
      accum0 = "";
      accum = "";
      isHTMLTag = false;
      skipCurrent = false;

      return value;
    }

    return function (char1, char2) {
      accum += char1;

      if (isHTMLTag) {
        if (char1 === ">") {
          accum0 += accum;
          accum = "";
          isHTMLTag = false;
        }
      } else {
        if (char1 === hyphenChar) {
          skipCurrent = true;
        }

        if (
          char1 === "<" &&
          (!isNotLetter(char2) || char2 === "/") &&
          skipHTML
        ) {
          isHTMLTag = true;
        }

        if (isNotLetter(char1) && !isNotLetter(char2)) {
          accum0 += accum;
          accum = "";
        }

        if (!isNotLetter(char1) && isNotLetter(char2)) {
          if (accum.length >= minWordLength && !skipCurrent) {
            return resolveWith([accum0, accum]);
          } else {
            accum0 += accum;
            accum = "";
          }
        }
      }

      if (char2 === "") {
        if (accum.length < minWordLength || skipCurrent) {
          accum0 += accum;
          accum = "";
        }

        return resolveWith([accum0, accum]);
      }
    };
  };
}
