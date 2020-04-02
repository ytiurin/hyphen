const DIR_PACKAGE = "package";
const DIR_PATTERNS = "patterns";
const DIR_SCRIPTS = "scripts";

const aliases = [
  ["en", "en-us"],
  ["el", "el-monoton"],
  ["ethi", "mul-ethi"],
  ["mn", "mn-cyrl"],
  ["sh", "sh-cyrl"],
  ["sr", "sr-cyrl"],
  ["zh", "zh-latn-pinyin"]
];

const projectFiles = [
  "CHANGELOG",
  "export-contract.js",
  "hyphen.js",
  "LICENSE",
  "README.md"
];

const makeAlias = locale => `module.exports = require("../${locale}/index.js");
`;
const makeExport = locale =>
  `module.exports = require("../export-contract.js")(
  require("../patterns/${locale}.js")
);
`;

const { basename, dirname, join, resolve, sep } = require("path");
const {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} = require("fs");

function copyDir(source, dest) {
  const files = readdirSync(source).map(filename => join(source, filename));
  copyFiles(files, dest);
}

function copyFiles(paths, dest) {
  existsSync(dest) || mkdirSync(dest, { recursive: true });
  for (var filepath of paths) {
    const filename = basename(filepath);
    copyFileSync(filepath, join(dest, filename));
  }
}

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

/******************************************************************************/
console.log(`Copying predefined files`);

copyDir(pathTo(DIR_SCRIPTS, DIR_PACKAGE), pathTo(DIR_PACKAGE));
/******************************************************************************/
console.log(`Copying patterns files`);

copyDir(pathTo(DIR_PATTERNS), pathTo(DIR_PACKAGE, DIR_PATTERNS));
/******************************************************************************/
console.log(`Copying project files`);

copyFiles(
  projectFiles.map(file => pathTo(file)),
  pathTo(DIR_PACKAGE)
);
/******************************************************************************/
console.log(`Building exports`);

buildFiles(
  readdirSync(pathTo(DIR_PATTERNS)),
  filename => pathTo(DIR_PACKAGE, basename(filename, ".js"), "index.js"),
  filename => makeExport(basename(filename, ".js"))
);
/******************************************************************************/
console.log(`Building aliases`);

buildFiles(
  aliases,
  alias => pathTo(DIR_PACKAGE, alias[0], "index.js"),
  alias => makeAlias(alias[1])
);
/******************************************************************************/
console.log(`Done`);
