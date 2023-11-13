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
  var patterns =
    '{".":[{"n":[{"h":[{"ā":[{},[0,2,2,3]]}],"t":[{},[0,2,2]]}]}],"a":[{},[0,1]],"b":[{"b":[{},[2,3,2]],"h":[{},[3,2,2]],"m":[{},[2,3,2]],"r":[{},[3,2,2]],"y":[{},[3,2,2]]}],"c":[{"c":[{},[2,3,2]],"h":[{},[3,2,2]]}],"d":[{"d":[{},[2,3,2]],"h":[{},[3,2,2]],"m":[{},[2,3,2]],"r":[{},[3,2,2]],"v":[{},[3,2,2]]}],"e":[{},[0,1]],"g":[{"d":[{"h":[{},[2,3,2,2]]}],"g":[{},[2,3,2]],"h":[{},[3,2,2]],"r":[{},[2,3,2]],"y":[{},[2,3,2]]}],"h":[{"m":[{},[2,3,2]],"v":[{},[2,3,2]],"y":[{},[2,3,2]]}],"i":[{},[0,1]],"j":[{"h":[{},[3,2,2]],"j":[{},[2,3,2]]}],"k":[{"h":[{},[3,2,2]],"k":[{},[2,3,2]],"l":[{},[2,3,2]],"r":[{},[3,2,2]],"v":[{},[3,2,2]],"y":[{},[3,2,2]]}],"l":[{"l":[{},[2,3,2]],"y":[{},[2,3,2]]}],"m":[{"b":[{},[2,3,2]],"h":[{},[2,3,2]],"m":[{},[2,3,2]],"p":[{},[2,3,2]],"y":[{},[2,3,2]]}],"n":[{"d":[{},[2,3,2]],"h":[{},[2,1,2]],"n":[{},[2,3,2]],"t":[{},[2,1,2]],"v":[{},[2,3,2]]}],"o":[{},[0,1]],"p":[{"h":[{},[3,2,2]],"l":[{},[2,3,2]],"p":[{},[2,3,2]]}],"s":[{"m":[{},[2,3,2]],"n":[{},[3,2,2]],"s":[{},[2,3,2]],"t":[{},[2,3,2]],"v":[{},[3,2,2]],"y":[{},[3,2,2]]}],"t":[{"h":[{},[3,2,2]],"n":[{},[2,3,2]],"r":[{},[2,3,2]],"t":[{},[2,3,2]],"v":[{},[3,2,2]],"y":[{},[3,2,2]]}],"u":[{},[0,1]],"v":[{"h":[{},[2,3,2]],"y":[{},[3,2,2]]}],"y":[{"h":[{},[2,3,2]],"v":[{},[3,2,2]],"y":[{},[2,3,2]]}],"ñ":[{"c":[{},[2,3,2]],"h":[{},[2,3,2]],"j":[{},[2,3,2]],"ñ":[{},[2,3,2]]}],"ā":[{},[0,1]],"ī":[{},[0,1]],"ū":[{},[0,1]],"ḍ":[{"ḍ":[{},[2,3,2]]}],"ḷ":[{"h":[{},[3,2,2]]}],"ṁ":[{"n":[{"h":[{},[2,3,2,2]]}]},[2,3]],"ṃ":[{"n":[{"h":[{},[2,3,2,2]]}]},[2,3]],"ṅ":[{"g":[{},[2,3,2]],"k":[{},[2,3,2]]}],"ṇ":[{"h":[{},[2,3,2]],"y":[{},[2,3,2]],"ḍ":[{},[2,3,2]],"ṇ":[{},[2,3,2]],"ṭ":[{},[2,3,2]]}],"ṭ":[{"h":[{},[3,2,2]],"ṭ":[{},[2,3,2]]}]}';
  var hyphenation = [];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
