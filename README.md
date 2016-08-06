hyphen
========

This is an implementation of Franklin M. Liang's hyphenation algorithm in Javascript. It relies on fast programming technics to reduce execution time. The accuracy of hyphenation results depends on the quality of predefined patterns collections, that are different for every language. This implementation uses patterns collections from TeX website http://www.ctan.org/.

```javascript
var hyphenate = createHyphenator(hyphenationPatternsEnGb);

hyphenatedText = hyphenate(initialText);
```
