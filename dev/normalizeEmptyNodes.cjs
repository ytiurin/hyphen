const { normalizeEmptyNodes } = require("../scripts/createPatternTree.cjs");

const tree = {
  a: [{ b: [{ c: [{}, 1] }] }]
};

normalizeEmptyNodes(tree);
console.log(JSON.stringify(tree, null, 2));
