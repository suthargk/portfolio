"use client";

import { styled } from "@/styles/stitches.config";

export const CalendarioShell = styled("div", {
  backgroundColor: "#000",
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
  padding: "0 80px",
  boxSizing: "border-box",
  fontFamily: "$display",
  scrollBehavior: "smooth",
  MozOsxFontSmoothing: "grayscale",
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  "& *, & *::after, & *::before": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "@lg": {
    padding: "0 40px",
  },
  "@md": {
    padding: "0 20px",
  },
});
