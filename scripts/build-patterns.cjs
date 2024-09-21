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

const evalTex = texCode => {
  var patterns, hyphenation, input;

  return (() => {
    eval(tex2js(texCode));

    return [patterns, hyphenation, input];
  })();
};

const purify = (patterns, hyphenation) => [
  patterns.filter ? patterns.filter(a => a !== " ") : patterns,
  (hyphenation || []).filter(a => a !== "")
];

/******************************************************************************/
console.log(`Porting patterns`);

const { tex2js } = require("./tex2js.cjs");
const { createPatternTrie } = require("./createPatternTrie.cjs");

buildFiles(
  readdirSync(pathTo(DIR_TEX)).filter(a => ~a.indexOf(".tex")),
  filename => pathTo(DIR_PATTERNS, tagFromFilename(filename) + ".js"),
  filename => {
    let [patterns, hyphenation, input] = evalTex(
      readFileSync(pathTo(DIR_TEX, filename), "utf8")
    );

    if (input !== undefined) {
      let hyphenation2;

      [patterns, hyphenation2] = evalTex(
        readFileSync(pathTo(DIR_TEX, input), "utf8")
      );

      if (hyphenation2) {
        hyphenation = (hyphenation || []).concat(hyphenation2);
      }
    }

    [patterns, hyphenation] = purify(patterns, hyphenation);

    var [weightsTable, patternTrie] = createPatternTrie(patterns);

    const resultCode =
      "return ['" +
      weightsTable.join() +
      "','" +
      JSON.stringify(patternTrie).replace(/'/g, "\\'") +
      "', " +
      JSON.stringify(hyphenation) +
      "];";

    return prettier.format(
      makeUMD(resultCode, makeGlobalName(tagFromFilename(filename))),
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
