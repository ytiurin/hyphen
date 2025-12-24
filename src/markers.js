export function levelsToMarkers(levels) {
  var markers = [];

  for (var i = 0; i < levels.length; i++)
    if ((levels[i] & 1) === 1) markers.push(i);

  return markers;
}

export function insertChar(text, hyphenChar, markers) {
  if (markers.length === 0) {
    return text;
  }

  var resultText = [text.slice(0, markers[0])];

  if (markers.length > 1)
    for (var i = 0, j = 1; j < markers.length; i++, j++) {
      resultText.push(text.slice(markers[i], markers[j]));
    }

  resultText.push(text.slice(markers[markers.length - 1]));

  return resultText.join(hyphenChar);
}

export function markersFromExceptionsDefinition(exceptionsList) {
  return exceptionsList.reduce(function (markersDict, definition) {
    var i = 0,
      markers = [];

    while ((i = definition.indexOf("-", i + 1)) > -1) {
      markers.push(i);
    }

    markersDict[definition.toLocaleLowerCase().replace(/\-/g, "")] = markers;

    return markersDict;
  }, {});
}
