"use client";

import { styled } from "@/styles/stitches.config";

const ScreenshotFrame = styled("div", {
  borderRadius: "22px",
  overflow: "hidden",
  lineHeight: 0,
  boxShadow:
    "0 40px 80px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)",

  "& img": {
    width: "100%",
    height: "100%",
    display: "block",
    userSelect: "none",
    WebkitUserDrag: "none",
    pointerEvents: "auto",
  },
});

export default ScreenshotFrame;