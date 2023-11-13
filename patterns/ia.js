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
    root.hyphenationPatternsIa = factory();
  }
})(this, function () {
  var patterns =
    '{".":[{"c":[{"h":[{},[0,0,2]]}],"d":[{"e":[{"s":[{},[0,0,4]]}]}],"i":[{"n":[{},[0,0,1]]}],"s":[{"e":[{"i":[{},[0,0,4]]}]}]}],"a":[{"a":[{},[0,1]],"b":[{"l":[{"o":[{},[0,3,4]]},[0,2,1]]},[0,1]],"c":[{"a":[{},[0,1]],"e":[{},[0,1]],"h":[{"r":[{},[0,4]]},[0,1]],"o":[{},[0,1]],"r":[{},[0,1]],"u":[{},[0,1]]}],"d":[{"m":[{},[1]],"v":[{},[1]]},[0,1]],"e":[{"l":[{},[0,1]],"r":[{"o":[{},[0,0,0,0,3]]}]},[0,0,1]],"g":[{"e":[{"d":[{},[0,4,3]]}],"g":[{},[1]]},[0,1]],"h":[{},[0,1]],"i":[{"c":[{},[0,1]],"s":[{},[0,1]],"v":[{},[0,1]]}],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{"a":[{},[0,1]],"e":[{"i":[{},[0,0,3]]},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]]}],"m":[{},[0,1]],"n":[{"i":[{"m":[{},[3]]}],"s":[{"p":[{},[0,0,4]]}]}],"o":[{},[0,1]],"p":[{},[0,1]],"q":[{},[0,1]],"r":[{"a":[{},[0,1]],"i":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]],"y":[{},[0,1]]}],"s":[{"h":[{},[0,1,2]],"t":[{"h":[{},[3]]}]}],"t":[{"y":[{"r":[{},[0,0,0,0,4]]}]},[0,1]],"v":[{},[0,1]],"w":[{},[0,1]],"z":[{},[0,1]]}],"b":[{"a":[{},[1]],"b":[{"o":[{},[0,3]]},[2,1]],"c":[{},[0,1]],"d":[{},[2,1]],"e":[{},[1]],"h":[{},[0,1]],"i":[{"s":[{"a":[{},[0,0,4,3]]}]},[1]],"j":[{},[0,1]],"l":[{"u":[{},[0,1]],"y":[{},[0,2]]}],"m":[{},[0,1]],"n":[{},[0,1]],"o":[{},[1]],"p":[{},[0,1]],"r":[{},[1,2]],"s":[{},[2,1,2]],"t":[{},[0,1]],"u":[{"e":[{},[0,0,1]],"i":[{},[0,0,1]]},[1]],"v":[{},[0,1]]}],"c":[{"a":[{"i":[{},[0,0,1]]}],"c":[{},[2,1]],"d":[{},[0,1]],"e":[{"n":[{"n":[{},[4,3]]}]}],"h":[{"r":[{},[1]],"s":[{},[2]],"t":[{},[2]],"u":[{},[1]]}],"i":[{},[1]],"k":[{},[2,1]],"l":[{},[1,2]],"m":[{},[2,1]],"o":[{"c":[{"l":[{},[0,0,4]]}],"p":[{},[0,0,3,2]]}],"q":[{},[0,1]],"r":[{},[0,2]],"s":[{},[0,1,2]],"t":[{"r":[{"o":[{},[0,0,0,0,3]]}]},[2,1]],"u":[{"a":[{},[0,0,1]],"e":[{},[0,0,1]],"i":[{},[0,0,1]]}],"y":[{"n":[{"e":[{},[0,0,4]]}],"r":[{},[0,0,0,2]]},[1]],"z":[{},[0,1]]}],"d":[{"a":[{},[1]],"d":[{},[2,1]],"e":[{"r":[{"u":[{},[0,0,4]]}],"s":[{"e":[{},[0,0,0,3]],"o":[{},[0,0,4,3]],"u":[{},[0,0,4]]}]},[1]],"g":[{},[2,1]],"h":[{"e":[{},[0,1]]}],"i":[{"a":[{"s":[{},[0,0,0,3,4]]}],"p":[{"t":[{},[0,0,3,4]]}],"s":[{"a":[{},[0,0,4]],"e":[{},[0,0,4,3]],"i":[{},[0,0,4]],"o":[{},[0,0,4]],"u":[{},[0,0,4,3]]}]}],"j":[{},[2,1]],"m":[{},[2,1]],"o":[{"l":[{"a":[{},[0,0,4,3]]}],"s":[{"m":[{},[4,3]]}]},[1]],"r":[{"o":[{"s":[{},[0,0,0,3,4]]}]},[0,2]],"u":[{"a":[{},[0,0,1]],"e":[{},[0,0,1]],"i":[{},[0,0,1]]}],"v":[{},[2,1]],"y":[{"s":[{},[0,0,2]]}]}],"e":[{"a":[{"u":[{},[0,2]]},[0,1]],"b":[{},[0,1]],"c":[{"a":[{},[0,1]],"e":[{},[0,1]],"h":[{"e":[{},[0,3]],"i":[{},[0,3]]}],"o":[{},[0,1]],"r":[{},[0,1]],"u":[{},[0,1]]}],"d":[{},[0,1]],"e":[{},[0,1]],"f":[{"f":[{},[1]]},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"i":[{},[0,1]],"j":[{},[0,1]],"k":[{},[0,1]],"l":[{"a":[{},[0,1]],"e":[{},[0,1]],"o":[{"d":[{},[0,0,3]],"m":[{},[0,4,3]]},[0,1]],"u":[{},[0,1]]}],"m":[{"a":[{"g":[{},[0,4,3]]}]},[0,1]],"n":[{"l":[{},[2]],"o":[{"p":[{},[0,0,0,3,4]]}]}],"o":[{"g":[{},[0,0,3,2]],"p":[{},[0,0,3,2]]},[0,1]],"q":[{},[0,1]],"r":[{"a":[{},[0,1]],"i":[{},[0,1]],"o":[{"g":[{},[4]],"p":[{},[0,0,0,3,4]]},[0,1]],"u":[{"r":[{},[0,0,3]]},[0,1]],"y":[{},[0,1]]}],"s":[{"e":[{"m":[{},[0,0,4]]}],"t":[{},[0,2]],"u":[{"e":[{},[0,0,3]]}]}],"t":[{},[0,1]],"u":[{"c":[{"e":[{},[0,0,4]]}],"n":[{},[0,1]]},[0,0,1]],"v":[{},[0,1]],"w":[{},[0,1]]}],"f":[{"a":[{},[1]],"f":[{},[2,1]],"h":[{},[2,1]],"i":[{},[1]],"l":[{},[1,2]],"o":[{},[1]],"r":[{},[1,2]],"t":[{},[0,1]],"u":[{},[1]]}],"g":[{"a":[{},[1]],"d":[{},[2,1]],"e":[{"v":[{"i":[{},[4,3]]}]},[1]],"g":[{},[2,1]],"i":[{"m":[{"a":[{},[4,3]]}]},[1]],"l":[{},[0,2]],"m":[{},[2,1]],"n":[{},[2,1]],"o":[{},[1]],"r":[{},[1,2]],"s":[{},[2,1,2]],"u":[{},[1,0,1]],"y":[{"m":[{"n":[{},[0,0,0,0,3]]},[0,0,0,2]],"n":[{"a":[{},[0,0,4]]}],"r":[{"a":[{},[0,0,4,3]]}]}],"z":[{},[2,1]]}],"h":[{"e":[{"c":[{"t":[{},[0,0,0,0,3]]},[0,0,0,2]],"u":[{"r":[{},[0,0,3]]}]},[0,2]],"l":[{"o":[{"c":[{},[0,3]]}]}],"m":[{},[2,1]],"n":[{},[0,1]],"o":[{"g":[{},[0,0,3,2]],"p":[{},[0,0,3,2]],"r":[{"h":[{},[0,0,3]]}]}],"r":[{},[0,2]],"s":[{},[0,1]],"t":[{},[0,1]]}],"i":[{"a":[{"l":[{"a":[{},[0,0,4,3]]}]},[0,1]],"b":[{},[0,1,2]],"c":[{},[0,1]],"d":[{"o":[{"p":[{},[0,0,0,0,4]]},[0,0,0,3]]},[0,1]],"e":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"i":[{},[0,1]],"k":[{},[0,1]],"l":[{},[0,1]],"m":[{"a":[{"d":[{},[0,4]]}],"b":[{},[1]]},[0,1]],"n":[{"f":[{},[1]],"r":[{},[1]],"s":[{},[0,0,0,2]],"v":[{},[1]]}],"o":[{"g":[{},[0,0,3,2]],"s":[{},[0,0,0,2]],"x":[{},[0,0,2]]},[0,1,1]],"p":[{},[0,1]],"q":[{},[0,1]],"r":[{"a":[{},[0,1]],"i":[{},[0,1]],"o":[{"p":[{},[0,0,0,3,4]]},[0,1]],"u":[{"r":[{},[0,0,3]]}]}],"s":[{"a":[{"c":[{},[0,0,3]],"s":[{},[0,0,3]],"u":[{},[0,0,3]]}],"e":[{"q":[{},[0,0,3]],"s":[{},[0,0,3]]}],"i":[{"l":[{},[0,0,3]],"n":[{},[0,0,3]]}],"p":[{"h":[{},[0,3,4]]}]}],"t":[{},[0,1]],"u":[{},[0,1]],"v":[{},[0,1]],"z":[{},[0,1]]}],"k":[{"a":[{"l":[{"e":[{},[0,0,4]]}]}],"e":[{},[0,0,1]],"r":[{"a":[{},[0,0,0,1]]}]}],"l":[{"a":[{"l":[{"g":[{},[4,3]]}],"r":[{"c":[{},[4,3]]}]}],"b":[{},[0,1]],"c":[{},[2,1]],"d":[{},[2,1]],"e":[{"c":[{"h":[{},[0,0,3]]}],"i":[{"d":[{},[0,0,4]]}]}],"f":[{},[2,1]],"g":[{},[0,1]],"h":[{},[2,1]],"i":[{},[1]],"k":[{},[2,1]],"l":[{"u":[{"r":[{},[0,0,3]]}]},[2,1]],"m":[{"o":[{"d":[{},[0,4,3]]}]},[2,1]],"n":[{},[0,1]],"o":[{"d":[{"o":[{},[0,3]]},[2]],"p":[{"i":[{},[4]]}]}],"p":[{},[2,1]],"q":[{},[0,1]],"s":[{},[2,1,2]],"t":[{"u":[{"n":[{},[0,4,3]]}]},[2,1]],"u":[{"e":[{},[0,0,1]],"i":[{},[0,0,1]],"r":[{},[2]]}],"v":[{},[2,1]],"y":[{"c":[{"h":[{},[0,0,3]]}]},[1]]}],"m":[{"a":[{},[1]],"b":[{},[2,1]],"c":[{},[0,1]],"e":[{"c":[{"h":[{},[0,0,3]]}],"s":[{"e":[{},[0,0,4,3]]}]},[1]],"f":[{},[0,1]],"i":[{"p":[{},[0,0,3,2]],"s":[{"i":[{},[0,0,0,4]]}]},[1]],"j":[{},[0,1]],"l":[{},[0,1]],"m":[{"e":[{"n":[{},[0,0,0,4,3]]}]},[2,1]],"n":[{"a":[{"m":[{},[0,0,3]],"s":[{},[0,0,3]]}],"o":[{"b":[{},[0,0,3]],"p":[{},[0,0,3]]},[0,0,0,1]]},[2,1]],"o":[{"n":[{"y":[{},[4,3]]}],"p":[{},[0,0,3,2]],"r":[{"r":[{},[0,0,3]]}],"s":[{"p":[{},[0,0,0,4]],"t":[{},[0,0,3,4]]}]},[1]],"p":[{"s":[{},[0,3]]},[2,1]],"s":[{},[0,1,2]],"u":[{},[1]],"v":[{},[2,1]],"y":[{"r":[{"r":[{},[0,0,4]]}]},[1]]}],"n":[{"a":[{"e":[{},[0,1]],"l":[{"g":[{},[0,3]]}],"n":[{"i":[{},[0,3]]}],"p":[{},[0,1,2]],"u":[{},[0,1]]},[1]],"b":[{},[0,1]],"c":[{},[0,1]],"d":[{},[2,1]],"e":[{"q":[{},[0,1]],"x":[{},[0,1]]},[1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"i":[{"q":[{},[0,1]],"s":[{"p":[{},[0,0,3]]}],"t":[{},[0,2]]},[1]],"j":[{},[0,1]],"l":[{},[0,1]],"m":[{},[0,1]],"n":[{},[0,1,2]],"o":[{"b":[{"l":[{},[0,0,0,4]]}],"s":[{"p":[{},[0,3,3,4]]}],"x":[{},[0,1]]},[1]],"q":[{},[0,1]],"r":[{},[0,1]],"s":[{"i":[{"e":[{},[0,4,3]],"r":[{},[0,4]]}],"l":[{},[0,2]],"t":[{},[0,0,2]]},[0,1]],"t":[{"a":[{"h":[{},[0,4,3]],"p":[{},[0,4,3]]}]},[0,1]],"u":[{"a":[{},[0,0,1]],"e":[{},[0,0,1]],"i":[{},[0,0,1]]},[1]],"v":[{},[0,1]],"y":[{},[1]],"z":[{},[0,1]]}],"o":[{"a":[{},[0,1]],"b":[{"l":[{"o":[{},[0,0,3]]}],"s":[{},[1]]},[0,1]],"c":[{"l":[{"e":[{},[0,0,3]]}]},[0,1]],"d":[{},[0,1]],"e":[{},[0,1]],"f":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"i":[{},[0,1]],"j":[{},[0,1]],"l":[{},[0,1]],"m":[{"n":[{"a":[{},[0,0,4]]}]}],"n":[{"a":[{},[0,0,2]],"o":[{"s":[{},[0,0,0,0,4]]},[0,0,0,1]],"s":[{},[0,0,0,2]]}],"o":[{},[0,1]],"p":[{},[0,1]],"q":[{},[0,1]],"r":[{"a":[{},[0,1]],"i":[{},[0,1]],"o":[{},[0,1]],"r":[{"h":[{},[0,0,4]]}],"u":[{},[0,1]]}],"s":[{"l":[{},[0,1,2]],"p":[{"o":[{},[0,0,4]]}]}],"t":[{"a":[{"c":[{},[0,4,3]]}],"o":[{"s":[{},[0,0,0,3,4]]}]},[0,1]],"u":[{"g":[{},[0,1]]},[0,0,1]],"v":[{},[0,1]],"y":[{},[0,0,1]],"z":[{},[0,1]]}],"p":[{"a":[{"n":[{"s":[{},[0,0,0,3]]}]},[1]],"e":[{},[1]],"h":[{},[1]],"i":[{},[1]],"l":[{"a":[{},[0,0,4]],"o":[{"p":[{},[4,0,3]]}]},[1,2]],"n":[{"a":[{},[0,2,1]],"e":[{},[0,2]]},[0,1]],"o":[{},[1]],"p":[{"i":[{"a":[{},[0,4,3]]}]},[2,1]],"r":[{},[1,2]],"s":[{"o":[{"d":[{},[0,4,3]]}],"y":[{},[3,2]]},[2,1]],"t":[{},[2,1]],"u":[{"b":[{},[0,0,1,2]],"e":[{},[2,0,1]],"i":[{},[0,0,1]]},[1]],"y":[{"l":[{"o":[{},[0,0,4]]},[0,0,0,1]]}]}],"q":[{"u":[{"a":[{"n":[{},[0,0,0,4]]}]},[0,0,2]]}],"r":[{"a":[{"l":[{"g":[{},[4,3]]}],"q":[{},[2]],"r":[{"c":[{},[4,3]]}]}],"b":[{},[0,1]],"c":[{},[0,1]],"d":[{},[2,1]],"e":[{"c":[{"h":[{},[0,0,3]]}],"g":[{"i":[{},[0,0,0,0,3]]}],"n":[{"n":[{},[4,3]]}],"u":[{"t":[{},[0,0,3]]}]},[1]],"f":[{},[0,1]],"g":[{},[2,1]],"h":[{"i":[{},[1]],"u":[{},[0,1]],"y":[{"d":[{},[0,3]]}]}],"j":[{},[0,1]],"l":[{},[0,1]],"m":[{},[2,1]],"n":[{},[0,1]],"p":[{},[0,1]],"q":[{},[0,1]],"r":[{"a":[{"q":[{},[0,0,3]]}]},[0,1]],"s":[{},[0,1,2]],"t":[{},[2,1]],"u":[{"a":[{},[0,0,1]],"e":[{},[0,0,1]],"i":[{},[0,0,1]]}],"v":[{},[0,1]],"w":[{},[0,1]],"y":[{"s":[{"e":[{},[0,0,4]]}]}],"z":[{},[0,1]]}],"s":[{"a":[{"b":[{"u":[{},[0,3]]}],"c":[{"t":[{},[4,3]]}],"f":[{},[2,1]],"g":[{"r":[{},[0,3]]}],"n":[{"n":[{},[0,3]]}],"p":[{},[2,1]],"q":[{},[2,1]],"r":[{"g":[{},[0,3]],"m":[{},[0,3]],"t":[{},[0,3]]}]},[1]],"b":[{},[2,1]],"c":[{"l":[{"e":[{},[0,0,0,0,4]]}]},[1,2]],"d":[{},[0,1]],"e":[{},[1]],"f":[{},[2,1]],"g":[{},[2,1]],"h":[{},[0,1]],"i":[{"g":[{"e":[{},[4,3]]}],"r":[{"o":[{},[0,3]]}]},[1]],"j":[{},[0,1]],"k":[{},[1]],"l":[{"a":[{"v":[{},[0,4]]}]},[0,1]],"m":[{},[2,1]],"n":[{},[0,1]],"o":[{"b":[{"e":[{},[0,3]],"l":[{},[0,3]]},[0,0,0,2]],"c":[{"c":[{},[0,3]]}],"d":[{"o":[{},[0,3]]}],"r":[{"d":[{},[0,3]],"g":[{},[0,3]]}],"s":[{"s":[{},[0,3]]}],"x":[{},[2,1]]},[1]],"p":[{"a":[{"i":[{},[0,0,0,4]]},[2]],"l":[{},[2]],"o":[{},[2]]},[0,1]],"q":[{},[0,1]],"r":[{},[0,1]],"s":[{"a":[{},[0,3]]},[2,1,2]],"t":[{},[0,1]],"u":[{"a":[{},[0,0,1]],"b":[{"a":[{},[0,0,4]],"r":[{},[0,0,4]]}],"e":[{},[0,0,1]],"i":[{},[0,0,1]],"n":[{},[2,1]]},[1]],"v":[{},[2,1]],"y":[{},[1]]}],"t":[{"a":[{"l":[{"g":[{},[4,3]]}],"m":[{"b":[{},[4,3]]}],"r":[{"t":[{},[4,3]]}]}],"d":[{},[2,1]],"e":[{"c":[{"o":[{},[4,3]]}]}],"f":[{},[2,1]],"g":[{},[2,1]],"h":[{"l":[{},[0,0,1]],"m":[{},[2]]}],"i":[{"s":[{"p":[{},[0,0,3,4]]}]}],"l":[{},[0,1]],"m":[{"o":[{},[0,0,0,1]]},[2,1]],"o":[{"s":[{"p":[{},[0,0,3,4]]}],"x":[{"y":[{},[4,3]]}]}],"p":[{},[2,1]],"r":[{"o":[{"r":[{},[4,0,3]]}]},[0,2]],"s":[{},[2,1]],"t":[{},[2,1]],"u":[{"a":[{},[0,0,1]],"e":[{},[0,0,1]],"i":[{},[0,0,1]],"s":[{"a":[{},[0,0,4,3]]}]}],"y":[{},[0,0,1]],"z":[{},[2,1]]}],"u":[{"a":[{"n":[{"i":[{},[0,3]]}],"s":[{},[0,1]],"v":[{},[0,1]]}],"b":[{"a":[{"l":[{},[0,0,3]]}],"l":[{},[0,0,1]],"r":[{"o":[{},[0,0,3]]}]}],"c":[{"a":[{},[0,1]],"e":[{"m":[{},[0,0,3]]},[0,1]],"h":[{},[0,1]],"o":[{},[0,1]],"r":[{},[0,1]],"u":[{},[0,1]]}],"d":[{},[0,1]],"e":[{"l":[{},[0,1]]}],"i":[{"b":[{},[0,1]],"c":[{},[0,1]]}],"l":[{"a":[{},[0,1]],"e":[{},[0,1]],"o":[{},[0,1]]}],"o":[{},[0,1,1]],"r":[{"a":[{},[0,1]],"g":[{"o":[{},[3]]}],"i":[{},[0,1]],"o":[{},[0,1]],"u":[{},[0,1]]}],"s":[{"t":[{},[0,2]]}],"t":[{},[0,1]],"u":[{},[0,1]],"v":[{},[0,1]]}],"v":[{"a":[{"i":[{},[0,0,1]]}],"i":[{"r":[{"u":[{},[0,0,3]]}]}],"n":[{},[2]],"r":[{},[0,2]]}],"w":[{"n":[{},[0,2,1]]}],"x":[{"a":[{},[0,1]],"c":[{},[0,1]],"e":[{},[0,1]],"h":[{},[0,1]],"i":[{},[0,1]],"o":[{},[0,1]],"p":[{},[0,1]],"q":[{},[0,1]],"s":[{},[0,1,2]],"t":[{},[0,1]],"u":[{"a":[{},[0,0,1]]},[0,1]],"y":[{"l":[{},[1]]},[0,1,1]]}],"y":[{"a":[{},[0,1]],"b":[{},[0,1]],"c":[{"a":[{},[0,0,1]],"e":[{},[0,1]],"h":[{},[0,0,0,1]],"o":[{},[0,1]],"t":[{"a":[{},[0,0,4,3]]}]}],"d":[{"r":[{},[0,0,0,1]]}],"e":[{},[0,1]],"g":[{},[0,1]],"h":[{},[0,1]],"i":[{},[0,1]],"l":[{"a":[{"c":[{},[0,3]],"m":[{},[0,0,3]]}],"e":[{},[0,1]],"o":[{},[0,1]]},[2]],"n":[{"a":[{"n":[{},[0,0,3]]}],"e":[{"g":[{},[0,0,3]]}]}],"o":[{},[0,1]],"p":[{"o":[{"s":[{},[0,0,0,0,4]]},[0,0,0,1]]}],"r":[{"o":[{"s":[{},[0,0,0,0,4]]},[0,0,0,1]]},[0,1]],"s":[{"e":[{},[0,0,1]]}],"t":[{},[0,1]],"u":[{},[0,1]],"z":[{},[0,1]]}],"z":[{"e":[{},[0,0,1]],"i":[{},[1]],"u":[{},[1,0,1]],"z":[{},[2,1]]}]}';
  var hyphenation = [
    "alc-un",
    "alc-u-nis-si-me",
    "alc-un-men-te",
    "a-lic-un",
    "a-lic-u-nis-si-me",
    "a-lic-un-men-te",
    "mos-lem",
    "qualc-un",
    "qualc-u-nis-si-me",
    "qualc-un-men-te",
    ""
  ];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
