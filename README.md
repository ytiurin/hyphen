[![npm](https://img.shields.io/npm/v/hyphen.svg?maxAge=2592000)]()

hyphen
========

![Franklin M. Liang's hyphenation algorithm](https://ytiurin.github.io/hyphen/01.png)

This is an implementation of Franklin M. Liang's hyphenation algorithm in Javascript. It relies on fast programming technics to reduce execution time. The accuracy of hyphenation results depends on the quality of predefined patterns collections, that are different for every language. This implementation uses patterns collections from TeX website http://www.ctan.org/.

```javascript
var initialText = "A certain king had a beautiful garden"
var hyphenate = createHyphenator(hyphenationPatternsEnGb);

hyphenatedText = hyphenate(initialText);
// A cer-tain king had a beau-ti-ful garden
```

###Demo
<a href="https://jsfiddle.net/ytiurin/ctwwwL0f/" target="_blank">JSFiddle</a>


###Algorithm description
<a href="https://tug.org/docs/liang/liang-thesis.pdf" target="_blank">PDF Document</a>


###Install
```
npm install hyphen
```
or
```
bower install hyphe
```

###License
MIT
