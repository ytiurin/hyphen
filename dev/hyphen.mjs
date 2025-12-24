import { createHyphenator } from "../src/create-hyphenator.js";
import { createRequire } from "module";

let text =
  "The Tortoise never stopped for a moment, walking slowly but steadily, right to the end of the course. The Hare ran fast and stopped to lie down for a rest. But he fell fast asleep. Eventually, he woke up and ran as fast as he could. But when he reached the end, he saw the Tortoise there already, sleeping comfortably after her effort.";
// let text = "hyphenation hyphenation table project";

const require = createRequire(import.meta.url);

const hy = createHyphenator(require("./en-us.cjs"), {
  hyphenChar: "\u00AD",
  exceptions: ["e-f-f-o-r-t", "tort-oise"],
  debug: true
});

console.log(hy(text, { exceptions: ["e-ffort"] }));
