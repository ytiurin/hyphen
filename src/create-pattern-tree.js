var NUMS = ["1", "2", "3", "4", "5", "6"];

function createIterator(str) {
  var i = 0;

  function next() {
    return str[i++];
  }

  return next;
}

export function createPatternTree(patterns) {
  var pattern,
    symb,
    maxPatternLength = 0,
    patternTree = [{}],
    nextPattern = createIterator(patterns);

  while ((pattern = nextPattern())) {
    var ptr = patternTree,
      symb,
      weights = [],
      patternLength = 0,
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

        if (symb !== ".") {
          patternLength++;
        }

        ptr[0][symb] = ptr[0][symb] || [{}];
        ptr = ptr[0][symb];

        prevSymbIsNumber = false;
      }
    }

    while (weights[weights.length - 1] === 0) {
      weights.pop();
    }

    ptr[1] = weights;
    ptr[2] = pattern;

    if (maxPatternLength < patternLength) {
      maxPatternLength = patternLength;
    }
  }

  return [patternTree[0], maxPatternLength];
}
