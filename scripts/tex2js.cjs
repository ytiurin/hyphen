function tex2js(texcode) {
  // remove {} from comments
  var jscode = texcode.replace(/(?<=%.+)[{}]/g, "_"); //
  // put every term inside of {} in ""
  jscode = jscode.replace(
    /(?<={[^}]*)(?<!%[^\n]*)[^\s%]+(?=[^{]*})/gs,
    '"$&",'
  );
  // convert comments
  jscode = jscode.replace(/%/gs, "//");
  // convert string var
  jscode = jscode.replace(/\\(\w+) (\S+)/g, 'var $1 = "$2"');
  // convert other vars
  jscode = jscode.replace(/\\(\w+)/g, "var $1");
  // convert opening brackets
  jscode = jscode.replace(/\{/g, "=[");
  // convert closing brackets
  jscode = jscode.replace(/\}/g, "]");

  return jscode;
}

module.exports = { tex2js };
