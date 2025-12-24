![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

[![npm version](https://badge.fury.io/js/hyphen.svg)](https://badge.fury.io/js/hyphen)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

Processor will automaticly skip HTML tags hyphenation.

```javascript
import { hyphenate } from "hyphen/en";

(async () => {
  const text = "<blockquote>A certain king had a beautiful garden</blockquote>";

  const result = await hyphenate(text);
  // result is "<blockquote>A cer\u00ADtain king had a beau\u00ADti\u00ADful garden</blockquote>"
})();
```

## Select language

To hypehante text in any other supported language, just change the `import` source. For example for German language, import a hyphenation function from a `"hyphen/de"` source.

```javascript
import { hyphenate } from "hyphen/de";

(async () => {
  const text = "Ein gewisser König hatte einen wunderschönen Garten";

  const result = await hyphenate(text);
  // result is "Ein ge\u00ADwis\u00ADser Kö\u00ADnig hat\u00ADte einen wun\u00ADder\u00ADschö\u00ADnen Gar\u00ADten"
})();
```

## Multilingual hyphenation

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

Use a sync version when you need to write a synchronous code.

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

Install types definitions for Typescript usage.

```
npm install --save-dev @types/hyphen
```

Types definitions are created and maintained by [Krisztián Balla](https://github.com/krisztianb).

## Options

- **exceptions**

  An `Array` of values with exceptions of hyphenation in words. Hard hyphen symbol `-` should be used to mark the position of further configured hyphenation symbol. Default value is `[]`.

- **hyphenChar**

  A `String` sets a value of the soft hyphen character. Default value is `\u00AD`.

- **minWordLength**

  A `Number` sets the minimum length of the word, intended for hyphenation. Default value is `5`.

### Example of using options

```javascript
import { hyphenate } from "hyphen/en";

(async () => {
  const text = "A certain king had a beautiful garden";

  const result = await hyphenate(text, {
    hyphenChar: "-"
  });
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

- Albanian language

```javascript
import { hyphenate } from "hyphen/sq";
```

- Armenian language

```javascript
import { hyphenate } from "hyphen/hy";
```

- Assamese language

```javascript
import { hyphenate } from "hyphen/as";
```

- Basque language

```javascript
import { hyphenate } from "hyphen/eu";
```

- Belarusian language

```javascript
import { hyphenate } from "hyphen/be";
```

- Bengali language

```javascript
import { hyphenate } from "hyphen/bn";
```

- Bulgarian language

```javascript
import { hyphenate } from "hyphen/bg";
```

- Catalan language

```javascript
import { hyphenate } from "hyphen/ca";
```

- Coptic language

```javascript
import { hyphenate } from "hyphen/cop";
```

- Croatian language

```javascript
import { hyphenate } from "hyphen/hr";
```

- Czech language

```javascript
import { hyphenate } from "hyphen/cs";
```

- Danish language

```javascript
import { hyphenate } from "hyphen/da";
```

- Dutch language

```javascript
import { hyphenate } from "hyphen/nl";
```

- English, American spelling language

```javascript
import { hyphenate } from "hyphen/en-us";
```

- English, British spelling language

```javascript
import { hyphenate } from "hyphen/en-gb";
```

- Estonian language

```javascript
import { hyphenate } from "hyphen/et";
```

- Multiple languages using the Ethiopic scripts

```javascript
import { hyphenate } from "hyphen/mul-ethi";
```

- Finnish language

```javascript
import { hyphenate } from "hyphen/fi";
```

- Finnish language (school hyphenation)

```javascript
import { hyphenate } from "hyphen/fi-x-school";
```

- French language

```javascript
import { hyphenate } from "hyphen/fr";
```

- Friulan language

```javascript
import { hyphenate } from "hyphen/fur";
```

- Galician language

```javascript
import { hyphenate } from "hyphen/gl";
```

- Georgian language

```javascript
import { hyphenate } from "hyphen/ka";
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
import { hyphenate } from "hyphen/de-ch-1901";
```

- Modern Greek, monotonic spelling

```javascript
import { hyphenate } from "hyphen/el-monoton";
```

- Modern Greek, polytonic spelling

```javascript
import { hyphenate } from "hyphen/el-polyton";
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

- Hungarian language

```javascript
import { hyphenate } from "hyphen/hu";
```

- Icelandic language

```javascript
import { hyphenate } from "hyphen/is";
```

- Bahasa Indonesia, Indonesian language

```javascript
import { hyphenate } from "hyphen/id";
```

- Interlingua language

```javascript
import { hyphenate } from "hyphen/ia";
```

- Irish language

```javascript
import { hyphenate } from "hyphen/ga";
```

- Italian language

```javascript
import { hyphenate } from "hyphen/it";
```

- Kannada language

```javascript
import { hyphenate } from "hyphen/kn";
```

- Kurmanji, Northern Kurdish language

```javascript
import { hyphenate } from "hyphen/kmr";
```

- Latin language

```javascript
import { hyphenate } from "hyphen/la";
```

- Classical Latin language

```javascript
import { hyphenate } from "hyphen/la-x-classic";
```

- Liturgical Latin language

```javascript
import { hyphenate } from "hyphen/la-x-liturgic";
```

- Latvian language

```javascript
import { hyphenate } from "hyphen/lv";
```

- Lithuanian language

```javascript
import { hyphenate } from "hyphen/lt";
```

- Macedonian language

```javascript
import { hyphenate } from "hyphen/mk";
```

- Marathi language

```javascript
import { hyphenate } from "hyphen/mr";
```

- Malayalam language

```javascript
import { hyphenate } from "hyphen/ml";
```

- Mandarin Chinese, pinyin transliteration

```javascript
import { hyphenate } from "hyphen/zh-latn-pinyin";
```

- Mongolian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/mn-cyrl";
```

- Mongolian, Cyrillic script, alternative patterns

```javascript
import { hyphenate } from "hyphen/mn-cyrl-x-lmc";
```

- Norwegian, norsk language

```javascript
import { hyphenate } from "hyphen/no";
```

- Norwegian Bokmål, bokmål, norsk bokmål language

```javascript
import { hyphenate } from "hyphen/nb";
```

- Norwegian Nynorsk, nynorsk language

```javascript
import { hyphenate } from "hyphen/nn";
```

- Occitan language

```javascript
import { hyphenate } from "hyphen/oc";
```

- Odia, Oriya language

```javascript
import { hyphenate } from "hyphen/or";
```

- Pāli language

```javascript
import { hyphenate } from "hyphen/pi";
```

- Panjabi, Punjabi language

```javascript
import { hyphenate } from "hyphen/pa";
```

- Piedmontese language

```javascript
import { hyphenate } from "hyphen/pms";
```

- Polish language

```javascript
import { hyphenate } from "hyphen/pl";
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

- Serbian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/sr-cyrl";
```

- Serbocroatian, Cyrillic script

```javascript
import { hyphenate } from "hyphen/sh-cyrl";
```

- Serbocroatian, Latin script

```javascript
import { hyphenate } from "hyphen/sh-latn";
```

- Church Slavonic language

```javascript
import { hyphenate } from "hyphen/cu";
```

- Slovak language

```javascript
import { hyphenate } from "hyphen/sk";
```

- Slovenian language

```javascript
import { hyphenate } from "hyphen/sl";
```

- Upper Sorbian language

```javascript
import { hyphenate } from "hyphen/hsb";
```

- Spanish language

```javascript
import { hyphenate } from "hyphen/es";
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

- Turkish language

```javascript
import { hyphenate } from "hyphen/tr";
```

- Turkmen language

```javascript
import { hyphenate } from "hyphen/tk";
```

- Ukrainian language

```javascript
import { hyphenate } from "hyphen/uk";
```

- Welsh language

```javascript
import { hyphenate } from "hyphen/cy";
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

### Create hyphenation function with predefined exception list

```javascript
import createHyphenator from "hyphen";
import patterns from "hyphen/patterns/en-us";

const hyphenate = createHyphenator(patterns, {
  // result in Promise
  async: true,
  // exceptions of hyphenation
  exceptions: ["present", "ta-ble"]
});
```

### Predefined functions

The following are predefined `hyphenate` functions.

```javascript
import createHyphenator from "hyphen";
import patterns from "hyphen/patterns/en-us";

const hyphenate = createHyphenator(patterns, {
  async: true
});

const hyphenateSync = createHyphenator(patterns);
```

Predefined `hyphenate` functions are set in every language pack.

## jsDelivr CDN for older websites

It is possible to use `hyphen` on older websites with [jsDelivr](https://www.jsdelivr.com/) network. Check the [package page](https://www.jsdelivr.com/package/npm/hyphen) on their website.

```html
<script src="https://cdn.jsdelivr.net/npm/hyphen@1.13.0/patterns/en-us.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hyphen@1.13.0/hyphen.min.js"></script>
```

After the script is added on your page, use the `createHyphenator` to create a `hyphenate` function.

```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnUs, {
  async: true
});
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

## DEPRECATED

- Option `debug` was deprecated in version `1.13.0`;

## Migration

<details>
  <summary>from <strong>1.9.1</strong> to <strong>1.10.0</strong></summary>

Option `html` default value changed from `false` to `true`

In cases when text parser should not skip HTML tags, apply the following code changes.

Default exported `hyphenate` function

```javascript
// Code before 1.10.0
hyphenate(text);
```

```javascript
// Code after 1.10.0
hyphenate(text, { html: false });
```

Create `hyphenate` function with pre **1.10.0** behavior using a factory function:

```javascript
// Code after 1.10.0
const hyphenate = createHyphenator(patterns, {
  async: true,
  html: false
});

hyphenate(text);
```

</details>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/ytiurin"><img src="https://avatars.githubusercontent.com/u/1114034?v=4?s=160" width="160px;" alt="Eugene Tiurin"/><br /><sub><b>Eugene Tiurin</b></sub></a><br /><a href="#ideas-ytiurin" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ytiurin/hyphen/commits?author=ytiurin" title="Code">💻</a> <a href="#maintenance-ytiurin" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="20%"><a href="https://stackoverflow.com/users/434742/krisztian-balla"><img src="https://avatars.githubusercontent.com/u/4902918?v=4?s=160" width="160px;" alt="Krisztián Balla"/><br /><sub><b>Krisztián Balla</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/issues?q=author%3Akrisztianb" title="Bug reports">🐛</a> <a href="#mentoring-krisztianb" title="Mentoring">🧑‍🏫</a> <a href="#promotion-krisztianb" title="Promotion">📣</a></td>
      <td align="center" valign="top" width="20%"><a href="https://robin.millette.info/"><img src="https://avatars.githubusercontent.com/u/50741?v=4?s=160" width="160px;" alt="Robin Millette"/><br /><sub><b>Robin Millette</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=millette" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Amillette" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="20%"><a href="http://datakurre.pandala.org/"><img src="https://avatars.githubusercontent.com/u/160447?v=4?s=160" width="160px;" alt="Asko Soukka"/><br /><sub><b>Asko Soukka</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=datakurre" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Adatakurre" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/nicosierra"><img src="https://avatars.githubusercontent.com/u/1434298?v=4?s=160" width="160px;" alt="Nicolas Sierra"/><br /><sub><b>Nicolas Sierra</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=nicosierra" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Anicosierra" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="20%"><a href="https://github.com/jaumeortola"><img src="https://avatars.githubusercontent.com/u/4289501?v=4?s=160" width="160px;" alt="Jaume Ortolà"/><br /><sub><b>Jaume Ortolà</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=jaumeortola" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Ajaumeortola" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="20%"><a href="https://simons.page/"><img src="https://avatars.githubusercontent.com/u/4338202?v=4?s=160" width="160px;" alt="Simon Osterlehner"/><br /><sub><b>Simon Osterlehner</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=Simolation" title="Code">💻</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/jhwohlgemuth"><img src="https://avatars.githubusercontent.com/u/6383605?v=4?s=160" width="160px;" alt="Jason Wohlgemuth"/><br /><sub><b>Jason Wohlgemuth</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=jhwohlgemuth" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="20%"><a href="https://kamilmielnik.com/"><img src="https://avatars.githubusercontent.com/u/6830683?v=4?s=160" width="160px;" alt="Kamil Mielnik"/><br /><sub><b>Kamil Mielnik</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=kamilmielnik" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Akamilmielnik" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="20%"><a href="https://github.com/oskarkook"><img src="https://avatars.githubusercontent.com/u/9250552?v=4?s=160" width="160px;" alt="Oskar Köök"/><br /><sub><b>Oskar Köök</b></sub></a><br /><a href="https://github.com/ytiurin/hyphen/commits?author=oskarkook" title="Code">💻</a> <a href="https://github.com/ytiurin/hyphen/issues?q=author%3Aoskarkook" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="5">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
