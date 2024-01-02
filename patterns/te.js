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
    root.hyphenationPatternsTe = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"అ":2,"ఆ":2,"ఇ":2,"ఈ":2,"ఉ":2,"ఊ":2,"ఋ":2,"ౠ":2,"ఌ":2,"ౡ":2,"ఎ":2,"ఏ":2,"ఐ":2,"ఒ":2,"ఓ":2,"ఔ":2,"ా":2,"ి":2,"ీ":2,"ు":2,"ూ":2,"ృ":2,"ౄ":2,"ె":2,"ే":2,"ై":2,"ొ":2,"ో":2,"ౌ":2,"క":3,"ఖ":3,"గ":3,"ఘ":3,"ఙ":3,"చ":3,"ఛ":3,"జ":3,"ఝ":3,"ఞ":3,"ట":3,"ఠ":3,"డ":3,"ఢ":3,"ణ":3,"త":3,"థ":3,"ద":3,"ధ":3,"న":3,"ప":3,"ఫ":3,"బ":3,"భ":3,"మ":3,"య":3,"ర":3,"ఱ":3,"ల":3,"ళ":3,"వ":3,"శ":3,"ష":3,"స":3,"హ":3,"ఁ":4,"ం":4,"ః":4,"ౕ":4,"ౖ":4,"్":0}',
    []
  ];
});
