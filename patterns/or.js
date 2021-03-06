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
    root.hyphenationPatternsOr = factory();
  }
})(this, function () {
  var patterns = [],
    hyphenation = [];

  // title: Hyphenation patterns for Oriya
  // copyright: Copyright (C) 2016 Santhosh Thottingal
  // notice: This file is part of the hyph-utf8 package.
  //     See http://www.hyphenation.org/tex for more information.
  // source: https://github.com/santhoshtr/hyphenation/
  // language:
  //     name: Odia, Oriya
  //     tag: or
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
  //             files (the “Software”), to deal in the Software without
  //             restriction, including without limitation the rights to use,
  //             copy, modify, merge, publish, distribute, sublicense, and/or sell
  //             copies of the Software, and to permit persons to whom the
  //             Software is furnished to do so, subject to the following
  //             conditions:
  //
  //             The above copyright notice and this permission notice shall be
  //             included in all copies or substantial portions of the Software.
  //
  //             THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
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
    "ଅ1",
    "ଆ1",
    "ଇ1",
    "ଈ1",
    "ଉ1",
    "ଊ1",
    "ଋ1",
    "ୠ1",
    "ଌ1",
    "ୡ1",
    "ଏ1",
    "ଐ1",
    "ଓ1",
    "ଔ1",
    // Break after any dependent vowel, but not before.
    "ା1",
    "ି1",
    "ୀ1",
    "ୁ1",
    "ୂ1",
    "ୃ1",
    "େ1",
    "ୈ1",
    "ୋ1",
    "ୌ1",
    // Break before or after any consonant.
    "1କ",
    "1ଖ",
    "1ଗ",
    "1ଘ",
    "1ଙ",
    "1ଚ",
    "1ଛ",
    "1ଜ",
    "1ଝ",
    "1ଞ",
    "1ଟ",
    "1ଠ",
    "1ଡ",
    "1ଢ",
    "1ଣ",
    "1ତ",
    "1ଥ",
    "1ଦ",
    "1ଧ",
    "1ନ",
    "1ପ",
    "1ଫ",
    "1ବ",
    "1ଭ",
    "1ମ",
    "1ଯ",
    "1ର",
    "1ଲ",
    "1ଳ",
    "1ଵ",
    "1ଶ",
    "1ଷ",
    "1ସ",
    "1ହ",
    // Do not break before anusvara, visarga and length mark.
    "2ଂ1",
    "2ଃ1",
    "2ୗ1",
    "2ଁ1",
    // Do not break either side of virama (may be within conjunct).
    "2୍2",
    ""
  ];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
