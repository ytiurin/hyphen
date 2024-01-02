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
    root.hyphenationPatternsMr = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"अ":2,"आ":2,"इ":2,"ई":2,"उ":2,"ऊ":2,"ऋ":2,"ॠ":2,"ऌ":2,"ॡ":2,"ए":2,"ऐ":2,"ओ":2,"औ":2,"ा":2,"ि":2,"ी":2,"ु":2,"ू":2,"ृ":2,"ॄ":2,"ॢ":2,"ॣ":2,"े":2,"ै":2,"ो":2,"ौ":2,"क":3,"ख":3,"ग":3,"घ":3,"ङ":3,"च":3,"छ":3,"ज":3,"झ":3,"ञ":3,"ट":3,"ठ":3,"ड":3,"ढ":3,"ण":3,"त":3,"थ":3,"द":3,"ध":3,"न":3,"प":3,"फ":3,"ब":3,"भ":3,"म":3,"य":3,"र":3,"ल":3,"ळ":3,"व":3,"श":3,"ष":3,"स":3,"ह":3,"ँ":4,"ं":4,"ः":4,"ऽ":4,"॑":4,"॒":4,"्":0}',
    []
  ];
});
