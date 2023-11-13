const REG_TERM_CLOSE = /(.*)}/;
const REG_VAR = /\\(\w+)/;
const REG_VAR_VAL = /\\(\w+) (.+)/;
const REG_VAR_OPEN = /\\(.+){/;
const REG_VAR_OPEN_TERM = /\\(.+){(.+)/;
const REG_VAR_OPEN_CLOSE = /\\(.+){(.*)}/;

function tex2js(texcode) {
  var pointerTermDefinition = false;

  var texlines = texcode.split("\n");

  var jschunk = "",
    jschunk0 = "",
    jscode = [],
    jsline = "",
    texline,
    z = 0;

  while ((texline = texlines[z++]) !== undefined) {
    jsline = texline.split("%");
    jschunk = jschunk0 = jsline[0] || "";

    if (pointerTermDefinition) {
      jschunk = jschunk0.replace(/(\S+)/g, '"$&",');
    }
    if (REG_VAR.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR, "var $1;");
    }
    if (REG_VAR_VAL.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_VAL, 'var $1 = "$2";');
    }
    if (REG_VAR_OPEN.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_OPEN, "var $1 = [");
      pointerTermDefinition = true;
    }
    if (REG_VAR_OPEN_TERM.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_OPEN_TERM, 'var $1 = ["$2",');
      pointerTermDefinition = true;
    }
    if (REG_TERM_CLOSE.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_TERM_CLOSE, '"$1"];');
      pointerTermDefinition = false;
    }
    if (REG_VAR_OPEN_CLOSE.test(jschunk0)) {
      jschunk = jschunk0.replace(REG_VAR_OPEN_CLOSE, 'var $1 = "$2";');
    }
    jsline[0] = jschunk;
    jscode.push(jsline.join("//"));
  }
  jscode = jscode.join("\n");
  return jscode;
}

module.exports = { tex2js };
