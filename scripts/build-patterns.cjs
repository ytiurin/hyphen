const DIR_PATTERNS = "patterns";
const DIR_TEX = "tex";

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

const { tex2js } = require("./tex2js.cjs");
const { createPatternTree } = require("./createPatternTree.cjs");

buildFiles(
  readdirSync(pathTo(DIR_TEX)).filter(a => ~a.indexOf(".tex")),
  filename => pathTo(DIR_PATTERNS, tagFromFilename(filename) + ".js"),
  filename => {
    var code = tex2js(readFileSync(pathTo(DIR_TEX, filename), "utf8"));
    var patterns = "",
      hyphenation;

    (function () {
      eval(code);

      code =
        "var patterns = '" +
        JSON.stringify(createPatternTree(patterns)).replace(/'/g, "\\'") +
        "';";

      code +=
        "var hyphenation=" +
        (hyphenation ? JSON.stringify(hyphenation) : "[]") +
        ";";
    })();

    return prettier.format(
      makeUMD(code, makeGlobalName(tagFromFilename(filename))),
      Object.assign(JSON.parse(readFileSync(".prettierrc.json")), {
        parser: "babel"
      })
    );
  },
  (source, dest) => {
    console.log(basename(source), "->", basename(dest));
  }
);
/******************************************************************************/
console.log(`Done`);
