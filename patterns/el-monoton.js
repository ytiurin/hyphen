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
    root.hyphenationPatternsElMonoton = factory();
  }
})(this, function () {
  return [
    "01,02,03,033,4,04,41,452,002,6,401",
    '{"α":[{"ι":1,"ί":1,"ί":1,"υ":1,"ύ":1,"ύ":1,"η":1,"ϊ":1,"ϋ":1},0],"ε":[{"ι":1,"ί":1,"ί":1,"υ":1,"ύ":1,"ύ":1,"ϊ":1,"ϋ":1},0],"η":[{"υ":1,"ύ":1,"ύ":1,"α":1,"ά":1,"ά":1,"ε":1,"έ":1,"έ":1,"ο":1,"ό":1,"ό":1,"ω":1,"ώ":1,"ώ":1},0],"ι":[{"α":1,"ά":1,"ά":1,"ε":1,"έ":1,"έ":1,"ο":1,"ό":1,"ό":1,"ω":1,"ώ":1,"ώ":1},0],"ο":[{"ι":1,"ί":1,"ί":1,"υ":1,"ύ":1,"ύ":1,"ε":{"ι":1},"η":1,"ϊ":[{"ό":3,"ό":3},1]},0],"υ":[{"ι":1,"ί":1,"ί":1,"α":1,"ά":1,"ά":1,"ο":1,"ό":1,"ό":1,"ω":1,"ώ":1,"ώ":1},0],"ω":0,"ϊ":0,"ϋ":0,"ά":[{"ι":[{".":2},1],"ϊ":1,"υ":2,"η":{".":2}},0],"έ":[{"ι":1,"ϊ":1,"υ":2},0],"ή":[{"υ":2},0],"ί":0,"ό":[{"ι":[{".":2},1],"ϊ":1,"υ":2,"η":{".":2}},0],"ύ":[{"ι":2},0],"ώ":0,"ΐ":0,"ΰ":0,"ά":{"ι":[{".":2},1],"ϊ":1,"υ":2,"η":{".":2}},"έ":{"ι":1,"ϊ":1,"υ":2},"ή":{"υ":2},"ό":{"ι":[{".":2},1],"ϊ":1,"υ":2,"η":{".":2}},"ύ":{"ι":2},".":{"ι":2,"ί":2,"ί":2,"η":2,"ή":2,"ή":2,"υ":2,"ύ":2,"ύ":2,"β":5,"γ":5,"δ":5,"ζ":5,"θ":5,"κ":5,"λ":5,"μ":5,"ν":5,"ξ":5,"π":5,"ρ":5,"σ":5,"ϲ":5,"τ":5,"φ":5,"χ":5,"ψ":5},"β":{".":4,"\'":4,"ʼ":4,"᾿":4,"β":6,"ζ":6,"θ":6,"κ":6,"μ":6,"ν":6,"ξ":6,"π":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6,"ρ":{".":4}},"γ":{".":4,"κ":{".":4,"φ":7,"τ":[{"ζ":10,"σ":10,"ϲ":10},6],"ς":{".":4},"ϲ":{".":4},"σ":{".":4},"μ":{"π":10},"ν":{"τ":10}},"\'":4,"ʼ":4,"᾿":4,"γ":6,"β":6,"ζ":6,"θ":6,"μ":6,"ξ":[{"τ":7},6],"π":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6,"λ":{".":4}},"δ":{".":4,"\'":4,"ʼ":4,"᾿":4,"δ":6,"β":6,"γ":6,"ζ":6,"θ":6,"κ":6,"λ":6,"ξ":6,"π":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6},"ζ":{".":4,"\'":4,"ʼ":4,"᾿":4,"ζ":6,"β":6,"γ":6,"δ":6,"θ":6,"κ":6,"λ":6,"μ":6,"ν":6,"ξ":6,"π":6,"ρ":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6},"θ":{".":4,"\'":4,"ʼ":4,"᾿":4,"θ":6,"β":6,"γ":6,"δ":6,"ζ":6,"κ":6,"μ":6,"ξ":6,"π":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6},"κ":{".":4,"\'":4,"ʼ":4,"᾿":4,"κ":6,"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"μ":6,"ξ":6,"π":6,"σ":[{".":4},6],"ϲ":[{".":9},6],"φ":6,"χ":6,"ψ":6,"λ":{".":4},"τ":{".":4},"ς":{".":9}},"λ":{".":4,"\'":4,"ʼ":4,"᾿":4,"λ":6,"κ":[{"μ":7},6],"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"μ":6,"ν":6,"ξ":6,"π":6,"ρ":6,"σ":[{".":4},6],"ϲ":[{".":4},6],"τ":6,"φ":6,"χ":6,"ψ":6,"ς":{".":4}},"μ":{".":4,"π":{".":4,"\'":4,"ʼ":4,"᾿":4,"τ":[{"ζ":10,"σ":10,"ϲ":10},6],"λ":{".":4},"ν":{".":4,"τ":10},"ρ":{".":4}},"\'":4,"ʼ":4,"᾿":4,"μ":6,"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"κ":6,"λ":6,"ξ":6,"ρ":6,"σ":[{".":4},6],"ϲ":[{".":4},6],"τ":6,"φ":6,"χ":6,"ψ":[{"τ":7},6],"ς":{".":4}},"ν":{".":4,"τ":{".":4,"\'":4,"’":4,"᾿":4,"ζ":6,"σ":[{".":4},6],"ϲ":[{".":4},6],"ς":{".":4},"μ":{"π":10}},"\'":4,"ʼ":4,"᾿":4,"ν":6,"κ":[{"φ":7},6],"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"λ":6,"μ":6,"ξ":6,"π":6,"ρ":6,"σ":[{".":4},6],"ϲ":[{".":4},6],"φ":6,"χ":6,"ψ":6,"ς":{".":4}},"ξ":{".":4,"\'":4,"ʼ":4,"᾿":4,"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"κ":6,"λ":6,"μ":6,"ν":6,"π":6,"ρ":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6,"ψ":6},"π":{".":4,"\'":4,"ʼ":4,"᾿":4,"π":6,"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"κ":6,"μ":6,"ξ":6,"σ":6,"ϲ":6,"φ":6,"χ":6,"ψ":6},"ρ":{".":4,"\'":4,"ʼ":4,"᾿":4,"ρ":6,"γ":[{"μ":7},6],"θ":[{"μ":7},6],"κ":[{"μ":7},6],"ξ":[{"τ":7},6],"β":6,"δ":6,"ζ":6,"λ":6,"μ":6,"ν":6,"π":6,"σ":[{".":4},6],"ϲ":[{".":4},6],"τ":6,"φ":[{"ν":7},6],"χ":[{"μ":7},6],"ψ":6,"ς":{".":4}},"σ":{".":4,"\'":4,"ʼ":4,"᾿":4,"σ":6,"θ":{"μ":8},"δ":6,"ζ":6,"ν":6,"ξ":6,"ρ":6,"ψ":6,"τ":{"φ":8,".":4},"κ":{".":4}},"ϲ":{".":4,"\'":4,"ʼ":4,"᾿":4,"ϲ":6,"θ":{"μ":8},"δ":6,"ζ":6,"ν":6,"ξ":6,"ρ":6,"ψ":6,"τ":{"φ":8,".":4},"κ":{".":4}},"ς":{".":4},"τ":{".":4,"ζ":{".":4,"\'":4,"ʼ":4,"᾿":4,"μ":8},"σ":{".":4,"\'":4,"ʼ":4,"᾽":4,"γ":{"κ":10},"μ":{"π":10},"ν":{"τ":10}},"ϲ":{".":4,"\'":4,"ʼ":4,"᾿":4,"γ":{"κ":10},"μ":{"π":10},"ν":{"τ":10}},"ς":{".":4},"\'":4,"ʼ":4,"᾿":4,"τ":6,"β":6,"γ":6,"δ":6,"θ":6,"κ":6,"ν":6,"ξ":6,"π":6,"φ":6,"χ":6,"ψ":6,"λ":{".":4},"ρ":{".":4}},"φ":{".":4,"\'":4,"ʼ":4,"᾿":4,"φ":6,"β":6,"γ":6,"δ":6,"ζ":6,"κ":6,"μ":6,"ν":6,"ξ":6,"π":6,"σ":6,"ϲ":6,"χ":6,"ψ":6,"τ":{".":4}},"χ":{".":4,"\'":4,"ʼ":4,"᾿":4,"χ":6,"β":6,"γ":6,"δ":6,"ζ":6,"κ":6,"μ":6,"ξ":6,"π":6,"σ":6,"ϲ":6,"φ":6,"ψ":6,"τ":{".":4}},"ψ":{".":4,"\'":4,"ʼ":4,"᾿":4,"ψ":6,"β":6,"γ":6,"δ":6,"ζ":6,"θ":6,"κ":6,"λ":6,"μ":6,"ν":6,"ξ":6,"π":6,"ρ":6,"σ":6,"ϲ":6,"τ":6,"φ":6,"χ":6},"\'":4,"ʼ":4,"᾿":4}',
    []
  ];
});
