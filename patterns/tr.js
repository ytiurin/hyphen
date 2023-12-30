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
    root.hyphenationPatternsTr = factory();
  }
})(this, function () {
  return [
    "21,11,22,2,032,0044,014",
    '{"a":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"â":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"e":[{"c":[{"e":[{"k":[{".":[{},2]}]}]}],"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"ı":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"i":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"î":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"o":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"ö":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"u":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"ü":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"û":[{"a":[{},4],"â":[{},4],"e":[{},4],"ı":[{},4],"i":[{},4],"î":[{},4],"o":[{},4],"ö":[{},4],"u":[{},4],"ü":[{},4],"û":[{},4]},0],"b":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"c":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"ç":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"d":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"f":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"g":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"ğ":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"h":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"j":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"k":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"l":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"m":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{"r":[{"a":[{"k":[{},6]}]}]},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"n":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"p":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"r":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"s":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"ş":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"t":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3],"u":[{"r":[{"k":[{},5]}]}]},1],"v":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"y":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1],"z":[{"b":[{},3],"c":[{},3],"ç":[{},3],"d":[{},3],"f":[{},3],"g":[{},3],"ğ":[{},3],"h":[{},3],"j":[{},3],"k":[{},3],"l":[{},3],"m":[{},3],"n":[{},3],"p":[{},3],"r":[{},3],"s":[{},3],"ş":[{},3],"t":[{},3],"v":[{},3],"y":[{},3],"z":[{},3]},1]}',
    []
  ];
});
