/** Franklin M. Liang's hyphenation algorithm, implemented in Javascript.
 *  Copyright (C) 2016 Yevhen Tiurin (yevhentiurin@gmail.com)
 *  https://github.com/ytiurin/hyphen
 *
 *  Released under the MIT license
 *  https://github.com/ytiurin/hyphen/blob/master/LICENSE
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.createHyphenator = factory();
  }
})(this, function() {
  var // settings
    SETTING_DEBUG = false,
    SETTING_HYPHEN_CHAR = "\u00AD";

  function hyphenateWord(text, patterns, debug, hyphenChar) {
    var pattern,
      patternData,
      patternIndex = 0;

    var p = [];

    var levels = new Array(text.length + 1);

    for (var i = levels.length; i--; ) levels[i] = 0;

    while ((patternData = patterns[patternIndex++])) {
      var patternEntityIndex = text
        .toLocaleLowerCase()
        .indexOf(patternData.text);

      var patternFits =
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
    }

    levels[0] = levels[1] = levels[levels.length - 1] = levels[
      levels.length - 2
    ] = 0;

    var hyphenatedText = "",
      leveledText = "",
      debugHyphenatedText = "";

    for (var i = 0; i < levels.length; i++) {
      hyphenatedText +=
        (levels[i] % 2 === 1 ? hyphenChar : "") + text.charAt(i);
      debugHyphenatedText += (levels[i] % 2 === 1 ? "-" : "") + text.charAt(i);
      leveledText += (levels[i] > 0 ? levels[i] : "") + text.charAt(i);
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

  function iterateSourceText(text) {
    var nextCharIndex = 0;

    var states = { readWord: 1, returnWord: 2, returnChar: 3 };

    return {
      next: function() {
        var nextChar,
          nextWord = "";

        while ((nextChar = text.charAt(nextCharIndex++))) {
          var charIsSpaceOrSpecial = /\s|[\!-\@\[-\`\{-\xbf]/.test(nextChar);

          var state = !charIsSpaceOrSpecial
            ? states.readWord
            : state === states.readWord
              ? states.returnWord
              : states.returnChar;

          switch (state) {
            case states.readWord:
              nextWord += nextChar;
              break;

            case states.returnWord:
              nextCharIndex--;
              return nextWord;

            case states.returnChar:
              return nextChar;
          }
        }
        if (nextWord !== "") {
          return nextWord;
        }
      }
    };
  }

  function start(text, patterns, cache, debug, hyphenChar) {
    var newText = "",
      nextWord,
      readWord = iterateSourceText(text),
      states = { hyphenateWord: 1, concatenate: 2 },
      processedN = 0,
      hyphenatedN = 0;

    while ((nextWord = readWord.next())) {
      var state =
        nextWord.length > 4 ? states.hyphenateWord : states.concatenate;

      switch (state) {
        case states.hyphenateWord:
          if (!cache[nextWord])
            cache[nextWord] = hyphenateWord(
              nextWord,
              patterns,
              debug,
              hyphenChar
            );

          if (nextWord !== cache[nextWord]) hyphenatedN++;

          nextWord = cache[nextWord];

        case states.concatenate:
          newText += nextWord;
      }

      processedN++;
    }

    if (debug)
      console.log(
        "----------------\nHyphenation stats: " +
          processedN +
          " words processed, " +
          hyphenatedN +
          " words hyphenated"
      );

    return newText;
  }

  // extract useful data from pattern
  function preprocessPattern(pattern) {
    var patternCharIndex = 0,
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
      var charIsDot = patternChar === ".",
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

  function purifyPatterns(text) {
    return (
      text
        // Remove comments
        .replace(/%.*/g, "")
        // Remove repeating spaces
        .replace(/\s+/g, " ")
        // Trim spaces
        .replace(/^\s|\s$/g, "")
        // Split to Array
        .split(" ")
    );
  }

  // Hyphenator factory
  return function(patternsDefinition, settings) {
    var // Settings
      debug =
        (settings && settings.debug !== undefined && settings.debug) ||
        SETTING_DEBUG,
      hyphenChar =
        (settings &&
          settings.hyphenChar !== undefined &&
          settings.hyphenChar) ||
        SETTING_HYPHEN_CHAR,
      cache = {},
      // Preprocess patterns
      patterns = (patternsDefinition.patterns.splice
        ? patternsDefinition.patterns
        : purifyPatterns(patternsDefinition.patterns)
      ).map(function(pattern) {
        return preprocessPattern(pattern);
      });
    // Prepare cache
    (patternsDefinition.exceptions.splice
      ? patternsDefinition.exceptions
      : purifyPatterns(patternsDefinition.exceptions)
    ).forEach(function(exception) {
      cache[exception.replace(/\-/g, "")] = exception.replace(
        /\-/g,
        hyphenChar
      );
    });

    // Hyphenator function
    return function(text) {
      return start(text, patterns, cache, debug, hyphenChar);
    };
  };
});
