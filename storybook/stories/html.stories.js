import { hyphenateSync, hyphenateHTMLSync } from "../../package/en";
import "./html.css";

export default {
  title: "hyphen/HTML hyphenation"
};

export const PreventHTML = () => `
  <main>
    <p>[•] - soft hyphen</p>
    <i>The text below is a hyphenated HTML string:</i>
    ${hyphenateHTMLSync(
      `<blockquote class="decorated" cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
  <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>`,
      { hyphenChar: "•" }
    )}
  </main>`;

PreventHTML.storyName = "Prevent HTML-related code from hyphenation";
