// Hyphenation patterns for Telugu
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-te.tex
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
    root.hyphenationPatternsTe = factory();
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
అ1
ఆ1
ఇ1
ఈ1
ఉ1
ఊ1
ఋ1
ౠ1
ఌ1
ౡ1
ఎ1
ఏ1
ఐ1
ఒ1
ఓ1
ఔ1
% Break after any dependent vowel, but not before.
ా1
ి1
ీ1
ు1
ూ1
ృ1
ౄ1
ె1
ే1
ై1
ొ1
ో1
ౌ1
% Break before or after any consonant.
1క
1ఖ
1గ
1ఘ
1ఙ
1చ
1ఛ
1జ
1ఝ
1ఞ
1ట
1ఠ
1డ
1ఢ
1ణ
1త
1థ
1ద
1ధ
1న
1ప
1ఫ
1బ
1భ
1మ
1య
1ర
1ఱ
1ల
1ళ
1వ
1శ
1ష
1స
1హ
% Do not break before chandrabindu, anusvara, visarga,
% length mark and ai length mark.
2ఁ1
2ం1
2ః1
2ౕ1
2ౖ1
% Do not break either side of virama (may be within conjunct).
2్2
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
