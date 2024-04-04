import ENJSON from "src/lib/assets/json/en.json";
import PTJSON from "src/lib/assets/json/pt.json";

export const getLanguage = () => {
  try {
    return localStorage.getItem("lang") || "en";
  } catch (err) {
    return "en";
  }
};

export const changeLanguage = (lang: string) => {
  try {
    localStorage.setItem("lang", lang);
    location.reload();
  } catch (err) {}
};

export const getText = (path: string) => {
  const lang = getLanguage();
  const ENText = ENJSON as Utils.TranslationFile;
  const PTText = PTJSON as Utils.TranslationFile;

  if (lang === "pt") return PTText[path] || "NO_TEXT";
  return ENText[path] || "NO_TEXT";
};
