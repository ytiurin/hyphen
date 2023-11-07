export function createTextReader(setup) {
  var char1 = "";
  var char2 = "";
  var i = 0;
  var verifier = setup();

  return function (text) {
    while (i < text.length) {
      char1 = text.charAt(i++);
      char2 = text.charAt(i);

      var verified = verifier(char1, char2);

      if (verified !== undefined) {
        return verified;
      }
    }
  };
}
