import React from "react";
import { styled } from "../../../../stitches.config";

const Field = styled("div", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  zIndex: 0,
});

const Blob = styled("div", {
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(120px)",

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
}

const glows: GlowSpec[] = [
  { tone: "violet", top: "4%", side: "right", offset: "-16px", size: "min(640px, 88vw)" },
  { tone: "pink", top: "37%", side: "left", offset: "-16px", size: "min(580px, 88vw)" },
  { tone: "blue", top: "67%", side: "right", offset: "-16px", size: "min(620px, 88vw)" },
  { tone: "violet", top: "93%", side: "left", offset: "-16px", size: "min(560px, 88vw)" },
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
          }}
        />
      ))}
    </Field>
  );
};

export default GlowField;
