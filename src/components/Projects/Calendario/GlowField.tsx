import React from "react";
import { keyframes, styled } from "../../../../stitches.config";

const Field = styled("div", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
});

const drift = keyframes({
  "0%, 100%": { transform: "translate(0px, 0px)" },
  "50%": { transform: "translate(10px, -12px)" },
});

const Blob = styled("div", {
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(120px)",
  animation: `${drift} 18s ease-in-out infinite`,

  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
  },

  variants: {
    tone: {
      violet: {
        background:
          "radial-gradient(closest-side, rgba(124,92,252,0.55) 0%, rgba(124,92,252,0.2) 45%, transparent 75%)",
      },
      pink: {
        background:
          "radial-gradient(closest-side, rgba(248,208,255,0.4) 0%, rgba(248,208,255,0.14) 45%, transparent 75%)",
      },
      blue: {
        background:
          "radial-gradient(closest-side, rgba(78,140,255,0.45) 0%, rgba(78,140,255,0.16) 45%, transparent 75%)",
      },
    },
  },
});

interface GlowSpec {
  tone: "violet" | "pink" | "blue";
  top: string;
  side: "left" | "right";
  offset: string;
  size: string;
  duration: string;
  delay: string;
}

const glows: GlowSpec[] = [
  { tone: "violet", top: "4%", side: "right", offset: "-8px", size: "min(640px, 76vw)", duration: "17s", delay: "0s" },
  { tone: "pink", top: "37%", side: "left", offset: "-8px", size: "min(580px, 76vw)", duration: "20s", delay: "-4s" },
  { tone: "blue", top: "67%", side: "right", offset: "-8px", size: "min(620px, 76vw)", duration: "22s", delay: "-9s" },
  { tone: "violet", top: "93%", side: "left", offset: "-8px", size: "min(560px, 76vw)", duration: "19s", delay: "-13s" },
];

const GlowField = () => {
  return (
    <Field>
      {glows.map((glow, i) => (
        <Blob
          key={i}
          tone={glow.tone}
          style={{
            top: glow.top,
            [glow.side]: glow.offset,
            width: glow.size,
            height: glow.size,
            animationDuration: glow.duration,
            animationDelay: glow.delay,
          }}
        />
      ))}
    </Field>
  );
};

export default GlowField;
