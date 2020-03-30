export default (hyphenate, text) => `
  <main>
    <p>[•] - soft hyphen</p>
    <i>Open console to see processing output</i>
    ${hyphenate(text, { debug: true, hyphenChar: "•" })}
  </main>`;
