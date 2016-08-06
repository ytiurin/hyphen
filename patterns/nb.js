// Hyphenation patterns for Norwegian Bokmal
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-nb.tex
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
    root.hyphenationPatternsNb = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
`;

  // Hyphenation exceptions
  var exceptions=`
at-ten-de
be-tre
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
