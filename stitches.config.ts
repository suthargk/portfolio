import { gray } from "@radix-ui/colors";
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
    colors: {
      ...gray,
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
  "*, *::after, *::before": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
});

injectGlobalStyles();
