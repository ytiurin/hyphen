import { hyphenateHTML } from "../../package/en";

import html from "./sample-book.html";

export default {
  title: "Async mode"
};

export const PreventUIBlock = () => {
  const main = document.createElement("main");
  Object.assign(main.style, { maxWidth: "540px" });

  const indicator = document.createElement("span"),
    indicatorText = document.createTextNode("");
  indicator.appendChild(document.createTextNode("Processing"));
  indicator.appendChild(indicatorText);
  main.appendChild(indicator);

  hyphenateHTML(html).then(html => {
    main.innerHTML = `<i>Animation frames requested: ${frames}</i>`;
    main.innerHTML += html;
    cancelAnimationFrame(afid);
  });

  var afid = requestAnimationFrame(function nextTick() {
      indicatorText.nodeValue = ".".repeat(frames++ % 4);
      afid = requestAnimationFrame(nextTick);
    }),
    frames = 0;

  return main;
};

PreventUIBlock.story = { name: "Prevent UI blocking" };
