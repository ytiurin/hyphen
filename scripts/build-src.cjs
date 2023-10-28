const FILENAME_BUNDLE = "hyphen.js";
const FILENAME_PRETTIER_CONFIG = ".prettierrc.json";

const makeUMD = code => `/** Text hyphenation in Javascript.
 *  Copyright (C) 2021 Yevhen Tiurin (yevhentiurin@gmail.com)
 *  https://github.com/ytiurin/hyphen
 *
 *  Released under the ISC license
 *  https://github.com/ytiurin/hyphen/blob/master/LICENSE
 */
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
    root.createHyphenator = factory();
  }
})(this, function () {

  ${code}

  return createHyphenator;
});
`;

const { exec } = require("child_process");

const { buildSync } = require("esbuild");
const { readFileSync, writeFileSync } = require("fs");
const prettier = require("prettier");

console.log(`Building to ${FILENAME_BUNDLE}`);

const result = buildSync({
  entryPoints: ["./src/create-hyphenator.js"],
  bundle: true,
  write: false
});

let { text: bundledCode } = result.outputFiles[0];

bundledCode = bundledCode
  .split("\n")
  .filter((line, i, arr) => {
    // remove comments with imported filenames
    if (line.indexOf("// src") !== -1) {
      return false;
    }

    // remove 1st and two last lines
    if (i === 0 || i === arr.length - 1 || i === arr.length - 2) {
      return false;
    }

    return true;
  })
  .join("\n");

let source = makeUMD(bundledCode);

const prettierConfig = Object.assign(
  JSON.parse(readFileSync(FILENAME_PRETTIER_CONFIG)),
  { parser: "babel" }
);
source = prettier.format(source, prettierConfig);
writeFileSync(FILENAME_BUNDLE, source);

exec("npm run lint", (error, stdout, stderr) => {
  if (error) {
    console.log(stdout);
    console.log("Build has issues");
    return;
  }
  console.log("Build is fine");
});
