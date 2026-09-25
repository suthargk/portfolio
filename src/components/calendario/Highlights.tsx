"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import Container from "./Container";
import Reveal from "./Reveal";

const Section = styled("section", {
  padding: "30px 0 100px",

  "@md": { padding: "20px 0 70px" },
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: "16px",

  "@lg": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@xs": { gridTemplateColumns: "1fr" },
});

const Card = styled("div", {
  position: "relative",
  overflow: "hidden",
  gridColumn: "span 2",
  minHeight: "210px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "28px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.08)",
  background:
    "radial-gradient(90% 90% at 100% 0%, rgba(124,92,252,0.16), transparent 65%), rgba(255,255,255,0.03)",
  transition: "border-color .25s, transform .25s",

  "&:hover": {
    borderColor: "rgba(157,134,255,0.4)",
    transform: "translateY(-3px)",
  },

  "@lg": { gridColumn: "span 1" },
  "@xs": { gridColumn: "span 1", minHeight: "170px" },

  variants: {
    wide: {
      true: {
        gridColumn: "span 3",
        "@lg": { gridColumn: "span 2" },
        "@xs": { gridColumn: "span 1" },
      },
    },
  },
});

const Stat = styled("div", {
  fontSize: "56px",
  lineHeight: 1,
  fontWeight: 700,
  letterSpacing: "-0.03em",
  background: "linear-gradient(120deg, #ffffff 0%, #c9b8ff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Label = styled("h3", {
  fontSize: "18px",
  color: "#fff",
  marginTop: "40px",
  marginBottom: "6px",
});

const Body = styled("p", {
  fontSize: "14px",
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.58)",
});

const items = [
  {
    stat: "2 → 1",
    title: "Google, Outlook + Zoom",
    body: "Every event from every connected calendar in a single agenda, with Zoom connected alongside Google and Outlook.",
    wide: true,
  },
  {
    stat: "⌘K",
    title: "Keyboard-first search",
    body: "Search every calendar at once, with quick filters and suggestions as you type.",
    wide: true,
  },
  {
    stat: "15",
    title: "Languages",
    body: "Calendario speaks your language, with 12 or 24-hour time to match.",
  },
  {
    stat: "7",
    title: "Accent themes",
    body: "System, light or dark, in the accent colour you like best.",
  },
  {
    stat: "0",
    title: "Servers between you and Google",
    body: "100% client-side. Your data goes straight from your browser to your calendar provider.",
  },
];

const Highlights = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {items.map((item, i) => (
            <Card key={item.title} wide={item.wide}>
              <Reveal delay={i * 70}>
                <Stat>{item.stat}</Stat>
                <Label>{item.title}</Label>
                <Body>{item.body}</Body>
              </Reveal>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Highlights;
