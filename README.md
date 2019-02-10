[![npm](https://img.shields.io/npm/v/hyphen.svg?maxAge=2592000)](https://www.npmjs.com/package/hyphen)

hy-phen
========

![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

This is a JavaScript implementation of Franklin M. Liang's hyphenation algorithm. It relies on fast programming techniques to reduce execution time. The accuracy of hyphenation results depend on the quality of predefined patterns collections, that are different for every language. This implementation uses patterns collections from the TeX website, http://www.ctan.org/.

```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb);

var initialText = "A certain king had a beautiful garden"
var hyphenatedText = hyphenate(initialText);
// A cer-tain king had a beau-ti-ful garden
```

### Demo
<a href="https://jsfiddle.net/ytiurin/ctwwwL0f/" target="_blank">JSFiddle</a>


### Algorithm description
<a href="https://tug.org/docs/liang/liang-thesis.pdf" target="_blank">PDF Document</a>


### Install
```
npm install hyphen
```
or
```
bower install hyphe
```


### Configuration

There are a couple of settings you can use to configure hyphenator function:

- To change the default soft hyphen `\u00AD` character to something else, use `hyphenChar: "-"`
```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb, {hyphenChar:'-'})
```

- To enable the console output of the hyphenation process, use `debug: true`
```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb, {debug:true})
```


### Supported languages
- Afrikaans
- Ancient Greek
- Armenian
- Assamese
- Bahasa Indonesia
- Basque
- Bengali
- Bulgarian
- Catalan
- Chinese pinyin syllables
- Church Slavonic
- Classical Latin
- Coptic
- Croatian
- Czech
- Danish
- Dutch
- English (GB)
- English (US)
- Estonian
- Ethiopic
- Finnish
- French
- Friulan
- Galician
- Georgian
- German
- Gujarati
- Hindi
- Hungarian
- Icelandic Plain
- Interlingua
- Irish
- Italian
- Kannada
- Kurmanji
- Latin
- Latvian
- Lithuanian
- Liturgical Latin
- Malayalam
- Marathi
- Modern Monotonic
- Modern Polytonic
- Mongolian
- Norwegian
- Norwegian Bokmal
- Norwegian Nynorsk
- Occitan
- Oriy
- Pāli
- Panjabi
- Piedmontese
- Polish
- Portuguese
- Romanian
- Romansh
- Russian
- Sanskrit and Prakrit
- Serbian Cyrillic
- Serbocroatian Cyrillic
- Serbocroatian Latin
- Slovak
- Slovenian
- Spanish
- Swedish
- Swiss-German
- Tamil
- Telugu
- Thai
- Turkish
- Turkmen
- Ukrainian
- Upper Sorbian
- Welsh


### Hyphenation in CSS
The CSS `hyphens` property is intended to add hyphenation support to modern browsers without Javascript:
```css
p {
  hyphens: auto;
}
```
It is part of the [CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphens-property) specification. The browser compatibility list can be found on the [related MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens).

### Alternatives
Check out other well-known Javascript hyphenation algorithm implementations:

- [Hyphenator.js](http://mnater.github.io/Hyphenator/) Javascript that implements client-side hyphenation of HTML-Documents.
- [Hypher](https://github.com/bramstein/hypher) A fast and small JavaScript hyphenation engine.

### License
MIT
