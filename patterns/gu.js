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
    root.hyphenationPatternsGu = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"અ":2,"આ":2,"ઇ":2,"ઈ":2,"ઉ":2,"ઊ":2,"ઋ":2,"ૠ":2,"એ":2,"ઐ":2,"ઓ":2,"ઔ":2,"ા":2,"િ":2,"ી":2,"ુ":2,"ૂ":2,"ૃ":2,"ૄ":2,"ૢ":2,"ૣ":2,"ે":2,"ૈ":2,"ો":2,"ૌ":2,"ક":3,"ખ":3,"ગ":3,"ઘ":3,"ઙ":3,"ચ":3,"છ":3,"જ":3,"ઝ":3,"ઞ":3,"ટ":3,"ઠ":3,"ડ":3,"ઢ":3,"ણ":3,"ત":3,"થ":3,"દ":3,"ધ":3,"ન":3,"પ":3,"ફ":3,"બ":3,"ભ":3,"મ":3,"ય":3,"ર":3,"લ":3,"ળ":3,"વ":3,"શ":3,"ષ":3,"સ":3,"હ":3,"ઁ":4,"ઃ":4,"ઽ":4,"્":0,"ં":0}',
    []
  ];
});
