![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

# hyphen

[Demo page](https://ytiurin.github.io/hyphen/)

This is a text hyphenation library, based on Franklin M. Liang's [hyphenation algorithm](https://tug.org/docs/liang/ "Frank Liang wrote his Stanford Ph.D. thesis on a hyphenation algorithm that is standard in TeX, and has been adapted to numerous languages."). In core of the algorithm lies a set of hyphenation patterns. They are extracted from hand-hyphenated dictionaries. Patterns for this library were taken from [ctan.org](https://ctan.org/ "The Comprehensive TEX Archive Network (CTAN) is the central place for all kinds of material around TEX.") and ported to Javascript.

```javascript
import { hyphenate } from "hyphen/en";

(async () => {
  const text = "A certain king had a beautiful garden";

  const result = await hyphenate(text);
  // result is "A cer\u00ADtain king had a beau\u00ADti\u00ADful garden"
})();
```

## Hyphenate HTML

HTML tags will automaticly skip hyphenation.

```javascript
import { hyphenateHTML as hyphenate } from "hyphen/en";

(async () => {
  const text = "<blockquote>A certain king had a beautiful garden</blockquote>";

  const result = await hyphenate(text);
  // result is "<blockquote>A cer\u00ADtain king had a beau\u00ADti\u00ADful garden</blockquote>"
})();
```

## Multilingual hyphenation

To hypehante text in any other supported language, just change the `import` source. For example for German language, import a hyphenation function from a `"hyphen/de"` source.

```javascript
import { hyphenate } from "hyphen/de";

(async () => {
  const text = "Ein gewisser König hatte einen wunderschönen Garten";

  const result = await hyphenate(text);
  // result is "Ein ge\u00ADwis\u00ADser Kö\u00ADnig hat\u00ADte einen wun\u00ADder\u00ADschö\u00ADnen Gar\u00ADten"
})();
```

It is possible to use many langauges on the same page.

```javascript
import { hyphenate as hyphenateEn } from "hyphen/en";
import { hyphenate as hyphenateDe } from "hyphen/de";

(async () => {
  const english = "A certain king had a beautiful garden";

  const englishResult = await hyphenateEn(english);
  // result is "A cer\u00ADtain king had a beau\u00ADti\u00ADful garden"

  const deutch = "Ein gewisser König hatte einen wunderschönen Garten";

  const deutchResult = await hyphenateDe(deutch);
  // result is "Ein ge\u00ADwis\u00ADser Kö\u00ADnig hat\u00ADte einen wun\u00ADder\u00ADschö\u00ADnen Gar\u00ADten"
})();
```

## Sync version

The `hyphenate` function returns a `Promise`, however a sync version of it returns a `string`.

```javascript
import { hyphenateSync as hyphenate } from "hyphen/en";

const text = "A certain king had a beautiful garden";

const result = hyphenate(text);
// result is "A cer\u00ADtain king had a beau\u00ADti\u00ADful garden"
```

## Install

```
npm install hyphen
```

## Options

- **debug**

  A `Boolean` indicating, if script should output debug info to console. Default is `false`.

- **hyphenChar**

  A `String` sets a value of the soft hyphen character. Default value is `\u00AD`.

- **minWordLength**

  A `Number` sets the minimum length of the word, intended for hyphenation. Default value is `5`.

### Example of using options

```javascript
import { hyphenate } from "hyphen/en";

(async () => {
  const text = "A certain king had a beautiful garden";

  const result = await hyphenate(text, { hyphenChar: "-" });
  // result is "A cer-tain king had a beau-ti-ful garden"
})();
```

## List of available languages

<details>
  <summary>Check the list</summary>

- Afrikaans language

```javascript
import { hyphenate } from "hyphen/af";
```

- Assamese language

```javascript
import { hyphenate } from "hyphen/as";
```

- Belarusian language

```javascript
import { hyphenate } from "hyphen/be";
```

- Bulgarian language

```javascript
import { hyphenate } from "hyphen/bg";
```

- Bengali language

```javascript
import { hyphenate } from "hyphen/bn";
```

- Catalan language

```javascript
import { hyphenate } from "hyphen/ca";
```

- Coptic language

```javascript
import { hyphenate } from "hyphen/cop";
```

- Czech language

```javascript
import { hyphenate } from "hyphen/cs";
```

- Welsh language

```javascript
import { hyphenate } from "hyphen/cy";
```

- Church Slavonic language

```javascript
import { hyphenate } from "hyphen/cu";
```

- Danish language

```javascript
import { hyphenate } from "hyphen/da";
```

- German, traditional spelling

```javascript
import { hyphenate } from "hyphen/de-1901";
```

- German, reformed spelling

```javascript
import { hyphenate } from "hyphen/de-1996";
```

- German, traditional Swiss spelling

```javascript
import { hyphenate } from "hyphen/de-CH-1901";
```

- Modern Greek, monotonic spelling

```javascript
import { hyphenate } from "hyphen/el-monoton";
```

- Modern Greek, polytonic spelling

```javascript
import { hyphenate } from "hyphen/el-polyton";
```

- English, British spelling language

```javascript
import { hyphenate } from "hyphen/en-gb";
```

- English, American spelling language

```javascript
import { hyphenate } from "hyphen/en-us";
```

- Spanish language

```javascript
import { hyphenate } from "hyphen/es";
```

- Estonian language

```javascript
import { hyphenate } from "hyphen/et";
```

- Basque language

```javascript
import { hyphenate } from "hyphen/eu";
```

- Finnish language

```javascript
import { hyphenate } from "hyphen/fi";
```

- French language

```javascript
import { hyphenate } from "hyphen/fr";
```

- Friulan language

```javascript
import { hyphenate } from "hyphen/fur";
```

- Irish language

```javascript
import { hyphenate } from "hyphen/ga";
```

- Galician language

```javascript
import { hyphenate } from "hyphen/gl";
```

- Ancient Greek language

```javascript
import { hyphenate } from "hyphen/grc";
```

- Gujarati language

```javascript
import { hyphenate } from "hyphen/gu";
```

- Hindi language

```javascript
import { hyphenate } from "hyphen/hi";
```

- Croatian language

```javascript
import { hyphenate } from "hyphen/hr";
```

- Upper Sorbian language

```javascript
import { hyphenate } from "hyphen/hsb";
```

- Hungarian language

```javascript
import { hyphenate } from "hyphen/hu";
```

- Armenian language

```javascript
import { hyphenate } from "hyphen/hy";
```

- Interlingua language

```javascript
import { hyphenate } from "hyphen/ia";
```

- Bahasa Indonesia, Indonesian language

```javascript
import { hyphenate } from "hyphen/id";
```

- Icelandic language

```javascript
import { hyphenate } from "hyphen/is";
```

- Italian language

```javascript
import { hyphenate } from "hyphen/it";
```

- Georgian language

```javascript
import { hyphenate } from "hyphen/ka";
```

- Kurmanji, Northern Kurdish language

```javascript
import { hyphenate } from "hyphen/kmr";
```

- Kannada language

```javascript
import { hyphenate } from "hyphen/kn";
```

- Classical Latin language

```javascript
import { hyphenate } from "hyphen/la-x-classic";
```

- Liturgical Latin language

```javascript
import { hyphenate } from "hyphen/la-x-liturgic";
```

- Latin language

```javascript
import { hyphenate } from "hyphen/la";
```

- Lithuanian language

```javascript
import { hyphenate } from "hyphen/lt";
```

- Latvian language

```javascript
import { hyphenate } from "hyphen/lv";
```

- Malayalam language

```javascript
import { hyphenate } from "hyphen/ml";
```

- Mongolian, Cyrillic script, alternative patterns

```javascript
import { hyphenate } from "hyphen/mn-cyrl-x-lmc";
```

- Mongolian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/mn-cyrl";
```

- Marathi language

```javascript
import { hyphenate } from "hyphen/mr";
```

- Multiple languages using the Ethiopic scripts

```javascript
import { hyphenate } from "hyphen/mul-ethi";
```

- Norwegian Bokmål, bokmål, norsk bokmål language

```javascript
import { hyphenate } from "hyphen/nb";
```

- Dutch language

```javascript
import { hyphenate } from "hyphen/nl";
```

- Norwegian Nynorsk, nynorsk language

```javascript
import { hyphenate } from "hyphen/nn";
```

- Norwegian, norsk language

```javascript
import { hyphenate } from "hyphen/no";
```

- Occitan language

```javascript
import { hyphenate } from "hyphen/oc";
```

- Odia, Oriya language

```javascript
import { hyphenate } from "hyphen/or";
```

- Panjabi, Punjabi language

```javascript
import { hyphenate } from "hyphen/pa";
```

- Pāli language

```javascript
import { hyphenate } from "hyphen/pi";
```

- Polish language

```javascript
import { hyphenate } from "hyphen/pl";
```

- Piedmontese language

```javascript
import { hyphenate } from "hyphen/pms";
```

- Portuguese language

```javascript
import { hyphenate } from "hyphen/pt";
```

- Romansh language

```javascript
import { hyphenate } from "hyphen/rm";
```

- Romanian language

```javascript
import { hyphenate } from "hyphen/ro";
```

- Russian language

```javascript
import { hyphenate } from "hyphen/ru";
```

- Sanskrit language

```javascript
import { hyphenate } from "hyphen/sa";
```

- Serbocroatian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/sh-cyrl";
```

- Serbocroatian, Latin script

```javascript
import { hyphenate } from "hyphen/sh-latn";
```

- Slovak language

```javascript
import { hyphenate } from "hyphen/sk";
```

- Slovenian language

```javascript
import { hyphenate } from "hyphen/sl";
```

- Serbian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/sr-cyrl";
```

- Swedish language

```javascript
import { hyphenate } from "hyphen/sv";
```

- Tamil language

```javascript
import { hyphenate } from "hyphen/ta";
```

- Telugu language

```javascript
import { hyphenate } from "hyphen/te";
```

- Thai language

```javascript
import { hyphenate } from "hyphen/th";
```

- Turkmen language

```javascript
import { hyphenate } from "hyphen/tk";
```

- Turkish language

```javascript
import { hyphenate } from "hyphen/tr";
```

- Ukrainian language

```javascript
import { hyphenate } from "hyphen/uk";
```

- Mandarin Chinese, pinyin transliteration

```javascript
import { hyphenate } from "hyphen/zh-latn-pinyin";
```

### Aliases for specific languages

- Alias for `hyphen/de-1996`

```javascript
import { hyphenate } from "hyphen/de";
```

- Alias for `hyphen/el-monoton`

```javascript
import { hyphenate } from "hyphen/el";
```

- Alias for `hyphen/en-us`

```javascript
import { hyphenate } from "hyphen/en";
```

- Alias for `hyphen/mul-ethi`

```javascript
import { hyphenate } from "hyphen/ethi";
```

- Alias for `hyphen/mn-cyrl`

```javascript
import { hyphenate } from "hyphen/mn";
```

- Alias for `hyphen/sh-cyrl`

```javascript
import { hyphenate } from "hyphen/sh";
```

- Alias for `hyphen/sr-cyrl`

```javascript
import { hyphenate } from "hyphen/sr";
```

- Alias for `hyphen/zh-latn-pinyin`

```javascript
import { hyphenate } from "hyphen/zh";
```

</details>

## Factory function

Factory function can be used to create `hyphenate` function with changed default options.

```javascript
import createHyphenator from "hyphen";
import patterns from "hyphen/patterns/en-us";

const hyphenate = createHyphenator(patterns, {
  // result in Promise
  async: true,
  // prevent HTML tags from hyphenation
  html: true,
  // minimum word length is 7
  minWordLength: 7
});
```

The following are predefined `hyphenate` functions.

```javascript
import createHyphenator from "hyphen";
import patterns from "hyphen/patterns/en-us";

const hyphenate = createHyphenator(patterns, { async: true });
const hyphenateHTML = createHyphenator(patterns, { async: true, html: true });
const hyphenateHTMLSync = createHyphenator(patterns, { html: true });
const hyphenateSync = createHyphenator(patterns);
```

Predefined `hyphenate` functions are set in every language pack.

## jsDelivr CDN for older websites

It is possible to use `hyphen` on older websites with [jsDelivr](https://www.jsdelivr.com/) network. Check the [package page](https://www.jsdelivr.com/package/npm/hyphen) on their website.

```html
<script src="https://cdn.jsdelivr.net/npm/hyphen/hyphen.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hyphen/patterns/en-us.min.js"></script>
```

After the script is added on your page, use `createHyphenator` to create a `hyphenate` function.

```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnUs);
```

## Alternatives

Check other great hyphenation libraries:

- [Hyphenopoly](https://mnater.github.io/Hyphenopoly/) does client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) A fast and small hyphenation engine.

## Text hyphenation in CSS

The CSS `hyphens` property is intended to add hyphenation support to modern browsers without Javascript:

```css
p {
  hyphens: auto;
}
```

It is part of the [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphens-property) specification. The browser compatibility list can be found on the [related MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).
