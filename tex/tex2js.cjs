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

var texcode = fs.readFileSync(readfilename, "utf8");

// remove {} from comments
jscode = texcode.replace(/(?<=%.+)[{}]/g, "_"); //
// put every term inside of {} in ""
jscode = jscode.replace(/(?<={[^}]*)(?<!%[^\n]*)[^\s%]+(?=[^{]*})/gs, '"$&",');
// convert comments
jscode = jscode.replace(/%/gs, "//");
// convert string var
jscode = jscode.replace(/\\(\w+) (\S+)/g, 'var $1 = "$2"');
// convert other vars
jscode = jscode.replace(/\\(\w+)/g, "var $1");
// convert opening brackets
jscode = jscode.replace(/\{/g, "=[");
// convert closing brackets
jscode = jscode.replace(/\}/g, "]");

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

fs.writeFileSync(writefilename, jscode, { encoding: "utf8" });
console.log("File saved: " + writefilename);
