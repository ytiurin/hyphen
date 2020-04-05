const DIR_SRC = "src";
const DIR_UMD = "umd";

const FILENAME_BUNDLE = "hyphen.js";
const FILENAME_PRETTIER_CONFIG = ".prettierrc.json";

const makeUMD = code => `/** Text hyphenation in Javascript.
 *  Copyright (C) 2020 Yevhen Tiurin (yevhentiurin@gmail.com)
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

const { join, resolve } = require("path");
const { readFileSync, readdirSync, writeFileSync } = require("fs");
const prettier = require("prettier");

const pathTo = (pathRoot => (...args) => join(pathRoot, ...args))(
  resolve(__dirname, "..")
);

console.log(`Building to ${FILENAME_BUNDLE}`);

let source = makeUMD(
  readdirSync(pathTo(DIR_SRC))
    .map(filename => readFileSync(pathTo(DIR_SRC, filename)))
    .join("")
);

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
