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
    root.hyphenationPatternsTk = factory();
  }
})(this, function () {
  var patterns =
    '{"-":[{},[1,4]],"ä":[{"b":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"ç":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"d":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"f":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"g":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"h":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"j":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"k":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"l":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"m":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"n":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"p":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"r":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"s":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"t":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"w":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"ý":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"z":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"ň":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"ž":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}],"ş":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"o":[{},[0,1]],"a":[{},[0,1]]}]}],"e":[{"b":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ç":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"d":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"f":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"g":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"h":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"j":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"k":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"l":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"m":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"n":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"p":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"r":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"s":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"t":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"w":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ý":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"z":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ň":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ž":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ş":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}]}],"i":[{"b":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ç":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"d":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"f":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"g":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"h":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"j":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"k":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"l":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"m":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"n":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"p":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"r":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"s":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"t":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"w":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ý":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"z":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ň":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ž":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}],"ş":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]],"o":[{},[0,1]]}]}],"ö":[{"b":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"ç":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"d":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"f":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"g":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"h":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"j":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"k":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"l":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"m":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"n":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"p":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"r":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"s":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"t":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"w":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"ý":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"z":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"ň":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"ž":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}],"ş":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]],"a":[{},[0,1]]}]}],"ü":[{"b":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"ç":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"d":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"f":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"g":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"h":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"j":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"k":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"l":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"m":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"n":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"p":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"r":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"s":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"t":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"w":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"ý":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"z":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"ň":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"ž":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}],"ş":[{"ä":[{},[0,1]],"e":[{},[0,1]],"i":[{},[0,1]],"ö":[{},[0,1]],"ü":[{},[0,1]]}]}],"a":[{"b":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ç":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"d":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"f":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"g":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"h":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"j":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"k":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"l":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"m":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"n":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"p":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"r":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"s":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"t":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"w":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ý":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"z":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ň":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ž":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ş":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}]}],"y":[{"b":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ç":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"d":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"f":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"g":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"h":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"j":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"k":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"l":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"m":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"n":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"p":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"r":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"s":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"t":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"w":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ý":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"z":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ň":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ž":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ş":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"ä":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}]}],"o":[{"b":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ç":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"d":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"f":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"g":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"h":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"j":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"k":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"l":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"m":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"n":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"p":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"r":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"s":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"t":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"w":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ý":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"z":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ň":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ž":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ş":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}]}],"u":[{"b":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ç":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"d":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"f":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"g":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"h":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"j":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"k":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"l":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"m":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"n":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"p":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"r":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"s":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"t":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"w":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ý":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"z":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ň":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ž":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}],"ş":[{"a":[{},[0,1]],"y":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"i":[{},[0,1]],"e":[{},[0,1]]}]}],"b":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],".":[{"b":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"ç":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"d":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"f":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"g":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"h":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"j":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"k":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"l":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"m":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"n":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"p":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"r":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"s":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"t":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"w":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"ý":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"z":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"ň":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"ž":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}],"ş":[{"b":[{},[0,2]],"ç":[{},[0,2]],"d":[{},[0,2]],"f":[{},[0,2]],"g":[{},[0,2]],"h":[{},[0,2]],"j":[{},[0,2]],"k":[{},[0,2]],"l":[{},[0,2]],"m":[{},[0,2]],"n":[{},[0,2]],"p":[{},[0,2]],"r":[{},[0,2]],"s":[{},[0,2]],"t":[{},[0,2]],"w":[{},[0,2]],"ý":[{},[0,2]],"z":[{},[0,2]],"ň":[{},[0,2]],"ž":[{},[0,2]],"ş":[{},[0,2]]}]}],"ç":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"d":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"f":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"g":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"h":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"j":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"k":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"l":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"l":[{},[0,1]],"m":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"n":[{},[0,1]],"p":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"r":[{},[0,1]],"s":[{"k":[{},[0,1,2]],"t":[{},[0,1,2]]},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"m":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"n":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{"l":[{},[0,2,1]],"r":[{},[0,1,2]]},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"p":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"r":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"j":[{},[0,1]],"k":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"r":[{},[0,1]],"s":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"s":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{"d":[{},[0,2,1]],"w":[{},[0,2,1]]},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]],"r":[{},[0,1,2]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"t":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"w":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"ý":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"p":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{"b":[{},[0,2,1]],"ç":[{},[0,2,1]],"d":[{},[0,2,1]],"g":[{},[0,2,1]],"j":[{},[0,2,1]],"k":[{},[0,2,1]],"l":[{},[0,2,1]],"m":[{},[0,2,1]],"n":[{},[0,2,1]],"p":[{},[0,2,1]],"s":[{},[0,2,1]],"t":[{},[0,2,1]],"ý":[{},[0,2,1]],"z":[{},[0,2,1]],"ş":[{},[0,2,1]]},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"z":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"ň":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"ž":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}],"ş":[{"b":[{},[0,1]],"ç":[{},[0,1]],"d":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1]],"p":[{},[0,1]],"r":[{},[0,1]],"s":[{},[0,1]],"t":[{},[0,1]],"w":[{},[0,1]],"ý":[{},[0,1]],"z":[{},[0,1]],"ň":[{},[0,1]],"ž":[{},[0,1]],"ş":[{},[0,1]]}]}';
  var hyphenation = [];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
