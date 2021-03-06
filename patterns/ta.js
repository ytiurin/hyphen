(function (root, factory) {
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
    root.hyphenationPatternsTa = factory();
  }
})(this, function () {
  var patterns = [],
    hyphenation = [];

  // title: Hyphenation patterns for Tamil
  // copyright: Copyright (C) 2016 Santhosh Thottingal
  // notice: This file is part of the hyph-utf8 package.
  //     See http://www.hyphenation.org/tex for more information.
  // source: https://github.com/santhoshtr/hyphenation/
  // language:
  //     name: Tamil
  //     tag: ta
  // authors:
  //   -
  //     name: Santhosh Thottingal
  //     contact: santhosh.thottingal (at) gmail.com
  // licence:
  //     - This file is available under any of the following licences:
  //     -
  //         name: MIT
  //         url: https://opensource.org/licenses/MIT
  //         text: >
  //             Permission is hereby granted, free of charge, to any person
  //             obtaining a copy of this software and associated documentation
  //             files (the "Software"), to deal in the Software without
  //             restriction, including without limitation the rights to use,
  //             copy, modify, merge, publish, distribute, sublicense, and/or sell
  //             copies of the Software, and to permit persons to whom the
  //             Software is furnished to do so, subject to the following
  //             conditions:
  //
  //             The above copyright notice and this permission notice shall be
  //             included in all copies or substantial portions of the Software.
  //
  //             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  //             EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
  //             OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  //             NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  //             HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  //             WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
  //             FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  //             OTHER DEALINGS IN THE SOFTWARE.
  //     -
  //         name: LGPL
  //         version: 3
  //         or_later: true
  //         url: http://www.gnu.org/licenses/lgpl.html
  //     -
  //         name: GPL
  //         version: 3
  //         or_later: true
  //         url: http://www.gnu.org/licenses/gpl.html
  //
  var patterns = [
    // GENERAL RULE
    // Do not break either side of ZERO-WIDTH JOINER  (U+200D)
    "2‍2",
    // Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
    "1‌1",
    // Break before or after any independent vowel.
    "1அ1",
    "1ஆ1",
    "1இ1",
    "1ஈ1",
    "1உ1",
    "1ஊ1",
    "1எ1",
    "1ஏ1",
    "1ஐ1",
    "1ஒ1",
    "1ஓ1",
    "1ஔ1",
    // Break after any dependent vowel, but not before.
    "ா1",
    "ி1",
    "ீ1",
    "ு1",
    "ூ1",
    "ெ1",
    "ே1",
    "ை1",
    "ொ1",
    "ோ1",
    "ௌ1",
    // Break before or after any consonant.
    "1க",
    "1ங",
    "1ச",
    "1ஜ",
    "1ஞ",
    "1ட",
    "1ண",
    "1த",
    "1ந",
    "1ப",
    "1ம",
    "1ய",
    "1ர",
    "1ற",
    "1ல",
    "1ள",
    "1ழ",
    "1வ",
    "1ஷ",
    "1ஸ",
    "1ஹ",
    // Do not break before any consonant + virama.
    "2க்1",
    "2ங்1",
    "2ச்1",
    "2ஞ்1",
    "2ட்1",
    "2ண்1",
    "2த்1",
    "2ன்1",
    "2ந்1",
    "2ப்1",
    "2ம்1",
    "2ய்1",
    "2ர்1",
    "2ற்1",
    "2ல்1",
    "2ள்1",
    "2ழ்1",
    "2வ்1",
    "2ஷ்1",
    "2ஸ்1",
    "2ஹ்1",
    // Do not break before anusvara, visarga and length mark.
    "2ஂ1",
    "2ஃ1",
    "2ௗ1",
    // Do not break before virama but break after virama.
    "2்1",
    ""
  ];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
