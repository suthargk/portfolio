import {
  gray,
  blue,
  blueDark,
  indigo,
  indigoDark,
  grayDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const darkColors = {
  blueDark,
  indigoDark,
  grayDark,
};

let obj = {};
Object.values(darkColors).forEach((parentValues) => {
  Object.keys(parentValues).forEach((key, index) => {
    obj = {
      ...obj,
      [key.split(index + 1)[0] + "Dark" + (index + 1)]: parentValues[key],
    };
  });
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      display:
        "Wotfard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif",
      font2:
        "system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif",
    },
    colors: {
      ...gray,
      ...blue,
      ...indigo,
      ...obj,
    },
  },
  media: {
    xs: "(max-width: 430px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    "prefers-color-scheme:": "dark",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {},
  space: {},
  fonts: {},
});

const injectGlobalStyles = globalCss({
  "@font-face": {
    fontWeight: 400,
    fontStyle: "normal",
    fontFamily: "Wotfard",
    fontDisplay: "optional",
    src: "url('/assets/fonts/Wotfard-Medium.ttf') format('ttf')",
  },
  "*, *::after, *::before": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  html: {
    boxSizing: "border-box",
    backgroundColor: "$universal",
  },
  body: {
    // font-family here
    fontFamily: "$display",
    scrollBehavior: "smooth",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
  },
});

injectGlobalStyles();
