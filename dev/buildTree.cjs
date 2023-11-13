const { readFileSync, writeFileSync } = require("fs");
const { createPatternTree } = require("../scripts/createPatternTree.cjs");
const { tex2js } = require("../scripts/tex2js.cjs");

const PATTERNS_PATH = "./tex/hyph-en-us.tex";

var code = tex2js(readFileSync(PATTERNS_PATH, "utf8"));
// console.log(code);

eval(code);

patterns = createPatternTree(patterns);
console.log(patterns);

// writeFileSync("1.json", JSON.stringify(patterns));
