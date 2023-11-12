import { hyphenateHTMLSync as hyphenateDe } from "../../package/de";
import { hyphenateHTMLSync as hyphenateEl } from "../../package/el";
import { hyphenateHTMLSync as hyphenateEn } from "../../package/en";
import { hyphenateHTMLSync as hyphenateFr } from "../../package/fr";
import { hyphenateHTMLSync as hyphenateIt } from "../../package/it";
import { hyphenateHTMLSync as hyphenateTr } from "../../package/tr";

import english from "./languages/english.html";
import french from "./languages/french.html";
import german from "./languages/german.html";
import greek from "./languages/greek.html";
import italian from "./languages/italian.html";
import turkish from "./languages/turkish.html";

import makeLanguageStory from "./make-language-story";

export default {
  title: "hyphen/Languages"
};

export const English = () => makeLanguageStory(hyphenateEn, english);
export const French = () => makeLanguageStory(hyphenateFr, french);
export const German = () => makeLanguageStory(hyphenateDe, german);
export const Greek = () => makeLanguageStory(hyphenateEl, greek);
export const Italian = () => makeLanguageStory(hyphenateIt, italian);
export const Turkish = () => makeLanguageStory(hyphenateTr, turkish);

English.storyName = "English";
French.storyName = "Français";
German.storyName = "Deutsch";
Greek.storyName = "Ελληνικά";
Italian.storyName = "Italiano";
Turkish.storyName = "Türkçe";
