var NUMS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function createIterator(str) {
  var i = 0;

  function next() {
    return str[i++];
  }

  return next;
}

function normalizeEmptyNodes(parent) {
  for (let key in parent) {
    let node = parent[key], ch5n = node[0], weights = node[1];

    if (Object.keys(ch5n).length === 0) {
      ch5n = undefined;
    }

    if (ch5n !== undefined && weights !== undefined) {
      parent[key] = [ch5n, weights];
    }
    else {
      parent[key] = ch5n || weights;
    }

    if (ch5n !== undefined) {
      normalizeEmptyNodes(ch5n);
    }
  }
}

function createPatternTrie(patterns) {
  var pattern,
    symb,
    patternTrie = [{}],
    nextPattern = createIterator(patterns),
    weightsTable = [];

  while ((pattern = nextPattern())) {
    var ptr = patternTrie,
      symb,
      weights = [],
      prevSymbIsNumber = false,
      nextSymbol = createIterator(pattern.split(""));

    while ((symb = nextSymbol())) {
      if (NUMS.indexOf(symb) > -1) {
        weights.push(parseInt(symb));

        prevSymbIsNumber = true;
      } else {
        if (!prevSymbIsNumber && symb !== ".") {
          weights.push(0);
        }

        ptr[0][symb] = ptr[0][symb] || [{}];
        ptr = ptr[0][symb];

        prevSymbIsNumber = false;
      }
    }

    while (weights[weights.length - 1] === 0) {
      weights.pop();
    }

    weights = weights.join("");

    let weightsIndex = weightsTable.indexOf(weights);

    if (weightsIndex === -1) {
      weightsTable.push(weights);
      weightsIndex = weightsTable.length - 1;
    }

    ptr[1] = weightsIndex;
  }

  normalizeEmptyNodes(patternTrie[0]);

  return [weightsTable, patternTrie[0]];
}

module.exports = { createPatternTrie, normalizeEmptyNodes };
