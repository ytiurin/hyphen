import { createTextReader } from "../src/textReader.js";
import { createHyphenationVerifier } from "../src/hyphenationVerifier.js";

let text = `Dans des temps très anciens, alors qu'il pouvait encore être utile de faire
des voeux, vivait un roi dont toutes les filles étaient belles. La plus
jeune était si belle que le soleil, qui en a cependant tant vu, s'étonnait
chaque fois qu'il illuminait son visage. Non loin du château du roi, il y
avait une grande et sombre forêt et, dans la forêt, sous un vieux tilleul,
une fontaine. Un jour qu'il faisait très chaud, la royale enfant partit dans
le bois, et s'assit au bord de la source fraîche. Et comme elle s'ennuyait,
elle prit sa balle en or, la jeta en l'air et la rattrapa; <blockquote id="hi">c'était</blockquote> son jeu
favo\u00ADri.`;

// text = `Dans des temps très anciens`;
// text = "Hyphenation hyphenatioN";
// text = "<beautiful class=\"beautiful\">";
// text = "beautiful";

var minWordLength = 5;
var hyphenChar = "\u00AD";

const readText = createTextReader(
  createHyphenationVerifier(hyphenChar, true, minWordLength)
);

var a,
  all = [];

while ((a = readText(text))) {
  console.log(a);
  all.push(a[0]);
  all.push(a[1]);
}
console.log(text === all.join(""));
