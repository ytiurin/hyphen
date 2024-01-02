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
    root.hyphenationPatternsZhLatnPinyin = factory();
  }
})(this, function () {
  return [
    "01,1",
    '{"a":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"p":0,"q":0,"r":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"e":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"p":0,"q":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"g":[{"a":1,"b":0,"c":0,"d":0,"e":1,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":1,"p":0,"q":0,"r":0,"s":0,"t":0,"u":1,"w":0,"x":0,"y":0,"z":0}],"i":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"p":0,"q":0,"r":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"n":[{"a":1,"b":0,"c":0,"d":0,"e":1,"f":0,"h":0,"i":1,"j":0,"k":0,"l":0,"m":0,"n":0,"o":1,"p":0,"q":0,"r":0,"s":0,"t":0,"u":1,"ü":1,"w":0,"x":0,"y":0,"z":0}],"o":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"p":0,"q":0,"r":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"r":[{"a":1,"b":0,"c":0,"d":0,"e":1,"f":0,"g":0,"h":0,"i":1,"j":0,"k":0,"l":0,"m":0,"n":0,"o":1,"p":0,"q":0,"r":0,"s":0,"t":0,"u":1,"w":0,"x":0,"y":0,"z":0}],"u":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"p":0,"q":0,"r":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"ü":[{"b":0,"c":0,"d":0,"f":0,"g":0,"h":0,"j":0,"k":0,"l":0,"m":0,"n":0,"p":0,"q":0,"r":0,"s":0,"t":0,"w":0,"x":0,"y":0,"z":0}],"\'":[{"a":0,"e":0,"o":0}]}',
    []
  ];
});
