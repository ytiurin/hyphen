var isNotLetter = RegExp.prototype.test.bind(
  /\s|(?![\'])[\!-\@\[-\`\{-\~\u2013-\u203C]/
);

export function createHTMLVerifier(skipHTML) {
  var skip = false;

  return function (accumulate, chars) {
    if (skip) {
      if (chars[0] === ">") {
        accumulate();
        skip = false;
      }
    } else if (
      chars[0] === "<" &&
      (!isNotLetter(chars[1]) || chars[1] === "/") &&
      skipHTML
    ) {
      skip = true;
    }

    return skip;
  };
}

export function createHyphenCharVerifier(hyphenChar) {
  var skip = false;

  return function (accumulate, chars) {
    if (skip) {
      if (!isNotLetter(chars[0]) && isNotLetter(chars[1])) {
        accumulate();
        skip = false;
      }
    } else if (!isNotLetter(chars[0]) && chars[1] === hyphenChar) {
      skip = true;
    }

    return skip;
  };
}

export function createHyphenationVerifier(verifiers, minWordLength) {
  return function () {
    var accum0 = "";
    var accum = "";

    function accumulate() {
      accum0 += accum;
      accum = "";
    }

    function resolveWith(value) {
      accum0 = "";
      accum = "";

      return value;
    }

    return function (char1, char2) {
      accum += char1;

      var skip = verifiers.reduce(function (skip, verify) {
        return skip || verify(accumulate, [char1, char2]);
      }, false);

      if (!skip) {
        if (isNotLetter(char1) && !isNotLetter(char2)) {
          accumulate();
        }

        if (!isNotLetter(char1) && isNotLetter(char2)) {
          if (accum.length >= minWordLength) {
            return resolveWith([accum0, accum]);
          } else {
            accumulate();
          }
        }
      }

      if (char2 === "") {
        if (accum.length < minWordLength || skip) {
          accumulate();
        }

        return resolveWith([accum0, accum]);
      }
    };
  };
}
