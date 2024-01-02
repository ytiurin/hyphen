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
    root.hyphenationPatternsAs = factory();
  }
})(this, function () {
  return [
    "22,11,01,1,21",
    '{"‍":0,"‌":1,"অ":2,"আ":2,"ই":2,"ঈ":2,"উ":2,"ঊ":2,"ঋ":2,"ৠ":2,"ঌ":2,"ৡ":2,"এ":2,"ঐ":2,"ও":2,"ঔ":2,"া":2,"ি":2,"ী":2,"ু":2,"ূ":2,"ৃ":2,"ৄ":2,"ৢ":2,"ৣ":2,"ে":2,"ৈ":2,"ো":2,"ৌ":2,"়":0,"ৗ":2,"ক":3,"খ":3,"গ":3,"ঘ":3,"ঙ":3,"চ":3,"ছ":3,"জ":3,"ঝ":3,"ঞ":3,"ট":3,"ঠ":3,"ড":3,"ড়":3,"ঢ":3,"ঢ়":3,"ণ":3,"ত":3,"থ":3,"দ":3,"ধ":3,"ন":3,"প":3,"ফ":3,"ব":3,"ভ":3,"ম":3,"য":3,"য়":3,"র":3,"ল":3,"শ":3,"ষ":3,"স":3,"হ":3,"ৎ":2,"ঃ":4,"ং":4,"ঁ":4,"ঽ":4,"্":0}',
    []
  ];
});
