const DIR_SRC = "src";
const DIR_UMD = "umd";

const FILENAME_BUNDLE = "hyphen.js";
const FILENAME_PRETTIER_CONFIG = ".prettierrc.json";
const FILENAME_UMD_CAP = "cap";
const FILENAME_UMD_UNDER = "under";

console.log(`Building to ${FILENAME_BUNDLE}`);

const { exec } = require("child_process");
const { join } = require("path");
const { readFileSync, readdirSync, writeFileSync } = require("fs");
const prettier = require("prettier");

const pathSrc = join(__dirname, DIR_SRC);
const pathUMD = join(__dirname, DIR_UMD);

const filepaths = [].concat(
  `${pathUMD}/${FILENAME_UMD_CAP}`,
  readdirSync(pathSrc).map((filename) => `${pathSrc}/${filename}`),
  `${pathUMD}/${FILENAME_UMD_UNDER}`
);

let source = filepaths.map((filepath) => readFileSync(filepath)).join("");

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
