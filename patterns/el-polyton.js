(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsElPolyton = factory();
  }
})(this, function () {
  var patterns =
    '{"α":[{"ι":[{},[0,2]],"ί":[{},[0,2]],"ί":[{},[0,2]],"ὶ":[{},[0,2]],"ῖ":[{},[0,2]],"ἰ":[{},[0,2]],"ἴ":[{},[0,2]],"ἲ":[{},[0,2]],"ἶ":[{},[0,2]],"ἱ":[{},[0,2]],"ἵ":[{},[0,2]],"ἳ":[{},[0,2]],"ἷ":[{},[0,2]],"υ":[{},[0,2]],"ύ":[{},[0,2]],"ύ":[{},[0,2]],"ὺ":[{},[0,2]],"ῦ":[{},[0,2]],"ὐ":[{},[0,2]],"ὔ":[{},[0,2]],"ὒ":[{},[0,2]],"ὖ":[{},[0,2]],"ὑ":[{},[0,2]],"ὕ":[{},[0,2]],"ὓ":[{},[0,2]],"ὗ":[{},[0,2]],"η":[{},[0,2]],"ϊ":[{},[0,2]],"ϋ":[{},[0,2]]},[0,1]],"ε":[{"ι":[{},[0,2]],"ί":[{},[0,2]],"ί":[{},[0,2]],"ὶ":[{},[0,2]],"ῖ":[{},[0,2]],"ἰ":[{},[0,2]],"ἴ":[{},[0,2]],"ἲ":[{},[0,2]],"ἶ":[{},[0,2]],"ἱ":[{},[0,2]],"ἵ":[{},[0,2]],"ἳ":[{},[0,2]],"ἷ":[{},[0,2]],"υ":[{},[0,2]],"ύ":[{},[0,2]],"ύ":[{},[0,2]],"ὺ":[{},[0,2]],"ῦ":[{},[0,2]],"ὐ":[{},[0,2]],"ὔ":[{},[0,2]],"ὒ":[{},[0,2]],"ὖ":[{},[0,2]],"ὑ":[{},[0,2]],"ὕ":[{},[0,2]],"ὓ":[{},[0,2]],"ὗ":[{},[0,2]],"η":[{},[0,2]],"ϊ":[{},[0,2]],"ϋ":[{},[0,2]]},[0,1]],"η":[{"υ":[{},[0,2]],"ύ":[{},[0,2]],"ύ":[{},[0,2]],"ὺ":[{},[0,2]],"ῦ":[{},[0,2]],"ὐ":[{},[0,2]],"ὔ":[{},[0,2]],"ὒ":[{},[0,2]],"ὖ":[{},[0,2]],"ὑ":[{},[0,2]],"ὕ":[{},[0,2]],"ὓ":[{},[0,2]],"ὗ":[{},[0,2]],"α":[{},[0,2]],"ά":[{},[0,2]],"ά":[{},[0,2]],"ὰ":[{},[0,2]],"ᾶ":[{},[0,2]],"ε":[{},[0,2]],"έ":[{},[0,2]],"έ":[{},[0,2]],"ὲ":[{},[0,2]],"ο":[{},[0,2]],"ό":[{},[0,2]],"ό":[{},[0,2]],"ὸ":[{},[0,2]],"ω":[{},[0,2]],"ώ":[{},[0,2]],"ώ":[{},[0,2]],"ὼ":[{},[0,2]],"ῶ":[{},[0,2]]},[0,1]],"ι":[{"α":[{},[0,2]],"ά":[{},[0,2]],"ά":[{},[0,2]],"ὰ":[{},[0,2]],"ᾶ":[{},[0,2]],"ε":[{},[0,2]],"έ":[{},[0,2]],"έ":[{},[0,2]],"ὲ":[{},[0,2]],"ο":[{},[0,2]],"ό":[{},[0,2]],"ό":[{},[0,2]],"ὸ":[{},[0,2]],"ω":[{},[0,2]],"ώ":[{},[0,2]],"ώ":[{},[0,2]],"ὼ":[{},[0,2]],"ῶ":[{},[0,2]]},[0,1]],"ο":[{"ι":[{},[0,2]],"ί":[{},[0,2]],"ί":[{},[0,2]],"ὶ":[{},[0,2]],"ῖ":[{},[0,2]],"ἰ":[{},[0,2]],"ἴ":[{},[0,2]],"ἲ":[{},[0,2]],"ἶ":[{},[0,2]],"ἱ":[{},[0,2]],"ἵ":[{},[0,2]],"ἳ":[{},[0,2]],"ἷ":[{},[0,2]],"υ":[{},[0,2]],"ύ":[{},[0,2]],"ύ":[{},[0,2]],"ὺ":[{},[0,2]],"ῦ":[{},[0,2]],"ὐ":[{},[0,2]],"ὔ":[{},[0,2]],"ὒ":[{},[0,2]],"ὖ":[{},[0,2]],"ὑ":[{},[0,2]],"ὕ":[{},[0,2]],"ὓ":[{},[0,2]],"ὗ":[{},[0,2]],"ϊ":[{"ό":[{},[0,3,3]],"ό":[{},[0,3,3]],"ὸ":[{},[0,3,3]]},[0,2]]},[0,1]],"υ":[{"ι":[{},[0,2]],"ί":[{},[0,2]],"ί":[{},[0,2]],"ὶ":[{},[0,2]],"ῖ":[{},[0,2]],"ἰ":[{},[0,2]],"ἴ":[{},[0,2]],"ἲ":[{},[0,2]],"ἶ":[{},[0,2]],"ἱ":[{},[0,2]],"ἵ":[{},[0,2]],"ἳ":[{},[0,2]],"ἷ":[{},[0,2]],"α":[{},[0,2]],"ά":[{},[0,2]],"ά":[{},[0,2]],"ὰ":[{},[0,2]],"ᾶ":[{},[0,2]],"ε":[{},[0,2]],"έ":[{},[0,2]],"έ":[{},[0,2]],"ὲ":[{},[0,2]],"ο":[{},[0,2]],"ό":[{},[0,2]],"ό":[{},[0,2]],"ὸ":[{},[0,2]],"ω":[{},[0,2]],"ώ":[{},[0,2]],"ώ":[{},[0,2]],"ὼ":[{},[0,2]],"ῶ":[{},[0,2]]},[0,1]],"ω":[{"ι":[{},[0,2]]},[0,1]],"ϊ":[{},[0,1]],"ϋ":[{},[0,1]],"ἀ":[{"λ":[{"α":[{"μ":[{"π":[{"ο":[{"υ":[{},[0,0,0,5,2]]}]}]}]}]}],"μ":[{"π":[{"ά":[{"κ":[{},[0,5,2]],"ρ":[{"ι":[{},[0,6,3]]},[0,5,2]]}],"ά":[{"κ":[{},[0,5,2]],"ρ":[{"ι":[{},[0,6,3]]},[0,5,2]]}],"α":[{"ν":[{},[0,5,2]],"ρ":[{"ι":[{},[0,6,3]]},[0,5,2]]}],"ᾶ":[{"ρ":[{},[0,5,2]]}],"ρ":[{},[0,5,2]]}]}],"ρ":[{"α":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"λ":[{"ο":[{"ύ":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}],"ύ":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}],"ῦ":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}],"υ":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}]}]}]}],"ν":[{"τ":[{"ά":[{"τ":[{"ζ":[{},[0,5,2]]}]}],"ά":[{"τ":[{"ζ":[{},[0,5,2]]}]}]}]}],"τ":[{"ρ":[{"α":[{"ν":[{"τ":[{"έ":[{},[0,0,0,0,5,2]],"έ":[{},[0,0,0,0,5,2]],"ὲ":[{},[0,0,0,0,5,2]]}]}]}]}]}]},[0,1]],"ἁ":[{},[0,1]],"ἂ":[{},[0,1]],"ἃ":[{},[0,1]],"ἄ":[{"μ":[{"α":[{"κ":[{},[0,5,2]]}]}]},[0,1]],"ἅ":[{},[0,1]],"ἆ":[{},[0,1]],"ἇ":[{},[0,1]],"ἐ":[{"μ":[{"ι":[{"γ":[{"κ":[{"ρ":[{},[0,0,0,5,2]]}]}]}]}]},[0,1]],"ἑ":[{},[0,1]],"ἒ":[{},[0,1]],"ἓ":[{},[0,1]],"ἔ":[{},[0,1]],"ἕ":[{},[0,1]],"ἠ":[{},[0,1]],"ἡ":[{},[0,1]],"ἢ":[{},[0,1]],"ἣ":[{},[0,1]],"ἤ":[{},[0,1]],"ἥ":[{},[0,1]],"ἦ":[{},[0,1]],"ἧ":[{},[0,1]],"ἰ":[{"γ":[{"κ":[{"ο":[{"υ":[{},[0,5,2]]}]}]}],"ν":[{"τ":[{"ρ":[{"ι":[{"γ":[{"κ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}],"μ":[{"π":[{"ρ":[{"α":[{},[0,5,2]]}]}]}]},[0,1]],"ἱ":[{},[0,1]],"ἲ":[{},[0,1]],"ἳ":[{},[0,1]],"ἴ":[{"ν":[{"τ":[{"ρ":[{"ι":[{"γ":[{"κ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}]},[0,1]],"ἵ":[{},[0,1]],"ἶ":[{},[0,1]],"ἷ":[{},[0,1]],"ὀ":[{"μ":[{"π":[{"ο":[{},[0,5,2]]}]}],"ν":[{"τ":[{"ά":[{},[0,5,2]],"ά":[{},[0,5,2]],"ὰ":[{},[0,5,2]],"ᾶ":[{},[0,5,2]]}]}]},[0,1]],"ὁ":[{},[0,1]],"ὂ":[{},[0,1]],"ὃ":[{},[0,1]],"ὄ":[{"μ":[{"π":[{"ο":[{},[0,5,2]]}]}]},[0,1]],"ὅ":[{},[0,1]],"ὐ":[{},[0,1]],"ὑ":[{},[0,1]],"ὒ":[{},[0,1]],"ὓ":[{},[0,1]],"ὔ":[{},[0,1]],"ὕ":[{},[0,1]],"ὖ":[{},[0,1]],"ὗ":[{},[0,1]],"ὠ":[{"ι":[{},[0,2]]},[0,1]],"ὡ":[{},[0,1]],"ὢ":[{},[0,1]],"ὣ":[{},[0,1]],"ὤ":[{},[0,1]],"ὥ":[{},[0,1]],"ὦ":[{},[0,1]],"ὧ":[{},[0,1]],"ὰ":[{},[0,1]],"ὲ":[{},[0,1]],"ὴ":[{},[0,1]],"ὶ":[{},[0,1]],"ὸ":[{},[0,1]],"ὺ":[{},[0,1]],"ὼ":[{},[0,1]],"ᾀ":[{},[0,1]],"ᾁ":[{},[0,1]],"ᾂ":[{},[0,1]],"ᾃ":[{},[0,1]],"ᾄ":[{},[0,1]],"ᾅ":[{},[0,1]],"ᾆ":[{},[0,1]],"ᾇ":[{},[0,1]],"ᾐ":[{},[0,1]],"ᾑ":[{},[0,1]],"ᾒ":[{},[0,1]],"ᾓ":[{},[0,1]],"ᾔ":[{},[0,1]],"ᾕ":[{},[0,1]],"ᾖ":[{},[0,1]],"ᾗ":[{},[0,1]],"ᾠ":[{},[0,1]],"ᾡ":[{},[0,1]],"ᾢ":[{},[0,1]],"ᾣ":[{},[0,1]],"ᾤ":[{},[0,1]],"ᾥ":[{},[0,1]],"ᾦ":[{},[0,1]],"ᾧ":[{},[0,1]],"ᾲ":[{},[0,1]],"ᾳ":[{},[0,1]],"ᾴ":[{},[0,1]],"ᾶ":[{},[0,1]],"ᾷ":[{},[0,1]],"ῂ":[{},[0,1]],"ῃ":[{"α":[{},[0,2]],"ά":[{},[0,2]],"ά":[{},[0,2]],"ὰ":[{},[0,2]],"ᾶ":[{},[0,2]],"ε":[{},[0,2]],"έ":[{},[0,2]],"έ":[{},[0,2]],"ὲ":[{},[0,2]],"ο":[{},[0,2]],"ό":[{},[0,2]],"ό":[{},[0,2]],"ὸ":[{},[0,2]],"ω":[{},[0,2]],"ώ":[{},[0,2]],"ώ":[{},[0,2]],"ὼ":[{},[0,2]],"ῶ":[{},[0,2]]},[0,1]],"ῄ":[{},[0,1]],"ῆ":[{},[0,1]],"ῇ":[{},[0,1]],"ῒ":[{},[0,1]],"ῖ":[{},[0,1]],"ῗ":[{},[0,1]],"ῢ":[{},[0,1]],"ῦ":[{},[0,1]],"ῧ":[{},[0,1]],"ῲ":[{},[0,1]],"ῳ":[{},[0,1]],"ῴ":[{},[0,1]],"ῶ":[{},[0,1]],"ῷ":[{},[0,1]],"ά":[{"ι":[{".":[{},[0,3]]},[0,2]],"ϊ":[{".":[{},[0,3]]},[0,2]],"υ":[{},[0,3]],"η":[{".":[{},[0,3]]}],"ϋ":[{},[0,3]]},[0,1]],"έ":[{"ι":[{},[0,2]],"ϊ":[{},[0,2]],"υ":[{},[0,3]],"η":[{},[0,2]]},[0,1]],"ή":[{},[0,1]],"ί":[{},[0,1]],"ό":[{"ι":[{".":[{},[0,3]]},[0,2]],"ϊ":[{".":[{},[0,3]]},[0,2]],"υ":[{},[0,3]],"ε":[{"ι":[{},[0,2]]}],"η":[{".":[{},[0,3]]},[0,2]]},[0,1]],"ύ":[{},[0,1]],"ώ":[{},[0,1]],"ΐ":[{},[0,1]],"ΰ":[{},[0,1]],"ά":[{"ι":[{".":[{},[0,3]]},[0,2]],"ϊ":[{".":[{},[0,3]]},[0,2]],"υ":[{},[0,3]],"η":[{".":[{},[0,3]]}],"ϋ":[{},[0,3]]},[0,1]],"έ":[{"ι":[{},[0,2]],"ϊ":[{},[0,2]],"υ":[{},[0,3]],"η":[{},[0,2]]},[0,1]],"ή":[{},[0,1]],"ί":[{},[0,1]],"ό":[{"ι":[{".":[{},[0,3]]},[0,2]],"ϊ":[{".":[{},[0,3]]},[0,2]],"υ":[{},[0,3]],"ε":[{"ι":[{},[0,2]]}],"η":[{".":[{},[0,3]]},[0,2]]},[0,1]],"ύ":[{},[0,1]],"ώ":[{},[0,1]],"ΐ":[{},[0,1]],"ΰ":[{},[0,1]],".":[{"ί":[{},[0,3]],"ί":[{},[0,3]],"ῖ":[{},[0,3]],"ἰ":[{},[0,3]],"ἱ":[{},[0,3]],"ή":[{},[0,3]],"ή":[{},[0,3]],"ῆ":[{},[0,3]],"ἠ":[{},[0,3]],"ἡ":[{},[0,3]],"ύ":[{},[0,3]],"ύ":[{},[0,3]],"ῦ":[{},[0,3]],"ὑ":[{},[0,3]],"β":[{"ό":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,5,2]]}]}]}]}],"ό":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,5,2]]}]}]}]}],"ο":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,5,2]]}]}]}]}],"ί":[{"ν":[{"τ":[{"ε":[{},[0,0,5,2]]}]}]}],"ί":[{"ν":[{"τ":[{"ε":[{},[0,0,5,2]]}]}]}],"ι":[{"ν":[{"τ":[{"ε":[{},[0,0,5,2]]}]}]}]},[0,6]],"γ":[{"ι":[{"ο":[{"υ":[{"γ":[{"κ":[{"ο":[{},[0,0,0,0,5,2]]}]}]}]}],"α":[{"ρ":[{"α":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}]}],"χ":[{"ο":[{"υ":[{"ν":[{"τ":[{},[0,0,0,0,0,0,5,2]]}]}]}]}]}],"β":[{"ε":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}]}],"ά":[{"μ":[{"π":[{"ι":[{},[0,0,5,2]]}]}]}],"ά":[{"μ":[{"π":[{"ι":[{},[0,0,5,2]]}]}]}],"α":[{"μ":[{"π":[{"ι":[{},[0,0,5,2]]}]}]}],"κ":[{"ά":[{"ι":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}],"ϊ":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}],"ά":[{"ι":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}],"ϊ":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}],"α":[{"ϊ":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}]}]},[0,6]],"δ":[{},[0,6]],"ζ":[{"ε":[{"ϊ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}]},[0,6]],"θ":[{},[0,6]],"κ":[{"α":[{"ρ":[{"α":[{"γ":[{"κ":[{"ι":[{},[0,0,0,0,5,2]]}]}],"μ":[{"π":[{"ό":[{"λ":[{},[0,0,0,0,6,3]]}],"ό":[{"λ":[{},[0,0,0,0,6,3]]}],"ο":[{"λ":[{},[0,0,0,0,6,3]]}]},[0,0,0,0,5,2]]}]}],"ν":[{"α":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}]}]}],"λ":[{"α":[{"μ":[{"π":[{"α":[{},[0,0,0,0,5,2]]}]}]}],"ί":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,5,2]]}]}]}],"ί":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,5,2]]}]}]}],"ι":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,5,2]]}]}]}]}],"μ":[{"π":[{"ά":[{"δ":[{},[0,0,5,2]]}],"ά":[{"δ":[{},[0,0,5,2]]}],"α":[{"ρ":[{"έ":[{},[0,0,5,2]],"έ":[{},[0,0,5,2]],"ὲ":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]]}]}],"ί":[{"ν":[{},[0,0,5,2]]}],"ί":[{"ν":[{},[0,0,5,2]]}],"ῖ":[{"ν":[{},[0,0,5,2]]}],"ι":[{"ν":[{},[0,0,5,2]]}],"ό":[{"τ":[{},[0,0,5,2]]}],"ό":[{"τ":[{},[0,0,5,2]]}],"ο":[{"τ":[{},[0,0,5,2]]}]}]}],"ο":[{"υ":[{"μ":[{"π":[{},[0,0,0,0,5,2]]}]}]}],"ν":[{"τ":[{"α":[{"ΐ":[{},[0,0,5,2]],"ΐ":[{},[0,0,5,2]],"ϊ":[{},[0,0,5,2]]}],"ρ":[{},[0,0,5,2]]}]}]}],"ά":[{"μ":[{"π":[{"ο":[{"τ":[{},[0,0,5,2]]}]}]}]}],"ά":[{"μ":[{"π":[{"ο":[{"τ":[{},[0,0,5,2]]}]}]}]}],"ε":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"ο":[{"λ":[{"ι":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,5,2]]}]}]}],"ο":[{"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"ῦ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"υ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}],"μ":[{"π":[{"ρ":[{"έ":[{"σ":[{"σ":[{},[0,0,6,3]]}],"ϲ":[{"ϲ":[{},[0,0,6,3]]}]}],"έ":[{"σ":[{"σ":[{},[0,0,6,3]]}],"ϲ":[{"ϲ":[{},[0,0,6,3]]}]}],"ε":[{"σ":[{"σ":[{},[0,0,6,3]]}],"ϲ":[{"ϲ":[{},[0,0,6,3]]}]}]},[0,0,5,2]]}]}],"ν":[{"τ":[{"ρ":[{"α":[{"μ":[{"π":[{},[0,0,0,0,0,0,5,2]]}]}]}]}]}],"υ":[{"λ":[{"ο":[{"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,0,5,2]]}]}]}],"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,0,5,2]]}]}]}],"ῦ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,0,5,2]]}]}]}],"υ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,0,5,2]]}]}]}]}]}],"μ":[{"π":[{"ο":[{"ύ":[{},[0,0,0,5,2]],"ύ":[{},[0,0,0,5,2]],"ῦ":[{},[0,0,0,5,2]],"υ":[{},[0,0,0,5,2]]}]}]}]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"ω":[{"λ":[{"ο":[{"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"ύ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"ῦ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}],"υ":[{"μ":[{"π":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}]}]},[0,6]],"λ":[{"ι":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}],"κ":[{"β":[{"ι":[{"ν":[{"τ":[{"α":[{"ρ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}]}]}],"ό":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"ό":[{"μ":[{"π":[{},[0,0,5,2]]}]}]},[0,6]],"μ":[{"α":[{"γ":[{"κ":[{"ι":[{"ό":[{},[0,0,5,2]],"ό":[{},[0,0,5,2]]}]}]}],"ν":[{"ι":[{"τ":[{"ό":[{"μ":[{"π":[{},[0,0,0,0,0,0,5,2]]}]}],"ό":[{"μ":[{"π":[{},[0,0,0,0,0,0,5,2]]}]}]}]}],"τ":[{"ά":[{"μ":[{},[0,0,5,2]]}],"ά":[{"μ":[{},[0,0,5,2]]}],"ὰ":[{"μ":[{},[0,0,5,2]]}],"α":[{"μ":[{},[0,0,5,2]]}],"έ":[{"μ":[{},[0,0,5,2]]}],"έ":[{"μ":[{},[0,0,5,2]]}],"ε":[{"μ":[{},[0,0,5,2]]}]}]}],"ϊ":[{"ν":[{"τ":[{},[0,0,0,5,2]]}]}]}],"π":[{"α":[{"γ":[{"κ":[{},[0,0,0,5,2]]}],"μ":[{"π":[{"ά":[{"κ":[{"ι":[{},[0,0,0,6,3]]}]}],"ά":[{"κ":[{"ι":[{},[0,0,0,6,3]]}]}],"α":[{"κ":[{"ι":[{},[0,0,0,6,3]]}]}]}]}],"σ":[{"κ":[{"ε":[{"τ":[{"μ":[{"π":[{},[0,0,0,0,0,0,2,5,2]]}]}]}]}],"ι":[{"μ":[{"π":[{"ο":[{"υ":[{"ζ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}]}],"ϲ":[{"κ":[{"ε":[{"τ":[{"μ":[{"π":[{},[0,0,0,0,0,0,2,5,2]]}]}]}]}],"ι":[{"μ":[{"π":[{"ο":[{"υ":[{"ζ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}]}],"λ":[{"ά":[{"ν":[{"τ":[{},[0,0,0,0,0,5,2]]}]}],"ά":[{"ν":[{"τ":[{},[0,0,0,0,0,5,2]]}]}],"α":[{"ν":[{"τ":[{},[0,0,0,0,0,5,2]]}]}]}],"ν":[{"τ":[{"α":[{"ν":[{},[0,0,0,5,2]]}]}]}]}],"ι":[{"γ":[{"κ":[{},[0,0,0,5,2]]}],"μ":[{"π":[{},[0,0,0,5,2]]}],"ν":[{"τ":[{},[0,0,0,5,2]]}]}],"ό":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,0,5,2]]}]}]}]}],"ό":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,0,5,2]]}]}]}]}],"ο":[{"μ":[{"π":[{"ι":[{"ρ":[{},[0,0,0,5,2]]}],"ό":[{"τ":[{},[0,0,0,5,2]]}],"ό":[{"τ":[{},[0,0,0,5,2]]}],"ο":[{"τ":[{},[0,0,0,5,2]]}]}]}],"υ":[{"μ":[{"π":[{"ο":[{"ύ":[{"ν":[{},[0,0,0,0,5,2]]}],"ύ":[{"ν":[{},[0,0,0,0,5,2]]}],"ῦ":[{"ν":[{},[0,0,0,0,5,2]]}],"υ":[{"ν":[{},[0,0,0,0,5,2]]}]}]}]}],"ν":[{"τ":[{"α":[{},[0,0,0,0,5,2]],"ρ":[{},[0,0,0,0,5,2]]}]}]}]}],"ε":[{"ν":[{"τ":[{},[0,0,0,5,2]]}]}]}],"ε":[{"ϊ":[{"ν":[{"τ":[{"ά":[{},[0,0,0,5,2]],"ά":[{},[0,0,0,5,2]],"α":[{},[0,0,0,5,2]]}]}]}]}],"ο":[{"ν":[{"τ":[{"έ":[{"λ":[{},[0,0,5,2]]}],"έ":[{"λ":[{},[0,0,5,2]]}],"ε":[{"λ":[{},[0,0,5,2]]}]}]}]}]},[0,6]],"ν":[{"τ":[{"ά":[{"γ":[{"κ":[{"λ":[{},[0,0,0,5,2]]}]}]}],"ά":[{"γ":[{"κ":[{"λ":[{},[0,0,0,5,2]]}]}]}],"α":[{"γ":[{"κ":[{"λ":[{},[0,0,0,5,2]]}]}],"ν":[{"τ":[{},[0,0,0,5,2]]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,0,5,2]]}]}]}],"ο":[{"μ":[{"π":[{"ρ":[{},[0,0,0,5,2]]}]}],"υ":[{"ν":[{"τ":[{"ο":[{"ύ":[{"κ":[{},[0,0,0,0,5,2]]}],"ύ":[{"κ":[{},[0,0,0,0,5,2]]}],"ῦ":[{"κ":[{},[0,0,0,0,5,2]]}],"υ":[{"κ":[{},[0,0,0,0,5,2]]}]}]}]}]}]}],"ε":[{"ρ":[{"μ":[{"π":[{"ε":[{"ν":[{"τ":[{},[0,0,0,0,0,0,0,5,2]]}]}]}]}]}]}]}],"ό":[{"μ":[{"π":[{"ε":[{"λ":[{},[0,0,5,2]]}]}]}]}],"ό":[{"μ":[{"π":[{"ε":[{"λ":[{},[0,0,5,2]]}]}]}]}],"ο":[{"μ":[{"π":[{"ε":[{"λ":[{},[0,0,5,2]]}]}]}]}],"ι":[{"σ":[{"α":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}],"ϲ":[{"α":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}]}]},[0,6]],"ξ":[{"ε":[{"γ":[{"κ":[{},[0,0,5,2]]}],"μ":[{"π":[{},[0,0,5,2]]}],"ν":[{"τ":[{},[0,0,5,2]]}]}],"έ":[{"γ":[{"κ":[{},[0,0,5,2]]}],"μ":[{"π":[{},[0,0,5,2]]}],"ν":[{"τ":[{},[0,0,5,2]]}]}],"έ":[{"γ":[{"κ":[{},[0,0,5,2]]}],"μ":[{"π":[{},[0,0,5,2]]}],"ν":[{"τ":[{},[0,0,5,2]]}]}]},[0,6]],"π":[{},[0,6]],"ρ":[{"ε":[{"μ":[{"π":[{},[0,0,5,2]]}],"π":[{"ο":[{"ύ":[{"μ":[{"π":[{"λ":[{},[0,0,0,0,0,5,2]]}]}]}],"ύ":[{"μ":[{"π":[{"λ":[{},[0,0,0,0,0,5,2]]}]}]}],"υ":[{"μ":[{"π":[{"λ":[{},[0,0,0,0,0,5,2]]}]}]}]}]}],"ζ":[{"ε":[{"ν":[{"τ":[{},[0,0,0,0,5,2]]}]}]}],"ν":[{"τ":[{"ί":[{},[0,0,5,2]],"ί":[{},[0,0,5,2]],"ι":[{},[0,0,5,2]]}]}]}],"έ":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"έ":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"ο":[{"μ":[{"π":[{},[0,0,5,2]]}],"υ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"ῦ":[{"ν":[{"τ":[{},[0,0,0,5,2]]}]}],"ύ":[{"ν":[{"τ":[{},[0,0,0,5,2]]}]}],"ύ":[{"ν":[{"τ":[{},[0,0,0,5,2]]}]}]}]},[0,6]],"σ":[{"α":[{"λ":[{"τ":[{"ι":[{"π":[{"ά":[{"γ":[{"κ":[{},[0,0,0,0,0,0,0,5,2]]}]}],"ά":[{"γ":[{"κ":[{},[0,0,0,0,0,0,0,5,2]]}]}]}]}]}]}],"μ":[{"π":[{"ο":[{"τ":[{},[0,0,2,5]]}]}]}]}],"ι":[{"γ":[{"κ":[{},[0,0,5,2]]}]}],"π":[{"ά":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"ά":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"α":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}]}],"έ":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"έ":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"κ":[{"α":[{"μ":[{"π":[{"α":[{"β":[{},[0,0,0,5,2]]}]}]}]}]}],"ν":[{"ο":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}],"ο":[{"ύ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"ύ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"υ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}],"ε":[{"ν":[{"τ":[{"έ":[{"φ":[{},[0,0,5,2]]}],"έ":[{"φ":[{},[0,0,5,2]]}],"ε":[{"φ":[{},[0,0,5,2]]}],"ο":[{"ῦ":[{},[0,0,5,2]],"ύ":[{},[0,0,5,2]],"ύ":[{},[0,0,5,2]],"υ":[{},[0,0,5,2]]}]}]}]}]},[0,6]],"ϲ":[{"α":[{"λ":[{"τ":[{"ι":[{"π":[{"ά":[{"γ":[{"κ":[{},[0,0,0,0,0,0,0,5,2]]}]}],"ά":[{"γ":[{"κ":[{},[0,0,0,0,0,0,0,5,2]]}]}]}]}]}]}],"μ":[{"π":[{"ο":[{"τ":[{},[0,0,2,5]]}]}]}]}],"ι":[{"γ":[{"κ":[{},[0,0,5,2]]}]}],"π":[{"ά":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"ά":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"α":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}]}],"έ":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"έ":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"κ":[{"α":[{"μ":[{"π":[{"α":[{"β":[{},[0,0,0,5,2]]}]}]}]}]}],"ν":[{"ο":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}],"ο":[{"ύ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"ύ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"υ":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}],"ε":[{"ν":[{"τ":[{"έ":[{"φ":[{},[0,0,5,2]]}],"έ":[{"φ":[{},[0,0,5,2]]}],"ε":[{"φ":[{},[0,0,5,2]]}],"ο":[{"ῦ":[{},[0,0,5,2]],"ύ":[{},[0,0,5,2]],"ύ":[{},[0,0,5,2]],"υ":[{},[0,0,5,2]]}]}]}]}]},[0,6]],"τ":[{"ρ":[{"ο":[{"μ":[{"π":[{},[0,0,0,6,3]]}]}],"ό":[{"μ":[{"π":[{},[0,0,0,6,3]]}]}],"ό":[{"μ":[{"π":[{},[0,0,0,6,3]]}]}],"α":[{"μ":[{"π":[{"ά":[{"λ":[{},[0,0,0,5,2]]}],"ά":[{"λ":[{},[0,0,0,5,2]]}],"α":[{"λ":[{},[0,0,0,5,2]]}],"ο":[{"ῦ":[{"κ":[{},[0,0,0,5,2]]}],"ύ":[{"κ":[{},[0,0,0,5,2]]}],"ύ":[{"κ":[{},[0,0,0,5,2]]}],"υ":[{"κ":[{},[0,0,0,5,2]]}]}]}]}]}]}],"α":[{"β":[{"λ":[{"α":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}]}]}],"μ":[{"π":[{"ε":[{"ρ":[{"α":[{"μ":[{},[0,0,6,3]]}]}]}],"ο":[{"ῦ":[{"ρ":[{"λ":[{},[0,0,6,3]]}]}],"ύ":[{"ρ":[{"λ":[{},[0,0,6,3]]}]}],"ύ":[{"ρ":[{"λ":[{},[0,0,6,3]]}]}]}]},[0,0,5,2]]}]}],"ε":[{"μ":[{"π":[{"ε":[{"σ":[{},[0,0,5,2]],"ϲ":[{},[0,0,5,2]]}]}]}]}],"ζ":[{"ά":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"ά":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"α":[{"μ":[{"π":[{},[0,0,0,5,2]]}],"ν":[{"α":[{"μ":[{"π":[{},[0,0,0,0,0,5,2]]}]}]}]}],"ι":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}],"ο":[{"υ":[{"μ":[{"π":[{},[0,0,0,0,5,2]]}]}]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"ο":[{"μ":[{"π":[{"ρ":[{},[0,0,5,2]]}]}]}],"σ":[{"ά":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}]}],"ά":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}]}],"α":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}],"ν":[{"τ":[{"ί":[{},[0,0,0,5,2]],"ί":[{},[0,0,0,5,2]],"ι":[{},[0,0,0,5,2]]}]}]}],"ι":[{"μ":[{"π":[{"ο":[{"ύ":[{"κ":[{},[0,0,0,5,2]],"σ":[{},[0,0,0,5,2]]}],"ύ":[{"κ":[{},[0,0,0,5,2]],"σ":[{},[0,0,0,5,2]]}],"υ":[{"κ":[{},[0,0,0,5,2]],"σ":[{},[0,0,0,5,2]]}]}]}]}]}]}],"ϲ":[{"ά":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}]}],"ά":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}]}],"α":[{"μ":[{"π":[{"α":[{},[0,0,0,5,2]]}]}],"ν":[{"τ":[{"ί":[{},[0,0,0,5,2]],"ί":[{},[0,0,0,5,2]],"ι":[{},[0,0,0,5,2]]}]}]}],"ι":[{"μ":[{"π":[{"ο":[{"ύ":[{"κ":[{},[0,0,0,5,2]],"ϲ":[{},[0,0,0,5,2]]}],"ύ":[{"κ":[{},[0,0,0,5,2]],"ϲ":[{},[0,0,0,5,2]]}],"υ":[{"κ":[{},[0,0,0,5,2]],"ϲ":[{},[0,0,0,5,2]]}]}]}]}]}]}]},[0,6]],"φ":[{"ι":[{"ό":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"ό":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}],"ο":[{"γ":[{"κ":[{},[0,0,0,5,2]]}]}]}],"ά":[{"μ":[{"π":[{"ρ":[{"ι":[{"κ":[{},[0,0,5,2]]}]}]}]}]}],"ά":[{"μ":[{"π":[{"ρ":[{"ι":[{"κ":[{},[0,0,5,2]]}]}]}]}]}],"α":[{"μ":[{"π":[{"ρ":[{"ι":[{"κ":[{},[0,0,5,2]]}]}]}]}],"σ":[{"τ":[{"φ":[{"ο":[{"υ":[{"ν":[{"τ":[{},[0,0,0,0,0,0,0,5,2]]}]}]}]}]}]}],"ϲ":[{"τ":[{"φ":[{"ο":[{"υ":[{"ν":[{"τ":[{},[0,0,0,0,0,0,0,5,2]]}]}]}]}]}]}]}],"ρ":[{"α":[{"μ":[{"π":[{},[0,0,0,5,2]]}]}]}]},[0,6]],"χ":[{"ο":[{"ύ":[{"λ":[{"ι":[{"γ":[{"κ":[{},[0,0,0,0,0,5,2]]}]}]}]}],"ύ":[{"λ":[{"ι":[{"γ":[{"κ":[{},[0,0,0,0,0,5,2]]}]}]}]}],"υ":[{"λ":[{"ι":[{"γ":[{"κ":[{},[0,0,0,0,0,5,2]]}]}]}]}],"ν":[{"τ":[{"ρ":[{"ο":[{"μ":[{"π":[{"α":[{},[0,0,0,0,0,0,5,2]]}]}]}]}]}]}]}],"α":[{"μ":[{"π":[{},[0,0,5,2]]}],"ν":[{"τ":[{"ο":[{},[0,0,5,2]],"ρ":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"ό":[{"μ":[{"π":[{},[0,0,5,2]]}]}],"ά":[{"ν":[{"τ":[{"ρ":[{},[0,0,5,2]]}]}]}],"ά":[{"ν":[{"τ":[{"ρ":[{},[0,0,5,2]]}]}]}]},[0,6]],"ψ":[{},[0,6]]}],"β":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"β":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"μ":[{},[4,1]],"ν":[{"τ":[{},[0,5,2]]},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"γ":[{"κ":[{},[0,0,2]]}],"ρ":[{".":[{},[6]]}]}],"γ":[{".":[{},[6]],"κ":[{".":[{},[6]],"φ":[{},[4,5,2]],"ρ":[{"α":[{"ν":[{"τ":[{".":[{},[5,2]]}]}]}]}],"μ":[{"π":[{},[6,2,5,2]]}],"ν":[{"τ":[{},[6,2,5,2]]}],"τ":[{"ζ":[{},[6,2,1]],"σ":[{},[6,2,1]],"ϲ":[{},[6,2,1]]}]},[4,1]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"γ":[{},[4,1]],"β":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"μ":[{},[4,1]],"ξ":[{"τ":[{},[4,5,2]]},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"λ":[{".":[{},[6]]}]}],"δ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"δ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"λ":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]]}],"ζ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ζ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"λ":[{},[4,1]],"μ":[{"π":[{},[4,5,2]]},[4,1]],"ν":[{"τ":[{},[0,5,2]]},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]]}],"θ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"θ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"κ":[{},[4,1]],"μ":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]]}],"κ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"κ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{".":[{},[6]]},[4,1]],"ϲ":[{".":[{},[6]]},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"λ":[{".":[{},[6]]}],"τ":[{".":[{},[6]]}],"ς":[{".":[{},[6]]}]}],"λ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"λ":[{},[4,1]],"κ":[{"μ":[{},[4,5,2]]},[4,1]],"β":[{},[4,1]],"γ":[{"κ":[{},[4,5,2]]},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"μ":[{"π":[{},[4,5,2]]},[4,1]],"ν":[{"τ":[{},[0,5,2]]},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{".":[{},[6]]},[4,1]],"ϲ":[{".":[{},[6]]},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"ς":[{".":[{},[6]]}]}],"μ":[{".":[{},[6]],"π":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"α":[{"μ":[{"π":[{},[5,2,0,5,2]]}]}],"ά":[{"μ":[{"π":[{},[5,2,0,5,2]]}]}],"ά":[{"μ":[{"π":[{},[5,2,0,5,2]]}]}],"έ":[{"η":[{"ς":[{".":[{},[5,2]]}],"ϲ":[{".":[{},[5,2]]}],"σ":[{".":[{},[5,2]]}],".":[{},[5,2]],"δ":[{"ε":[{"ς":[{".":[{},[5,2]]}],"ϲ":[{".":[{},[5,2]]}],"σ":[{".":[{},[5,2]]}]}],"ω":[{"ν":[{".":[{},[5,2]]}]}]}]}],"μ":[{"π":[{},[5,2,0,5,2]]}]}],"έ":[{"η":[{"ς":[{".":[{},[5,2]]}],"ϲ":[{".":[{},[5,2]]}],"σ":[{".":[{},[5,2]]}],".":[{},[5,2]],"δ":[{"ε":[{"ς":[{".":[{},[5,2]]}],"ϲ":[{".":[{},[5,2]]}],"σ":[{".":[{},[5,2]]}]}],"ω":[{"ν":[{".":[{},[5,2]]}]}]}]}],"μ":[{"π":[{},[5,2,0,5,2]]}]}],"ε":[{"η":[{"ς":[{".":[{},[5,2]]}],"ϲ":[{".":[{},[5,2]]}],"σ":[{".":[{},[5,2]]}],".":[{},[5,2]]}],"μ":[{"π":[{},[5,2,0,5,2]]}]}],"ο":[{"γ":[{"ι":[{},[5,2]]}]}],"λ":[{".":[{},[6,2]]}],"ν":[{".":[{},[6,2]],"τ":[{},[6,2,5,2]]}],"ρ":[{".":[{},[6,2]]}],"τ":[{"ζ":[{},[6,2,1]],"σ":[{},[6,2,1]],"ϲ":[{},[6,2,1]]}]},[4,1]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"μ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"λ":[{},[4,1]],"ξ":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{".":[{},[6]]},[4,1]],"ϲ":[{".":[{},[6]]},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{"τ":[{},[4,5,2]]},[4,1]],"ν":[{"τ":[{},[0,0,2]]}],"ο":[{"ν":[{"τ":[{"έ":[{"ρ":[{"ν":[{},[0,0,5,2]]}]}],"έ":[{"ρ":[{"ν":[{},[0,0,5,2]]}]}],"ε":[{"ρ":[{"ν":[{},[0,0,5,2]]}]}]}]}]}],"ς":[{".":[{},[6]]}]}],"ν":[{".":[{},[6]],"τ":[{".":[{},[6]],"\'":[{},[6]],"’":[{},[6]],"᾿":[{},[6]],"ί":[{"β":[{"α":[{"ν":[{},[5,2]]}]}]}],"ί":[{"β":[{"α":[{"ν":[{},[5,2]]}]}]}],"μ":[{"π":[{},[6,2,5,2]]}]},[4,1]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ν":[{},[4,1]],"κ":[{"φ":[{},[4,5,2]]},[4,1]],"β":[{},[4,1]],"γ":[{"κ":[{},[4,5,2]]},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"λ":[{},[4,1]],"μ":[{"π":[{},[4,5,2]]},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{".":[{},[6]]},[4,1]],"ϲ":[{".":[{},[6]]},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"ς":[{".":[{},[6]]}]}],"ξ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"λ":[{},[4,1]],"μ":[{},[4,1]],"ν":[{},[4,1]],"π":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]]}],"π":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"π":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"μ":[{},[4,1]],"ξ":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]]}],"ρ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ρ":[{},[4,1]],"γ":[{"μ":[{},[4,5,2]],"κ":[{},[4,5,2]]},[4,1]],"θ":[{"μ":[{},[4,5,2]]},[4,1]],"κ":[{"μ":[{},[4,5,2]]},[4,1]],"ξ":[{"τ":[{},[4,5,2]]},[4,1]],"β":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"λ":[{},[4,1]],"μ":[{"π":[{},[4,5,2]]},[4,1]],"ν":[{"τ":[{},[0,5,2]]},[4,1]],"π":[{},[4,1]],"σ":[{".":[{},[6]]},[4,1]],"ϲ":[{".":[{},[6]]},[4,1]],"τ":[{},[4,1]],"φ":[{"ν":[{},[4,5,2]]},[4,1]],"χ":[{"μ":[{},[4,5,2]]},[4,1]],"ψ":[{},[4,1]],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ο":[{"μ":[{"π":[{"ῶ":[{},[0,0,5,2]],"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ς":[{".":[{},[6]]}]}],"σ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"σ":[{},[4,1]],"θ":[{"μ":[{},[0,0,2]]}],"δ":[{},[4,1]],"ζ":[{},[4,1]],"ν":[{"τ":[{},[0,0,2]]},[4,1]],"ξ":[{},[4,1]],"ρ":[{},[4,1]],"ψ":[{},[4,1]],"τ":[{"φ":[{},[0,0,2]],".":[{},[6]]}],"γ":[{"κ":[{},[0,0,2]]}],"μ":[{"π":[{},[0,0,2]]}],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ο":[{"μ":[{"π":[{"ῶ":[{},[0,0,5,2]],"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"κ":[{".":[{},[6]]}]}],"ϲ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ϲ":[{},[4,1]],"θ":[{"μ":[{},[0,0,2]]}],"δ":[{},[4,1]],"ζ":[{},[4,1]],"ν":[{"τ":[{},[0,0,2]]},[4,1]],"ξ":[{},[4,1]],"ρ":[{},[4,1]],"ψ":[{},[4,1]],"τ":[{"φ":[{},[0,0,2]],".":[{},[6]]}],"γ":[{"κ":[{},[0,0,2]]}],"μ":[{"π":[{},[0,0,2]]}],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ό":[{"μ":[{"π":[{"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"ο":[{"μ":[{"π":[{"ῶ":[{},[0,0,5,2]],"α":[{},[0,0,5,2]],"ε":[{},[0,0,5,2]],"ω":[{},[0,0,5,2]]}]}]}],"κ":[{".":[{},[6]]}]}],"ς":[{".":[{},[6]]}],"τ":[{".":[{},[6]],"ζ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"μ":[{},[0,0,2]]}],"σ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾽":[{},[6]],"γ":[{"κ":[{},[6,0,5,2]]}],"μ":[{"π":[{},[6,0,5,2]]}],"ν":[{"τ":[{},[6,0,5,2]]}]}],"ϲ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"γ":[{"κ":[{},[6,0,5,2]]}],"μ":[{"π":[{},[6,0,5,2]]}],"ν":[{"τ":[{},[6,0,5,2]]}]}],"ς":[{".":[{},[6]]}],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"τ":[{},[4,1]],"β":[{},[4,1]],"γ":[{"κ":[{},[4,5,2]]},[4,1]],"δ":[{},[4,1]],"θ":[{},[4,1]],"ν":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"λ":[{".":[{},[6]]}],"ρ":[{".":[{},[6]]}]}],"φ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"φ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"κ":[{},[4,1]],"ν":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"χ":[{},[4,1]],"ψ":[{},[4,1]],"τ":[{".":[{},[6]]}]}],"χ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"χ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"κ":[{},[4,1]],"μ":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"φ":[{},[4,1]],"ψ":[{},[4,1]],"τ":[{".":[{},[6]]}]}],"ψ":[{".":[{},[6]],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ψ":[{},[4,1]],"β":[{},[4,1]],"γ":[{},[4,1]],"δ":[{},[4,1]],"ζ":[{},[4,1]],"θ":[{},[4,1]],"κ":[{},[4,1]],"λ":[{},[4,1]],"μ":[{},[4,1]],"ν":[{},[4,1]],"ξ":[{},[4,1]],"π":[{},[4,1]],"ρ":[{},[4,1]],"σ":[{},[4,1]],"ϲ":[{},[4,1]],"τ":[{},[4,1]],"φ":[{},[4,1]],"χ":[{},[4,1]]}],"\'":[{},[6]],"ʼ":[{},[6]],"᾿":[{},[6]],"ῤ":[{"ῥ":[{},[4,1]]}]}';
  var hyphenation = [];

  return {
    patterns: patterns,
    exceptions: hyphenation
  };
});
