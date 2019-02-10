var POINTER_TERM_DEFINITION = false;
var SOURCE_ENCODING = "utf8";

var REG_CLOSE = /}/;
var REG_TERM_CLOSE = /(.*)}/;
var REG_VAR = /\\(\w+)/;
var REG_VAR_VAL = /\\(\w+) (.+)/;
var REG_VAR_OPEN = /\\(.+){/;
var REG_VAR_OPEN_TERM = /\\(.+){(.+)/;
var REG_VAR_OPEN_CLOSE = /\\(.+){(.*)}/;

var fs = require("fs");

var u = 1;
var readfilename = process.argv[process.argv.length - u++];
if (~readfilename.indexOf("--gsuf=")) {
  var globalSuffix = readfilename.substring(7);
  readfilename = process.argv[process.argv.length - u++];
}
if (~readfilename.indexOf(".js")) {
  var writefilename = readfilename;
  readfilename = process.argv[process.argv.length - u++];
}
var lioreadfilename = readfilename.lastIndexOf(".");
var writefilename =
  writefilename ||
  (readfilename.substring(0, lioreadfilename) || readfilename) + ".js";

var texcode = fs.readFileSync(readfilename, SOURCE_ENCODING);
var texlines = texcode.split("\n");

var jschunk = "",
  jschunk0 = "",
  jscode = [],
  jsline = "",
  texline,
  z = 0;
while ((texline = texlines[z++]) !== undefined) {
  jsline = texline.split("%");
  jschunk = jschunk0 = jsline[0] || "";

  if (POINTER_TERM_DEFINITION) {
    jschunk = jschunk0.replace(/(\S+)/g, '"$&",');
  }
  if (REG_VAR.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_VAR, "var $1;");
  }
  if (REG_VAR_VAL.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_VAR_VAL, 'var $1 = "$2";');
  }
  if (REG_VAR_OPEN.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_VAR_OPEN, "var $1 = [");
    POINTER_TERM_DEFINITION = true;
  }
  if (REG_VAR_OPEN_TERM.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_VAR_OPEN_TERM, 'var $1 = ["$2",');
    POINTER_TERM_DEFINITION = true;
  }
  if (REG_TERM_CLOSE.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_TERM_CLOSE, '"$1"];');
    POINTER_TERM_DEFINITION = false;
  }
  if (REG_VAR_OPEN_CLOSE.test(jschunk0)) {
    jschunk = jschunk0.replace(REG_VAR_OPEN_CLOSE, 'var $1 = "$2";');
  }
  jsline[0] = jschunk;
  jscode.push(jsline.join("//"));
}
jscode = jscode.join("\n");

jscode = `(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatterns${globalSuffix || ""} = factory();
  }
}(this, function () {
  var patterns = [], hyphenation = [];
${jscode}
  return {
    patterns: patterns,
    exceptions: hyphenation
  };
}));
`;

fs.writeFileSync(writefilename, jscode, { encoding: SOURCE_ENCODING });
console.log("File saved: " + writefilename);
