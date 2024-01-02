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
    root.hyphenationPatternsPi = factory();
  }
})(this, function () {
  return [
    "0223,022,01,232,322,2322,212,23",
    '{".":[{"n":[{"h":[{"ā":0}],"t":1}]}],"a":2,"b":[{"b":3,"h":4,"m":3,"r":4,"y":4}],"c":[{"c":3,"h":4}],"d":[{"d":3,"h":4,"m":3,"r":4,"v":4}],"e":2,"g":[{"d":[{"h":5}],"g":3,"h":4,"r":3,"y":3}],"h":[{"m":3,"v":3,"y":3}],"i":2,"j":[{"h":4,"j":3}],"k":[{"h":4,"k":3,"l":3,"r":4,"v":4,"y":4}],"l":[{"l":3,"y":3}],"m":[{"b":3,"h":3,"m":3,"p":3,"y":3}],"n":[{"d":3,"h":6,"n":3,"t":6,"v":3}],"o":2,"p":[{"h":4,"l":3,"p":3}],"s":[{"m":3,"n":4,"s":3,"t":3,"v":4,"y":4}],"t":[{"h":4,"n":3,"r":3,"t":3,"v":4,"y":4}],"u":2,"v":[{"h":3,"y":4}],"y":[{"h":3,"v":4,"y":3}],"ñ":[{"c":3,"h":3,"j":3,"ñ":3}],"ā":2,"ī":2,"ū":2,"ḍ":[{"ḍ":3}],"ḷ":[{"h":4}],"ṁ":[{"n":[{"h":5}]},7],"ṃ":[{"n":[{"h":5}]},7],"ṅ":[{"g":3,"k":3}],"ṇ":[{"h":3,"y":3,"ḍ":3,"ṇ":3,"ṭ":3}],"ṭ":[{"h":4,"ṭ":3}]}',
    []
  ];
});
