import { gray, blue, indigo } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
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
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
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
