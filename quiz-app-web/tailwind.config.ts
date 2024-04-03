import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color1: "#A729F5",
      color2: "#313E51",
      color3: "#3B4D66",
      color4: "#626C7F",
      color5: "#ABC1E1",
      color6: "#F4F6FA",
      color7: "#FFFFFF",
      color8: "#EE5454",
      color9: "#26D782",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
  safelist: [
    "border-color1",
    "border-color2",
    "border-color3",
    "border-color4",
    "border-color5",
    "border-color6",
    "border-color7",
    "border-color8",
    "border-color9",
    "bg-color1",
    "bg-color2",
    "bg-color3",
    "bg-color4",
    "bg-color5",
    "bg-color6",
    "bg-color7",
    "bg-color8",
    "bg-color9",
  ],
};
export default config;
