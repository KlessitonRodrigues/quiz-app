import accessibilityIcon from "src/lib/assets/svg/fluent_accessibility-16-regular.svg";
import htmlIcon from "src/lib/assets/svg/fluent_code-16-regular.svg";
import jsIcon from "src/lib/assets/svg/fluent_javascript-16-regular.svg";
import cssIcon from "src/lib/assets/svg/fluent_paint-brush-16-regular.svg";

export const pageInfo: Record<string, any> = {
  "/quiz/html": { title: "HTML", bg: "color8 bg-opacity-10", icon: htmlIcon },
  "/quiz/css": { title: "CSS", bg: "color9 bg-opacity-10", icon: cssIcon },
  "/quiz/javascript": {
    title: "Javascript",
    bg: "color5 bg-opacity-20",
    icon: jsIcon,
  },
  "/quiz/accessibility": {
    title: "Accessibility",
    bg: "color1 bg-opacity-10",
    icon: accessibilityIcon,
  },
};
