// Hyphenation patterns for Oriya
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-or.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsOr = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
% GENERAL RULE
% Do not break either side of ZERO-WIDTH JOINER  (U+200D)
2‍2
% Break on both sides of ZERO-WIDTH NON JOINER  (U+200C)
1‌1
% Break before or after any independent vowel.
ଅ1
ଆ1
ଇ1
ଈ1
ଉ1
ଊ1
ଋ1
ୠ1
ଌ1
ୡ1
ଏ1
ଐ1
ଓ1
ଔ1
% Break after any dependent vowel, but not before.
ା1
ି1
ୀ1
ୁ1
ୂ1
ୃ1
େ1
ୈ1
ୋ1
ୌ1
% Break before or after any consonant.
1କ
1ଖ
1ଗ
1ଘ
1ଙ
1ଚ
1ଛ
1ଜ
1ଝ
1ଞ
1ଟ
1ଠ
1ଡ
1ଢ
1ଣ
1ତ
1ଥ
1ଦ
1ଧ
1ନ
1ପ
1ଫ
1ବ
1ଭ
1ମ
1ଯ
1ର
1ଲ
1ଳ
1ଵ
1ଶ
1ଷ
1ସ
1ହ
% Do not break before anusvara, visarga and length mark.
2ଂ1
2ଃ1
2ୗ1
2ଁ1
% Do not break either side of virama (may be within conjunct).
2୍2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
