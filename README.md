![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

hyphen
======
This is a hyphenation library, based on Franklin M. Liang's [hyphenation algorithm](https://tug.org/docs/liang/ "Frank Liang wrote his Stanford Ph.D. thesis on a hyphenation algorithm that is standard in TeX, and has been adapted to numerous languages."). In core of the algorithm lies a set of hyphenation patterns. They are extracted from hand-hyphenated books and articles. Patterns for this library were taken from [ctan.org](https://ctan.org/ "The Comprehensive TEX Archive Network (CTAN) is the central place for all kinds of material around TEX.") and ported to Javascript.

```javascript
var text = "A certain king had a beautiful garden";

var hyphenate = createHyphenator(hyphenationPatternsEnGb);
var hyphenatedText = hyphenate(text);

console.log(hyphenatedText);
// A cer-tain king had a beau-ti-ful garden
```

Check the <a href="https://jsfiddle.net/ytiurin/ctwwwL0f/" target="_blank">demo</a>

Install
-------
```
npm install hyphen
```

Configuration
-------------
- To change the default soft hyphen `\u00AD` character to something else, use `hyphenChar: "-"`
```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb, {hyphenChar: '-'});
```

- To enable the console output of the hyphenation process, use `debug: true`
```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb, {debug: true});
```

- There is an Async Mode available, when it's enabled, the script will work only 10ms on every event loop iteration, until finish processing. This is needed to prevent script from blocking UI, when processing large texts.
```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb, {async: true});
hyphenate(text).then(function(hyphenatedText) {
  console.log(hyphenatedText)
});
```

Available patterns for these languages
--------------------------------
Afrikaans, Ancient Greek, Armenian, Assamese, Bahasa Indonesia, Basque, Bengali, Bulgarian, Catalan, Chinese pinyin syllables, Church Slavonic, Classical Latin, Coptic, Croatian, Czech, Danish, Dutch, English (GB), English (US), Estonian, Ethiopic, Finnish, French, Friulan, Galician, Georgian, German, Gujarati, Hindi, Hungarian, Icelandic Plain, Interlingua, Irish, Italian, Kannada, Kurmanji, Latin, Latvian, Lithuanian, Liturgical Latin, Malayalam, Marathi, Modern Monotonic, Modern Polytonic, Mongolian, Norwegian, Norwegian Bokmal, Norwegian Nynorsk, Occitan, Oriy, Pāli, Panjabi, Piedmontese, Polish, Portuguese, Romanian, Romansh, Russian, Sanskrit and Prakrit, Serbian Cyrillic, Serbocroatian Cyrillic, Serbocroatian Latin, Slovak, Slovenian, Spanish, Swedish, Swiss-German, Tamil, Telugu, Thai, Turkish, Turkmen, Ukrainian, Upper Sorbian, Welsh


Hyphenation in CSS
------------------
The CSS `hyphens` property is intended to add hyphenation support to modern browsers without Javascript:
```css
p {
  hyphens: auto;
}
```
It is part of the [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphens-property) specification. The browser compatibility list can be found on the [related MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).

Alternatives
------------
Check other great hyphenation libraries:

- [Hyphenator.js](http://mnater.github.io/Hyphenator/) does client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) A fast and small hyphenation engine.

License
-------
MIT
