(function (root, exports) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return exports;
    });
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = exports;
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsTa = exports;
  }
})(this, [
  [[2, 2], [1, 1], [0, 1], [1], [2, 0, 1], [2, 1]],
  {
    "‍": 0,
    "‌": 1,
    அ: 1,
    ஆ: 1,
    இ: 1,
    ஈ: 1,
    உ: 1,
    ஊ: 1,
    எ: 1,
    ஏ: 1,
    ஐ: 1,
    ஒ: 1,
    ஓ: 1,
    ஔ: 1,
    "ா": 2,
    "ி": 2,
    "ீ": 2,
    "ு": 2,
    "ூ": 2,
    "ெ": 2,
    "ே": 2,
    "ை": 2,
    "ொ": 2,
    "ோ": 2,
    "ௌ": 2,
    க: [{ "்": 4 }, 3],
    ங: [{ "்": 4 }, 3],
    ச: [{ "்": 4 }, 3],
    ஜ: 3,
    ஞ: [{ "்": 4 }, 3],
    ட: [{ "்": 4 }, 3],
    ண: [{ "்": 4 }, 3],
    த: [{ "்": 4 }, 3],
    ந: [{ "்": 4 }, 3],
    ப: [{ "்": 4 }, 3],
    ம: [{ "்": 4 }, 3],
    ய: [{ "்": 4 }, 3],
    ர: [{ "்": 4 }, 3],
    ற: [{ "்": 4 }, 3],
    ல: [{ "்": 4 }, 3],
    ள: [{ "்": 4 }, 3],
    ழ: [{ "்": 4 }, 3],
    வ: [{ "்": 4 }, 3],
    ஷ: [{ "்": 4 }, 3],
    ஸ: [{ "்": 4 }, 3],
    ஹ: [{ "்": 4 }, 3],
    ன: { "்": 4 },
    "ஂ": 5,
    ஃ: 5,
    "ௗ": 5,
    "்": 5
  },
  {}
]);
