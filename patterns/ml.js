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
    root.hyphenationPatternsMl = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21,002,2",
    '{"‍":0,"‌":1,"അ":1,"ആ":1,"ഇ":1,"ഈ":1,"ഉ":1,"ഊ":1,"ഋ":1,"ൠ":1,"ഌ":1,"ൡ":1,"എ":1,"ഏ":1,"ഐ":1,"ഒ":1,"ഓ":1,"ഔ":1,"ാ":2,"ി":2,"ീ":2,"ു":2,"ൂ":2,"ൃ":2,"െ":2,"േ":2,"ൈ":2,"ൊ":2,"ോ":2,"ൌ":2,"ൗ":2,"ക":[{"്":[{"‍":6},5]},3],"ഖ":3,"ഗ":3,"ഘ":3,"ങ":3,"ച":3,"ഛ":3,"ജ":3,"ഝ":3,"ഞ":3,"ട":3,"ഠ":3,"ഡ":3,"ഢ":3,"ണ":[{"്":[{"‍":6},5]},3],"ത":3,"ഥ":3,"ദ":3,"ധ":3,"ന":[{"്":[{"‍":6},5]},3],"പ":3,"ഫ":3,"ബ":3,"ഭ":3,"മ":3,"യ":3,"ര":[{"്":[{"‍":6},5]},3],"റ":3,"ല":[{"്":[{"‍":6},5]},3],"ള":[{"്":[{"‍":6},5]},3],"ഴ":3,"വ":3,"ശ":3,"ഷ":3,"സ":3,"ഹ":3,"ഃ":4,"ം":4,"്":0,"ൺ":6,"ൻ":6,"ർ":6,"ൽ":6,"ൾ":6,"ൿ":6}',
    []
  ];
});
