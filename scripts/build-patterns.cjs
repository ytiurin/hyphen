const DIR_PATTERNS = "patterns";
const DIR_TEX = "tex";

const REG_CLOSE = /}/;
const REG_TERM_CLOSE = /(.*)}/;
const REG_VAR = /\\(\w+)/;
const REG_VAR_VAL = /\\(\w+) (.+)/;
const REG_VAR_OPEN = /\\(.+){/;
const REG_VAR_OPEN_TERM = /\\(.+){(.+)/;
const REG_VAR_OPEN_CLOSE = /\\(.+){(.*)}/;

const makeUMD = (code, globalName) => `(function (root, factory) {
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
    root.${globalName} = factory();
  }
})(this, function () {
  var patterns = [],
    hyphenation = [];

  ${code}

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
`;

const { basename, dirname, join, resolve } = require("path");
const {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} = require("fs");
const prettier = require("prettier");

function buildFiles(arr, destPathFactory, contentFactory, done) {
  for (var item of arr) {
    const pathDest = destPathFactory(item);

    existsSync(dirname(pathDest)) ||
      mkdirSync(dirname(pathDest), { recursive: true });
    writeFileSync(pathDest, contentFactory(item));
    done && done(item, pathDest);
  }
}

function tex2js(texcode) {
  var pointerTermDefinition = false;

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

    if (pointerTermDefinition) {
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
      pointerTermDefinition = true;
    }
    if (REG_VAR_OPEN_TERM.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_OPEN_TERM, 'var $1 = ["$2",');
      pointerTermDefinition = true;
    }
    if (REG_TERM_CLOSE.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_TERM_CLOSE, '"$1"];');
      pointerTermDefinition = false;
    }
    if (REG_VAR_OPEN_CLOSE.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_OPEN_CLOSE, 'var $1 = "$2";');
    }
    jsline[0] = jschunk;
    jscode.push(jsline.join("//"));
  }
  jscode = jscode.join("\n");
  return jscode;
}

const pathTo = (pathRoot => (...args) => join(pathRoot, ...args))(
  resolve(__dirname, "..")
);

const tagFromFilename = filename => filename.substring(5, filename.length - 4);

const makeGlobalName = tag =>
  "hyphenationPatterns" +
  tag.substr(0, 1).toUpperCase() +
  tag.substr(1).replace(/-\w/g, a => a.substr(1).toUpperCase());

/******************************************************************************/
console.log(`Porting patterns`);

buildFiles(
  readdirSync(pathTo(DIR_TEX)).filter(a => ~a.indexOf(".tex")),
  filename => pathTo(DIR_PATTERNS, tagFromFilename(filename) + ".js"),
  filename =>
    prettier.format(
      makeUMD(
        tex2js(readFileSync(pathTo(DIR_TEX, filename), "utf8")),
        makeGlobalName(tagFromFilename(filename))
      ),
      Object.assign(JSON.parse(readFileSync(".prettierrc.json")), {
        parser: "babel"
      })
    ),
  (source, dest) => {
    console.log(basename(source), "->", basename(dest));
  }
);
/******************************************************************************/
console.log(`Done`);
