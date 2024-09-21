const { readFileSync, writeFileSync } = require("fs");
const { createPatternTrie } = require("../scripts/createPatternTrie.cjs");
const { tex2js } = require("../scripts/tex2js.cjs");

const PATTERNS_PATH = "./tex/hyph-en-us.tex";

var code = tex2js(readFileSync(PATTERNS_PATH, "utf8"));
// console.log(code);

eval(code);

patterns = createPatternTrie(patterns);
console.log(patterns);

// writeFileSync("1.json", JSON.stringify(patterns));
