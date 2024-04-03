import AccessibilityIcon from "src/lib/assets/svg/fluent_accessibility-16-regular.svg";
import HtmlIcon from "src/lib/assets/svg/fluent_code-16-regular.svg";
import JsIcon from "src/lib/assets/svg/fluent_javascript-16-regular.svg";
import CssIcon from "src/lib/assets/svg/fluent_paint-brush-16-regular.svg";

export const pageInfo: Record<string, any> = {
  "/quiz/html": { title: "HTML", bg: "color8 bg-opacity-10", icon: HtmlIcon },
  "/quiz/css": { title: "CSS", bg: "color9 bg-opacity-10", icon: CssIcon },
  "/quiz/Javascript": {
    title: "Javascript",
    bg: "color5 bg-opacity-20",
    icon: JsIcon,
  },
  "/quiz/Accessibility": {
    title: "Accessibility",
    bg: "color1 bg-opacity-10",
    icon: AccessibilityIcon,
  },
};
