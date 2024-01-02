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
    root.hyphenationPatternsKn = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"ಅ":2,"ಆ":2,"ಇ":2,"ಈ":2,"ಉ":2,"ಊ":2,"ಋ":2,"ೠ":2,"ಌ":2,"ೡ":2,"ಎ":2,"ಏ":2,"ಐ":2,"ಒ":2,"ಓ":2,"ಔ":2,"ಾ":2,"ಿ":2,"ೀ":2,"ು":2,"ೂ":2,"ೃ":2,"ೄ":2,"ೆ":2,"ೇ":2,"ೈ":2,"ೊ":2,"ೋ":2,"ೌ":2,"ಕ":3,"ಖ":3,"ಗ":3,"ಘ":3,"ಙ":3,"ಚ":3,"ಛ":3,"ಜ":3,"ಝ":3,"ಞ":3,"ಟ":3,"ಠ":3,"ಡ":3,"ಢ":3,"ಣ":3,"ತ":3,"ಥ":3,"ದ":3,"ಧ":3,"ನ":3,"ಪ":3,"ಫ":3,"ಬ":3,"ಭ":3,"ಮ":3,"ಯ":3,"ರ":3,"ಱ":3,"ಲ":3,"ಳ":3,"ೞ":3,"ವ":3,"ಶ":3,"ಷ":3,"ಸ":3,"ಹ":3,"ಂ":4,"ಃ":4,"ಽ":4,"ೕ":4,"ೖ":4,"್":0}',
    []
  ];
});
