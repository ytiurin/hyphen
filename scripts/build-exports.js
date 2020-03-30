const DIR_EXPORTS = "exports";
const DIR_PATTERNS = "patterns";
const DIR_SELF = "scripts";

const aliases = [
  ["en", "en-us"],
  ["el", "el-monoton"],
  ["ethi", "mul-ethi"],
  ["mn", "mn-cyrl"],
  ["sh", "sh-cyrl"],
  ["sr", "sr-cyrl"],
  ["zh", "zh-latn-pinyin"]
];

const makeAlias = locale => `module.exports = require("../${locale}/index.js");
`;
const makeExport = locale =>
  `module.exports = require("../../export-interface.js")(
  require("../../patterns/${locale}.js")
);
`;
const makeIndex = () => `module.exports = "This export will be added in future versions";
`;

console.log(`Building exports`);

const { basename, join } = require("path");
const {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} = require("fs");

const pathRoot = __dirname.replace(DIR_SELF, "");
const pathExports = join(pathRoot, DIR_EXPORTS);
const pathPatterns = join(pathRoot, DIR_PATTERNS);

if (!existsSync(pathExports)) {
  mkdirSync(pathExports);
}

const files = readdirSync(pathPatterns);

for (var filename of files) {
  const localeName = basename(filename, ".js");
  const pathLocale = `${pathExports}/${localeName}`;

  if (!existsSync(pathLocale)) {
    mkdirSync(pathLocale);
  }

  writeFileSync(`${pathLocale}/index.js`, makeExport(localeName));
}

console.log(`Building aliases`);

for (var alias of aliases) {
  const pathLocale = `${pathExports}/${alias[0]}`;

  if (!existsSync(pathLocale)) {
    mkdirSync(pathLocale);
  }

  writeFileSync(`${pathLocale}/index.js`, makeAlias(alias[1]));
}

console.log(`Writing index.js`);
writeFileSync(`${pathExports}/index.js`, makeIndex());

console.log(`Done`);
