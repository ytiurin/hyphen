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
    '{"‍":[{},[2,2]],"‌":[{},[1,1]],"अ":[{},[0,1]],"आ":[{},[0,1]],"इ":[{},[0,1]],"ई":[{},[0,1]],"उ":[{},[0,1]],"ऊ":[{},[0,1]],"ऋ":[{},[0,1]],"ॠ":[{},[0,1]],"ऌ":[{},[0,1]],"ॡ":[{},[0,1]],"ए":[{},[0,1]],"ऐ":[{},[0,1]],"ओ":[{},[0,1]],"औ":[{},[0,1]],"ा":[{},[0,1]],"ि":[{},[0,1]],"ी":[{},[0,1]],"ु":[{},[0,1]],"ू":[{},[0,1]],"ृ":[{},[0,1]],"ॄ":[{},[0,1]],"ॢ":[{},[0,1]],"ॣ":[{},[0,1]],"े":[{},[0,1]],"ै":[{},[0,1]],"ो":[{},[0,1]],"ौ":[{},[0,1]],"क":[{},[1]],"ख":[{},[1]],"ग":[{},[1]],"घ":[{},[1]],"ङ":[{},[1]],"च":[{},[1]],"छ":[{},[1]],"ज":[{},[1]],"झ":[{},[1]],"ञ":[{},[1]],"ट":[{},[1]],"ठ":[{},[1]],"ड":[{},[1]],"ढ":[{},[1]],"ण":[{},[1]],"त":[{},[1]],"थ":[{},[1]],"द":[{},[1]],"ध":[{},[1]],"न":[{},[1]],"प":[{},[1]],"फ":[{},[1]],"ब":[{},[1]],"भ":[{},[1]],"म":[{},[1]],"य":[{},[1]],"र":[{},[1]],"ल":[{},[1]],"ळ":[{},[1]],"व":[{},[1]],"श":[{},[1]],"ष":[{},[1]],"स":[{},[1]],"ह":[{},[1]],"ँ":[{},[2,1]],"ं":[{},[2,1]],"ः":[{},[2,1]],"ऽ":[{},[2,1]],"॑":[{},[2,1]],"॒":[{},[2,1]],"्":[{},[2,2]]}',
    []
  ];
});
