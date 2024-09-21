const { normalizeEmptyNodes } = require("../scripts/createPatternTrie.cjs");

const trie = {
  a: [{ b: [{ c: [{}, 1] }] }]
};

normalizeEmptyNodes(trie);
console.log(JSON.stringify(trie, null, 2));
