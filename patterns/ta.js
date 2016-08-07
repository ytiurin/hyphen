// Hyphenation patterns for Tamil
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-ta.tex
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
    root.hyphenationPatternsTa = factory();
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
1அ1
1ஆ1
1இ1
1ஈ1
1உ1
1ஊ1
1எ1
1ஏ1
1ஐ1
1ஒ1
1ஓ1
1ஔ1
% Break after any dependent vowel, but not before.
ா1
ி1
ீ1
ு1
ூ1
ெ1
ே1
ை1
ொ1
ோ1
ௌ1
% Break before or after any consonant.
1க
1ங
1ச
1ஜ
1ஞ
1ட
1ண
1த
1ந
1ப
1ம
1ய
1ர
1ற
1ல
1ள
1ழ
1வ
1ஷ
1ஸ
1ஹ
% Do not break before any consonant + virama.
2க்1
2ங்1
2ச்1
2ஞ்1
2ட்1
2ண்1
2த்1
2ன்1
2ந்1
2ப்1
2ம்1
2ய்1
2ர்1
2ற்1
2ல்1
2ள்1
2ழ்1
2வ்1
2ஷ்1
2ஸ்1
2ஹ்1
% Do not break before anusvara, visarga and length mark.
2ஂ1
2ஃ1
2ௗ1
% Do not break before virama but break after virama.
2்1
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
