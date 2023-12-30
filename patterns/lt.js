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
    root.hyphenationPatternsLt = factory();
  }
})(this, function () {
  return [
    "001,0001,003,00001,023,0002,000001,004,005,0032,012,01,02,04,002,21,05,03,0501,0014,0004,0005,054,0012,0043,43,32,22,23,3,0034,4,0003,032,1,2003,00002,0021,00054,00034,014,0045,0041,212,53,44,5,41,0054,021,00032,232,503,043,00043,504,2,304,00003,00412,0202,432,0023,34,0000001,034,3002,000004,0052,322,54,434,24,024,022,214,25,234,31,00004,000005,045",
    '{".":[{"a":[{"p":[{"i":[{},1],"r":[{},2]},0],"r":[{"b":[{"i":[{},3]}],"t":[{"i":[{},3]}]}],"s":[{"p":[{},2]}],"t":[{"a":[{},1],"r":[{},2]},0],"š":[{"v":[{},2]}]}],"d":[{"i":[{"n":[{"a":[{},3]}]}]}],"e":[{"k":[{"r":[{},2]}]}],"i":[{"š":[{"i":[{},5]},4]}],"k":[{"i":[{"r":[{"t":[{"i":[{},6]}]}]}]}],"n":[{"u":[{"s":[{"i":[{},3]}]},0]}],"p":[{"i":[{"e":[{"č":[{},5]}]}]}],"s":[{"a":[{"m":[{},1]}],"i":[{"d":[{"a":[{},3]}]}],"k":[{},7],"t":[{},7],"u":[{"k":[{"r":[{},8]}]}]}],"t":[{"e":[{"s":[{},9]}]}],"u":[{"k":[{},2],"š":[{},4],"ž":[{},0]}],"į":[{"s":[{},7]}],"š":[{"v":[{"e":[{"n":[{},3]}]}]}]}],"a":[{"a":[{},10],"b":[{},11],"c":[{"h":[{},12]},11],"d":[{"r":[{"a":[{},13]}]},11],"e":[{"l":[{},14]},11],"f":[{},11],"g":[{"r":[{"a":[{},2],"i":[{"o":[{},16]}],"o":[{},16]},13]},15],"h":[{},11],"i":[{"n":[{"f":[{},16]}],"s":[{"k":[{},7]}],"t":[{"r":[{},7]}]}],"j":[{},11],"k":[{"l":[{},14],"v":[{"i":[{},14]}],"ė":[{"t":[{},12]}]},11],"l":[{"i":[{},17],"o":[{},18],"y":[{},17],"ė":[{},17],"ū":[{},17]},11],"m":[{},11],"n":[{"k":[{"l":[{},9]}],"s":[{"k":[{},7]}],"t":[{"r":[{},7]}]},11],"o":[{},12],"p":[{"a":[{"k":[{},19]}],"e":[{"i":[{},2]}],"i":[{"m":[{},9]}],"l":[{},2],"r":[{},17],"s":[{},9]},11],"r":[{"e":[{"i":[{"t":[{},0]}]}],"g":[{},13],"i":[{"s":[{},20]}]},11],"s":[{"i":[{"s":[{},21]},1],"k":[{"l":[{},2]},13],"l":[{},17],"m":[{"i":[{},14],"u":[{},14]}],"n":[{},22],"t":[{"u":[{},13]}]},11],"t":[{"a":[{"u":[{"g":[{},2]}]}],"e":[{"i":[{"s":[{"t":[{},21]}]}]}],"i":[{"m":[{},9]}],"o":[{},1],"p":[{},20],"r":[{"u":[{},13]}],"ė":[{},23],"ū":[{"ž":[{},5]}]},11],"u":[{"k":[{"l":[{},7]}],"s":[{"k":[{},7],"l":[{},7]}],"t":[{"r":[{},24]}]},13],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},15],"ę":[{},11],"ė":[{},10],"į":[{},11],"š":[{"n":[{},17],"t":[{"r":[{},7]}],"v":[{},14]},11],"ų":[{},11],"ū":[{},10],"ž":[{"l":[{},14]},11]}],"b":[{"a":[{"c":[{},2],"l":[{"t":[{"a":[{},6]}]}],"s":[{"l":[{},7]}]}],"b":[{},15],"c":[{},15],"d":[{},25],"e":[{"p":[{},20],"s":[{"i":[{},3]},9],"t":[{},9]}],"f":[{},15],"g":[{},15],"h":[{},15],"j":[{},11],"k":[{},15],"l":[{"a":[{},12],"i":[{"z":[{},12]}],"o":[{},26],"u":[{},12]},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{"i":[{},17]},27],"s":[{},15],"t":[{},28],"u":[{"k":[{},7]}],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"c":[{"a":[{"r":[{},20]}],"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{"i":[{},29]}],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"u":[{"k":[{},21]},7],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"d":[{"a":[{"b":[{},30]}],"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"k":[{},7],"m":[{"a":[{},3]}],"p":[{"r":[{},7]}],"s":[{"p":[{},7]}]}],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"p":[{},7],"s":[{"k":[{},21]},7]}],"j":[{},15],"k":[{},28],"l":[{},25],"m":[{},15],"n":[{},15],"o":[{"r":[{"i":[{},2]}]}],"p":[{},15],"r":[{"o":[{"b":[{},5]},1],"ė":[{},12],"ų":[{},31]},15],"s":[{},15],"t":[{},15],"u":[{"a":[{},14],"k":[{"a":[{},8]},7],"s":[{"l":[{},7]}]}],"v":[{"a":[{},17],"i":[{"a":[{},32]}]},15],"w":[{},15],"z":[{},13],"č":[{},15],"š":[{},15],"ž":[{"i":[{"o":[{},3]}]},13]}],"e":[{"a":[{"l":[{},4],"p":[{"i":[{},3]}],"t":[{},1]},10],"b":[{"e":[{},1],"l":[{},17],"r":[{},2]},10],"c":[{"h":[{},12]},11],"d":[{"r":[{"i":[{},2],"o":[{},13],"ė":[{},2]}]},33],"e":[{},11],"f":[{},11],"g":[{"r":[{"a":[{},2]}]},11],"h":[{},11],"i":[{"e":[{},11],"k":[{"l":[{},24]}],"n":[{},34],"s":[{"k":[{},7],"l":[{},7],"t":[{"r":[{"a":[{},36]}]},35]}],"š":[{},37]}],"j":[{},11],"k":[{"r":[{},17]},11],"l":[{},11],"m":[{"a":[{"s":[{},38]}]},11],"n":[{"k":[{"l":[{"a":[{},20]},9]}],"o":[{},1],"s":[{},20],"t":[{"a":[{},31]}],"u":[{},1]},15],"o":[{"r":[{},17],"š":[{},33]},12],"p":[{"l":[{"i":[{},7]}],"r":[{"a":[{},3],"i":[{},3]},7]},17],"r":[{"e":[{"a":[{},39]}],"i":[{"s":[{},20]}],"o":[{},1],"ė":[{},5]},11],"s":[{"i":[{"s":[{},21]}],"k":[{"a":[{},3],"o":[{},16]},7],"v":[{},33]},11],"t":[{},11],"u":[{"ž":[{},32]},40],"v":[{"i":[{},17]},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{"p":[{},32],"s":[{"k":[{},32]}],"t":[{"r":[{},32]}]},40],"š":[{"n":[{},17],"v":[{},14],"ė":[{},32]},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"f":[{"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"s":[{},41]}],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{"i":[{},1]},15],"s":[{},15],"t":[{},15],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"g":[{"a":[{"š":[{},32]}],"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"o":[{},42]}],"f":[{},15],"g":[{},15],"h":[{},15],"k":[{},15],"l":[{"e":[{},12],"o":[{},12]},15],"m":[{},15],"n":[{"ų":[{},26]},15],"p":[{},43],"r":[{"a":[{"i":[{},36],"n":[{},17]}],"e":[{"i":[{},13]},44],"i":[{"o":[{},45]},17],"o":[{".":[{},17]}],"ą":[{},13],"į":[{},46],"ų":[{},31]},26],"s":[{},15],"t":[{},47],"u":[{},29],"v":[{},15],"w":[{},15],"y":[{"v":[{"a":[{},3]}]}],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"h":[{"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"b":[{},7]}],"k":[{},15],"l":[{},27],"m":[{"e":[{},12]},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"i":[{"a":[{"g":[{},48],"i":[{"š":[{},17]}],"k":[{},2],"n":[{"t":[{"ę":[{},17],"ė":[{},17]}]}],"p":[{},20],"r":[{},17]},12],"b":[{},33],"c":[{"e":[{},1]},11],"d":[{"r":[{"ė":[{},2]},14],"ė":[{"m":[{},12]}]},11],"e":[{"d":[{"r":[{},24]}],"g":[{},2],"i":[{},17],"k":[{"l":[{},2]}],"n":[{"t":[{},17]}],"p":[{"r":[{},41]}],"s":[{"k":[{},7]}]},12],"f":[{},11],"g":[{"l":[{},33],"r":[{"u":[{},2]}]},15],"h":[{},15],"i":[{},10],"j":[{},11],"k":[{"n":[{},33],"r":[{},2]},11],"l":[{"o":[{},1]},11],"m":[{"d":[{},34]},11],"n":[{"k":[{"l":[{},7]}],"v":[{},46]},47],"o":[{"g":[{"r":[{},24]}],"k":[{},5],"p":[{"l":[{},7]}],"r":[{},17]},12],"p":[{"j":[{},49],"r":[{"u":[{},2]}]},11],"r":[{"a":[{"s":[{},50]}],"i":[{},17]},11],"s":[{"a":[{},16],"i":[{},16],"k":[{},7],"l":[{"i":[{},7]},17],"n":[{},22],"t":[{"e":[{},13],"o":[{},3]}]},47],"t":[{},51],"u":[{},12],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},12],"č":[{},11],"ę":[{},11],"ė":[{},10],"į":[{},11],"š":[{"n":[{},17],"t":[{},8],"v":[{},13],"ė":[{},5],"š":[{},34]},11],"ų":[{},12],"ū":[{},12],"ž":[{},17]}],"j":[{"a":[{".":[{},29],"u":[{"n":[{"a":[{},6]}]}]}],"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{},15],"j":[{},15],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"o":[{"t":[{"v":[{},7]},32]}],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"u":[{},34],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ū":[{},34],"ž":[{},15]}],"k":[{"a":[{".":[{},29],"d":[{},52],"k":[{"l":[{},7]},32],"p":[{"r":[{},7]}],"r":[{},29],"s":[{},29],"t":[{"i":[{},29]}],"v":[{"a":[{"r":[{},6]}]},46],"z":[{},9]}],"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"b":[{},24],"r":[{"e":[{"n":[{},6]}]}]},29],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{".":[{},46],"a":[{},46],"b":[{},29],"l":[{},29],"t":[{},46]},13],"k":[{},15],"l":[{"a":[{"n":[{},13]},26],"e":[{".":[{},31],"l":[{},12]}],"o":[{".":[{},31]}],"u":[{".":[{},31]}],"y":[{},12],"ą":[{},31],"ų":[{},31]},15],"m":[{},15],"n":[{},15],"o":[{},29],"p":[{},15],"r":[{"a":[{"u":[{},13]}],"i":[{"s":[{"t":[{},21]},36]}],"o":[{"v":[{},13]},17],"u":[{"n":[{},46]},25],"y":[{},13],"ą":[{},16]},27],"s":[{"k":[{},13],"l":[{},2],"p":[{},53]},15],"t":[{"a":[{},17]},47],"u":[{"b":[{},31],"k":[{},7],"p":[{"r":[{},7]}]},29],"v":[{"a":[{},12],"o":[{},17],"ė":[{},12]},15],"w":[{},15],"y":[{"t":[{},29]}],"z":[{},15],"ą":[{},46],"č":[{},15],"š":[{"l":[{"y":[{},14]}],"ė":[{},32]},15],"ž":[{},15]}],"l":[{"a":[{".":[{},29],"p":[{"s":[{"t":[{"o":[{},54]}]}]}]}],"b":[{"r":[{},2]},15],"c":[{},15],"d":[{},15],"e":[{".":[{},29],"c":[{},2],"g":[{"r":[{},7]}],"č":[{},31]}],"f":[{},15],"g":[{"s":[{"t":[{},9]}]},15],"h":[{},15],"i":[{".":[{},29],"a":[{},7],"o":[{},55],"ų":[{},29]}],"j":[{},15],"k":[{"o":[{},1]},15],"l":[{},15],"m":[{},15],"n":[{},15],"o":[{".":[{},29],"g":[{},20],"p":[{},31]}],"p":[{"n":[{"a":[{},3]}]},47],"r":[{},15],"s":[{"k":[{},13],"p":[{},53]},47],"t":[{},25],"u":[{".":[{},29],"p":[{},56]}],"v":[{},47],"w":[{},15],"y":[{"č":[{},29]}],"z":[{},15],"ą":[{},29],"č":[{},15],"ę":[{"s":[{},29]}],"ė":[{"m":[{},29],"s":[{},29],"č":[{},56]}],"į":[{},57],"š":[{},47],"ų":[{},29],"ž":[{},15]}],"m":[{"a":[{"i":[{"d":[{},28]}],"s":[{"k":[{"i":[{},32]}]},29]},12],"b":[{"r":[{},2]},15],"c":[{},15],"d":[{},15],"e":[{"c":[{},2],"i":[{"s":[{},3]}]}],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"g":[{"l":[{},7],"r":[{},7]}],"n":[{"s":[{},20]}],"t":[{"r":[{},7]}]}],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"o":[{"d":[{},56]},12],"p":[{"l":[{},13],"r":[{},17]},15],"r":[{},15],"s":[{},47],"t":[{"a":[{},17]},15],"u":[{"o":[{},29]}],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"n":[{"a":[{"s":[{},9],"t":[{},9]}],"b":[{},15],"c":[{"e":[{"n":[{},3]}]},15],"d":[{"r":[{"ė":[{},17]}]},15],"e":[{"g":[{},20],"i":[{"m":[{},5]}],"o":[{"r":[{},36]},24],"r":[{"ė":[{},58]}],"s":[{"i":[{},3],"l":[{},2],"t":[{},9]}],"t":[{},9],"į":[{"s":[{"t":[{},58]}]}]},0],"f":[{},15],"g":[{"l":[{},2],"r":[{},7]},47],"h":[{},15],"i":[{"s":[{},7]}],"j":[{},15],"k":[{"l":[{"a":[{},2]}],"r":[{"y":[{},17]},2]},15],"l":[{},15],"m":[{},15],"n":[{},15],"o":[{},46],"p":[{},15],"r":[{},15],"s":[{"k":[{"u":[{},7]}],"l":[{},2],"p":[{},53],"t":[{"r":[{},32]}]},47],"t":[{"a":[{},17],"p":[{"l":[{},7]}],"r":[{"u":[{"o":[{},14]},17]}]},47],"u":[{"a":[{},20],"b":[{},9],"g":[{},2],"i":[{},0],"k":[{},5],"o":[{"s":[{},36]},24],"s":[{},48]}],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},47],"š":[{},15],"ž":[{},15]}],"o":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{"r":[{},17]},11],"e":[{"t":[{},12]},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{"r":[{},17]},11],"l":[{"e":[{"n":[{},3]}]},11],"m":[{"p":[{"r":[{},7]}]},11],"n":[{"o":[{},1]},11],"o":[{},10],"p":[{},11],"r":[{"i":[{"e":[{},12],"s":[{},20]}],"t":[{"r":[{},7]}],"ę":[{},12]},11],"s":[{"l":[{"e":[{},2],"o":[{},7]},17],"v":[{},33]},11],"t":[{"o":[{},1]},33],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{"v":[{},14]},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"p":[{"a":[{"d":[{},5],"i":[{"l":[{},5],"m":[{},5],"r":[{},5]}],"n":[{},29],"p":[{},20],"r":[{"s":[{"i":[{},6]}],"ė":[{},59]},12],"s":[{"r":[{},8]},5],"t":[{},60]},2],"b":[{},15],"c":[{},47],"d":[{},61],"e":[{"r":[{"e":[{},14],"i":[{"m":[{},62]}],"s":[{},32],"ė":[{},14]},1]},12],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"e":[{"š":[{},17]}]},12],"k":[{},51],"l":[{"e":[{},17],"i":[{"o":[{},31],"u":[{},13]},17],"o":[{"j":[{},13]},17],"u":[{},13],"y":[{},13]},26],"m":[{},15],"n":[{},47],"o":[{"g":[{},7],"l":[{"i":[{},3]}]},29],"p":[{},15],"r":[{"a":[{"i":[{},17],"u":[{"s":[{"i":[{},36]}]}],"š":[{},17]}],"i":[{"s":[{},36]},17],"o":[{".":[{},16],"m":[{},17]}],"y":[{},17],"ą":[{},31],"ė":[{},17],"ū":[{},17]},27],"s":[{"i":[{},1],"k":[{},22],"t":[{"y":[{},53]}],"v":[{},33]},47],"t":[{},61],"u":[{"s":[{"i":[{"a":[{"u":[{},64]}]}],"k":[{},7],"l":[{},7]}],"t":[{"r":[{},7]}]},63],"v":[{},15],"w":[{},15],"y":[{},12],"z":[{},15],"č":[{},15],"ė":[{},12],"š":[{},61],"ž":[{},25]}],"r":[{"a":[{".":[{},29],"b":[{},2],"c":[{},29],"i":[{"m":[{},0],"t":[{"į":[{},20]}]}],"k":[{"r":[{},2]}],"l":[{},29],"m":[{},29],"s":[{"l":[{},20],"m":[{},2]}],"u":[{"k":[{"a":[{".":[{},20]}]}]}],"v":[{},29]},12],"b":[{"o":[{},1],"r":[{},65]},15],"c":[{},15],"d":[{},47],"e":[{"b":[{},56],"i":[{"n":[{},31],"t":[{},31]}],"l":[{},29],"p":[{},41],"s":[{"l":[{},32]},46],"t":[{},29]}],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{".":[{},29],"d":[{},2],"j":[{},29],"k":[{"r":[{},2]}],"l":[{},56],"m":[{"a":[{".":[{},14]}],"t":[{},28]}],"o":[{},29],"p":[{},2],"s":[{"i":[{},3],"t":[{},2]}],"v":[{"i":[{"n":[{},6]}]}],"ą":[{},29],"ų":[{},29],"ū":[{},56]},12],"k":[{"l":[{"y":[{},2]}],"r":[{},65]},47],"l":[{},47],"m":[{},15],"n":[{},47],"o":[{"d":[{},66],"g":[{"r":[{},7]}],"j":[{},29],"k":[{},29],"n":[{},29],"p":[{},29],"r":[{"g":[{},28]}],"s":[{},46]},12],"p":[{"r":[{},65]},15],"r":[{},15],"s":[{"k":[{"o":[{".":[{},7]}]}],"p":[{},7]},47],"t":[{"i":[{"k":[{},38],"s":[{},50]}],"r":[{},33],"v":[{},33]},47],"u":[{"k":[{},56],"l":[{},29],"n":[{},31],"o":[{"s":[{},29]}],"p":[{},56],"s":[{"k":[{},7]},29],"t":[{"o":[{},31]}]},12],"v":[{},47],"w":[{},15],"z":[{},15],"ą":[{"s":[{},31]},29],"č":[{},47],"š":[{"l":[{},33],"m":[{},33]},47],"ų":[{},46],"ž":[{},15]}],"s":[{"a":[{"l":[{"a":[{},3]}],"m":[{"ž":[{},15]}],"n":[{"t":[{},21]}],"r":[{"k":[{"a":[{},6]}]}]}],"b":[{},28],"c":[{},15],"d":[{},28],"e":[{"k":[{"r":[{},7]}],"n":[{"a":[{"t":[{},67]}]}]},12],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"a":[{"u":[{"k":[{},2]}],"v":[{},9],"š":[{},9]}],"d":[{},2],"k":[{},30],"p":[{},30],"s":[{},9],"š":[{"v":[{},68]}]}],"k":[{".":[{},31],"a":[{".":[{},16]}],"e":[{"n":[{},70]},31],"i":[{},46],"l":[{"e":[{},70]}],"r":[{},55],"u":[{"b":[{},46]}],"v":[{"a":[{},2],"i":[{},2]}],"y":[{},46],"ą":[{},31],"ę":[{},46]},69],"l":[{"e":[{},29],"i":[{},17],"o":[{},17],"u":[{},25],"ū":[{},25]},27],"m":[{"e":[{".":[{},31]}],"ę":[{},31]},15],"n":[{},25],"o":[{"d":[{"r":[{},7]}]}],"p":[{"e":[{},17],"n":[{},31],"u":[{},31]},26],"r":[{"i":[{},17]},47],"s":[{},15],"t":[{"a":[{"l":[{},12]}],"e":[{"n":[{},12]}],"i":[{"n":[{},31]}],"o":[{"d":[{},12],"j":[{},12],"v":[{},26]}],"r":[{"a":[{"i":[{},14]}]}],"v":[{},14],"ę":[{},31],"ė":[{},25],"ų":[{},31],"ū":[{},12]},15],"u":[{"b":[{"l":[{},2]}],"d":[{},9],"g":[{},9],"k":[{"l":[{},5]}],"s":[{"i":[{},3]},9],"ž":[{},20]},0],"v":[{"e":[{},12],"y":[{},26]},15],"w":[{},15],"z":[{},15],"ą":[{},2],"č":[{},25],"ė":[{},46],"š":[{},15],"ž":[{},15]}],"t":[{"a":[{"b":[{},56],"k":[{"r":[{},2]}],"s":[{},8],"t":[{},56],"u":[{"r":[{"a":[{},6]}]}],"č":[{},56]},12],"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"b":[{},56],"m":[{},29],"o":[{},7],"t":[{},9]}],"f":[{},15],"g":[{},25],"h":[{},15],"i":[{"g":[{"r":[{},7]}],"k":[{"l":[{},24]}],"n":[{},29],"p":[{},56]},12],"j":[{},25],"k":[{"l":[{},13]},25],"l":[{},25],"m":[{},25],"n":[{},15],"o":[{"j":[{"e":[{},29]}],"l":[{"į":[{},56]}],"s":[{},9],"w":[{},56]},12],"p":[{"j":[{},13],"l":[{"ū":[{},2]}],"r":[{},7]},28],"r":[{"i":[{"o":[{},31],"š":[{},12]}],"o":[{},31],"ą":[{},31],"ų":[{},31]},15],"s":[{"i":[{},1],"k":[{"r":[{"i":[{},6]}]}]},71],"t":[{},47],"u":[{"a":[{},20],"r":[{},29]}],"v":[{"o":[{},12],"ė":[{"j":[{},31]}]},15],"w":[{},15],"y":[{"d":[{},29]}],"z":[{},15],"č":[{},15],"ę":[{},29],"ė":[{"m":[{"u":[{},17],"ę":[{},17],"ė":[{},17]},12]}],"š":[{},51],"ž":[{},28]}],"u":[{"a":[{"i":[{},17]},10],"b":[{"j":[{},12]},11],"c":[{},11],"d":[{},11],"e":[{},10],"f":[{},11],"g":[{"r":[{"i":[{"o":[{},8]}]},7]},11],"h":[{},11],"i":[{"m":[{},10],"n":[{},16],"r":[{},14]}],"j":[{},11],"k":[{"l":[{"e":[{},14]},17],"r":[{},17],"v":[{},17],"ų":[{},16]},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{"r":[{},17],"s":[{"l":[{},7]}]},12],"p":[{"l":[{},7],"r":[{"o":[{},2]}]},17],"r":[{"k":[{"l":[{},2]},5],"o":[{},18],"s":[{},9]},11],"s":[{"a":[{"l":[{},49]}],"l":[{"a":[{},2],"e":[{},2]},17],"v":[{"a":[{},3],"e":[{},2]}]},11],"t":[{"o":[{},1],"r":[{},56]},33],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},10],"į":[{},11],"š":[{"l":[{},33],"n":[{},33],"v":[{},14]},11],"ų":[{},11],"ū":[{},10],"ž":[{"i":[{"m":[{},5]}],"l":[{},17],"v":[{},2],"ė":[{},23]},11]}],"v":[{"a":[{".":[{},29],"p":[{},20],"t":[{},2]}],"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"p":[{},56],"s":[{},29]},12],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"e":[{"s":[{"i":[{"a":[{},64]}]}]}],"s":[{"k":[{},41]}],"t":[{"r":[{},24]}]}],"j":[{},15],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},72],"t":[{},15],"v":[{},15],"w":[{},15],"y":[{"d":[{"a":[{"u":[{},56]}]}]}],"z":[{},15],"ą":[{},29],"č":[{},15],"ė":[{"p":[{},31]},29],"š":[{},15],"ž":[{},15]}],"w":[{"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{},15],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"y":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{"i":[{"a":[{},3]}]},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{"l":[{},53]},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},17],"s":[{"k":[{},13]},11],"t":[{},11],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"z":[{"b":[{},15],"c":[{},15],"d":[{},15],"f":[{},15],"g":[{},15],"h":[{},15],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"ą":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},11],"s":[{},11],"t":[{},11],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"č":[{"b":[{},15],"c":[{},15],"d":[{},15],"e":[{"k":[{"o":[{},3]}]}],"f":[{},15],"g":[{},15],"h":[{},15],"i":[{"n":[{},1]}],"k":[{},15],"l":[{},15],"m":[{},15],"n":[{},15],"p":[{},15],"r":[{},15],"s":[{},15],"t":[{},15],"v":[{},15],"w":[{},15],"z":[{},15],"č":[{},15],"š":[{},15],"ž":[{},15]}],"ę":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},11],"s":[{},11],"t":[{},11],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"ė":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{"l":[{},53]},11],"l":[{},28],"m":[{"e":[{},17]},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},11],"s":[{"l":[{},2]},15],"t":[{"r":[{},13]},28],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"į":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},10],"e":[{},12],"f":[{},11],"g":[{},13],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{},73],"l":[{},12],"m":[{},12],"n":[{},11],"o":[{},11],"p":[{},13],"r":[{},12],"s":[{"i":[{},1],"l":[{},2],"m":[{},14],"r":[{},14],"t":[{},5]},11],"t":[{},74],"u":[{},11],"v":[{},12],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},10],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"š":[{"b":[{},43],"c":[{},15],"d":[{},51],"e":[{"i":[{},11],"v":[{},14]}],"f":[{},15],"g":[{},75],"h":[{},15],"i":[{"s":[{"t":[{},76]}],"u":[{"k":[{},3]}]}],"k":[{},43],"l":[{"i":[{"j":[{},12]}],"u":[{},12],"y":[{},29]},15],"m":[{},15],"n":[{"e":[{},12],"o":[{},1]},15],"o":[{"r":[{},14]}],"p":[{},75],"r":[{},15],"s":[{"i":[{"k":[{"a":[{"p":[{},64]}]}]},1]},77],"t":[{},61],"u":[{"š":[{},7]}],"v":[{"i":[{},12],"y":[{"d":[{},13]}]},78],"w":[{},15],"z":[{},15],"č":[{},25],"ė":[{"j":[{},14]}],"š":[{},15],"ž":[{},15]}],"ų":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},11],"s":[{},11],"t":[{},11],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"ū":[{"a":[{},11],"b":[{},11],"c":[{},11],"d":[{},11],"e":[{},11],"f":[{},11],"g":[{},11],"h":[{},11],"i":[{},11],"j":[{},11],"k":[{"l":[{},53]},11],"l":[{},11],"m":[{},11],"n":[{},11],"o":[{},11],"p":[{},11],"r":[{},11],"s":[{"k":[{},53],"l":[{},2],"t":[{},2]},11],"t":[{},11],"u":[{},11],"v":[{},11],"w":[{},11],"y":[{},11],"z":[{},11],"ą":[{},11],"č":[{},11],"ę":[{},11],"ė":[{},11],"į":[{},11],"š":[{},11],"ų":[{},11],"ū":[{},11],"ž":[{},11]}],"ž":[{"a":[{"n":[{"t":[{"s":[{},80]},79]}]}],"b":[{},51],"c":[{},15],"d":[{},51],"e":[{"n":[{},1]}],"f":[{},77],"g":[{},28],"h":[{},15],"i":[{"m":[{"u":[{},2]}],"o":[{},32]}],"j":[{},11],"k":[{},51],"l":[{"u":[{},12]},15],"m":[{},47],"n":[{},15],"p":[{},28],"r":[{},15],"s":[{"i":[{},1],"k":[{},13],"l":[{},81],"t":[{},2]},15],"t":[{},61],"u":[{"s":[{},9]},12],"v":[{"i":[{},13],"o":[{},17]},26],"w":[{},15],"z":[{},15],"č":[{},15],"į":[{"s":[{},32]}],"š":[{},15],"ž":[{},15]}]}',
    []
  ];
});
