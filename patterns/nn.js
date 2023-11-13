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
    root.hyphenationPatternsNn = factory();
  }
})(this, function () {
  var patterns = "{}";
  var hyphenation = ["att-en-de", "bet-re", ""];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
