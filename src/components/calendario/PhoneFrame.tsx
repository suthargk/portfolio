"use client";

import { styled } from "@/styles/stitches.config";

const PhoneFrame = styled("div", {
  borderRadius: "24px",
  overflow: "hidden",
  lineHeight: 0,
  backgroundColor: "#0b0b12",
  boxShadow:
    "0 40px 80px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.04)",

  "& img": {
    width: "100%",
    height: "auto",
    display: "block",
    userSelect: "none",
    WebkitUserDrag: "none",
  },
});

export default PhoneFrame;
