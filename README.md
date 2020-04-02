![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

# hyphen

This is a hyphenation library, based on Franklin M. Liang's [hyphenation algorithm](https://tug.org/docs/liang/ "Frank Liang wrote his Stanford Ph.D. thesis on a hyphenation algorithm that is standard in TeX, and has been adapted to numerous languages."). In core of the algorithm lies a set of hyphenation patterns. They are extracted from hand-hyphenated dictionaries. Patterns for this library were taken from [ctan.org](https://ctan.org/ "The Comprehensive TEX Archive Network (CTAN) is the central place for all kinds of material around TEX.") and ported to Javascript.

```javascript
import { hyphenate } from "hyphen/en";

hyphenate("A certain king had a beautiful garden").then(result => {
  // A cer[-]tain king had a beau[-]ti[-]ful garden
  // [-] is soft hyphen
});
```

Check a <a href="https://jsfiddle.net/ytiurin/ctwwwL0f/" target="_blank">demo</a>

## Install

```
npm install hyphen
```

or

```
yarn add hyphen
```

## Usage

```javascript
import {
  hyphenate,
  hyphenateHTML,
  hyphenateHTMLSync,
  hyphenateSync
} from "hyphen/en";

hyphenate("Plain text - hyphenate everything").then(result => {
  // Plain text - hy[-]phen[-]ate every[-]thing
});

hyphenateHTML("<blockquote>HTML tags are NOT hyphenated</blockquote>").then(
  result => {
    // <blockquote>HTML tags are NOT hy[-]phen[-]at[-]ed</blockquote>
  }
);

hyphenateHTMLSync("<blockquote>Sync version of `hyphenateHTML`</blockquote>");
// <blockquote>Sync ver[-]sion of `hy[-]phen[-]ate[-]HTML`</blockquote>

hyphenateSync("Sync version of `hyphenate`");
// Sync ver[-]sion of `hy[-]phen[-]ate`
```

## Options

```javascript
hyphenate("Options", { debug: true, hyphenChar: "%" });
// Op%tions
```

- **debug**

  A `Boolean` indicating, if script should output debug info to console. Default is `false`.

- **hyphenChar**

  A `String` sets a value of the soft hyphen character. Default value is `\u00AD`.

## Patterns available for these languages

Afrikaans, Ancient Greek, Armenian, Assamese, Bahasa Indonesia, Basque, Bengali, Bulgarian, Catalan, Chinese, Slavonic, Latin, Coptic, Croatian, Czech, Danish, Dutch, English, Estonian, Ethiopic, Finnish, French, Friulan, Galician, Georgian, German, Greek, Gujarati, Hindi, Hungarian, Icelandic, Interlingua, Irish, Italian, Kannada, Kurmanji, Latin, Latvian, Lithuanian, Malayalam, Marathi, Mongolian, Norwegian, Occitan, Oriy, Pāli, Panjabi, Piedmontese, Polish, Portuguese, Romanian, Romansh, Russian, Sanskrit and Prakrit, Serbian, Serbocroatian, Slovak, Slovenian, Spanish, Swedish, Swiss-German, Tamil, Telugu, Thai, Turkish, Turkmen, Ukrainian, Upper Sorbian, Welsh

## Hyphenation in CSS

The CSS `hyphens` property is intended to add hyphenation support to modern browsers without Javascript:

```css
p {
  hyphens: auto;
}
```

It is part of the [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphens-property) specification. The browser compatibility list can be found on the [related MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).

## Alternatives

Check other great hyphenation libraries:

- [Hyphenator.js](http://mnater.github.io/Hyphenator/) does client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) A fast and small hyphenation engine.

## License

ISC
