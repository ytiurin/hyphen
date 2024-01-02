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
    root.hyphenationPatternsPa = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"ਅ":2,"ਆ":2,"ਇ":2,"ਈ":2,"ਉ":2,"ਊ":2,"ਏ":2,"ਐ":2,"ਓ":2,"ਔ":2,"ਾ":2,"ਿ":2,"ੀ":2,"ੁ":2,"ੂ":2,"ੇ":2,"ੈ":2,"ੋ":2,"ੌ":2,"ਕ":3,"ਖ":3,"ਗ":3,"ਘ":3,"ਙ":3,"ਚ":3,"ਛ":3,"ਜ":3,"ਝ":3,"ਞ":3,"ਟ":3,"ਠ":3,"ਡ":3,"ਢ":3,"ਣ":3,"ਤ":3,"ਥ":3,"ਦ":3,"ਧ":3,"ਨ":3,"ਪ":3,"ਫ":3,"ਬ":3,"ਭ":3,"ਮ":3,"ਯ":3,"ਰ":3,"ਲ":3,"ਲ਼":3,"ਵ":3,"ਸ਼":3,"ਸ":3,"ਹ":3,"ਁ":4,"ਂ":4,"ਃ":4,"੍":0,"ੰ":0,"ੱ":0}',
    []
  ];
});
