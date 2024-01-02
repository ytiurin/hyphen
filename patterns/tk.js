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
  return [
    "14,01,02,021,012",
    '{"-":0,"ä":[{"b":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"ç":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"d":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"f":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"g":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"h":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"j":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"k":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"l":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"m":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"n":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"p":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"r":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"s":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"t":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"w":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"ý":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"z":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"ň":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"ž":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}],"ş":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"o":1,"a":1}]}],"e":[{"b":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ç":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"d":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"f":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"g":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"h":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"j":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"k":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"l":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"m":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"n":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"p":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"r":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"s":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"t":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"w":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ý":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"z":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ň":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ž":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ş":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}]}],"i":[{"b":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ç":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"d":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"f":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"g":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"h":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"j":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"k":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"l":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"m":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"n":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"p":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"r":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"s":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"t":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"w":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ý":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"z":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ň":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ž":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}],"ş":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1,"o":1}]}],"ö":[{"b":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"ç":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"d":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"f":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"g":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"h":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"j":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"k":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"l":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"m":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"n":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"p":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"r":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"s":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"t":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"w":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"ý":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"z":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"ň":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"ž":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}],"ş":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1,"a":1}]}],"ü":[{"b":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"ç":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"d":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"f":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"g":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"h":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"j":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"k":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"l":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"m":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"n":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"p":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"r":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"s":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"t":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"w":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"ý":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"z":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"ň":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"ž":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}],"ş":[{"ä":1,"e":1,"i":1,"ö":1,"ü":1}]}],"a":[{"b":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ç":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"d":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"f":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"g":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"h":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"j":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"k":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"l":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"m":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"n":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"p":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"r":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"s":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"t":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"w":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ý":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"z":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ň":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ž":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ş":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}]}],"y":[{"b":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"ç":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"d":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"f":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"g":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"h":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"j":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"k":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"l":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"m":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"n":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"p":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"r":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"s":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"t":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"w":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"ý":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"z":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"ň":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"ž":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}],"ş":[{"a":1,"y":1,"o":1,"u":1,"ä":1,"i":1,"e":1}]}],"o":[{"b":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ç":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"d":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"f":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"g":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"h":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"j":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"k":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"l":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"m":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"n":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"p":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"r":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"s":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"t":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"w":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ý":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"z":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ň":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ž":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ş":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}]}],"u":[{"b":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ç":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"d":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"f":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"g":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"h":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"j":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"k":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"l":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"m":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"n":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"p":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"r":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"s":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"t":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"w":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ý":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"z":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ň":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ž":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}],"ş":[{"a":1,"y":1,"o":1,"u":1,"i":1,"e":1}]}],"b":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],".":[{"b":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"ç":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"d":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"f":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"g":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"h":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"j":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"k":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"l":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"m":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"n":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"p":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"r":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"s":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"t":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"w":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"ý":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"z":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"ň":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"ž":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}],"ş":[{"b":2,"ç":2,"d":2,"f":2,"g":2,"h":2,"j":2,"k":2,"l":2,"m":2,"n":2,"p":2,"r":2,"s":2,"t":2,"w":2,"ý":2,"z":2,"ň":2,"ž":2,"ş":2}]}],"ç":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"d":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"f":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"g":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"h":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"j":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"k":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"l":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"l":1,"m":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"n":1,"p":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"r":1,"s":[{"k":4,"t":4},1],"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"m":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"n":[{"b":1,"ç":1,"d":1,"f":1,"g":[{"l":3,"r":4},1],"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"p":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"r":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"j":1,"k":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"l":1,"m":1,"n":1,"p":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"r":1,"s":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"s":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":[{"d":3,"w":3},1],"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3,"r":4},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"t":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"w":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"ý":[{"b":1,"ç":1,"d":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"p":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"r":1,"s":1,"t":[{"b":3,"ç":3,"d":3,"g":3,"j":3,"k":3,"l":3,"m":3,"n":3,"p":3,"s":3,"t":3,"ý":3,"z":3,"ş":3},1],"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"z":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"ň":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"ž":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}],"ş":[{"b":1,"ç":1,"d":1,"f":1,"g":1,"h":1,"j":1,"k":1,"l":1,"m":1,"n":1,"p":1,"r":1,"s":1,"t":1,"w":1,"ý":1,"z":1,"ň":1,"ž":1,"ş":1}]}',
    []
  ];
});
