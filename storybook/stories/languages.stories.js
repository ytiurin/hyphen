import { hyphenateHTMLSync as hyphenateDe } from "../../exports/de";
import { hyphenateHTMLSync as hyphenateEl } from "../../exports/el";
import { hyphenateHTMLSync as hyphenateEn } from "../../exports/en";
import { hyphenateHTMLSync as hyphenateFr } from "../../exports/fr";
import { hyphenateHTMLSync as hyphenateIt } from "../../exports/it";
import { hyphenateHTMLSync as hyphenateTr } from "../../exports/tr";

import english from "./languages/english.html";
import french from "./languages/french.html";
import german from "./languages/german.html";
import greek from "./languages/greek.html";
import italian from "./languages/italian.html";
import turkish from "./languages/turkish.html";

import makeLanguageStory from "./make-language-story";

export default {
  title: "Languages"
};

export const English = () => makeLanguageStory(hyphenateEn, english);
export const French = () => makeLanguageStory(hyphenateFr, french);
export const German = () => makeLanguageStory(hyphenateDe, german);
export const Greek = () => makeLanguageStory(hyphenateEl, greek);
export const Italian = () => makeLanguageStory(hyphenateIt, italian);
export const Turkish = () => makeLanguageStory(hyphenateTr, turkish);

English.story = { name: "English" };
French.story = { name: "Français" };
German.story = { name: "Deutsch" };
Greek.story = { name: "Ελληνικά" };
Italian.story = { name: "Italiano" };
Turkish.story = { name: "Türkçe" };
