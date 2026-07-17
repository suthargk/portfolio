import {
  gray,
  blue,
  blueDark,
  indigo,
  indigoDark,
  grayDark,
  orange,
  violetDark,
} from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const darkColors = {
  blueDark,
  indigoDark,
  grayDark,
  violetDark,
};

let obj: Record<string, string> = {};
Object.values(darkColors).forEach((parentValues) => {
  const values = parentValues as Record<string, string>;
  Object.keys(values).forEach((key, index) => {
    obj = {
      ...obj,
      [key.split(String(index + 1))[0] + "Dark" + (index + 1)]: values[key],
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
      ...orange,
    },
  },
  media: {
    xs: "(max-width: 430px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
    "prefers-color-scheme:": "dark",
  },
  utils: {
    marginX: (value: string | number) => ({ marginLeft: value, marginRight: value }),
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
