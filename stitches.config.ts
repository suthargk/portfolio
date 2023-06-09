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
    xs: "(max-width: 430px)",
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
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
