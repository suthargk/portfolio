"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import Container from "./Container";
import ExtensionButton from "./ExtensionButton";
import Reveal from "./Reveal";

const Section = styled(Container, {
  padding: "20px 0 100px",

  "@md": { padding: "10px 0 64px" },
});

const Panel = styled("div", {
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
  borderRadius: "36px",
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "radial-gradient(70% 90% at 50% 0%, rgba(124,92,252,0.5), rgba(124,92,252,0.08) 70%), #08060f",
  padding: "96px 40px",

  "@md": { padding: "60px 24px", borderRadius: "28px" },
});

const Title = styled("h2", {
  fontSize: "52px",
  lineHeight: 1.08,
  letterSpacing: "-0.025em",
  color: "#fff",
  maxWidth: "640px",
  margin: "0 auto 16px",

  "@md": { fontSize: "34px" },
});

const Subtitle = styled("p", {
  fontSize: "17px",
  color: "rgba(255,255,255,0.68)",
  maxWidth: "500px",
  margin: "0 auto 36px",
  lineHeight: 1.6,
});

const Meta = styled("div", {
  marginTop: "20px",
  fontSize: "13px",
  fontWeight: 500,
  color: "rgba(255,255,255,0.5)",
});

const FinalCTA = () => {
  return (
    <Section>
      <Reveal>
        <Panel>
          <Title>Ready to stop switching tabs?</Title>
          <Subtitle>
            Add Calendario to Chrome and see your whole day, Google,
            Outlook and Zoom together, the moment you click the toolbar icon.
          </Subtitle>
          <ExtensionButton />
          <Meta>Free forever · Manifest V3 · Privacy-first</Meta>
        </Panel>
      </Reveal>
    </Section>
  );
};

export default FinalCTA;
