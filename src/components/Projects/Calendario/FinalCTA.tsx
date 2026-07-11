import React from "react";
import { styled } from "../../../../stitches.config";
import Badge from "./Badge";
import Container from "./Container";
import ExtensionButton from "./ExtensionButton";

const Section = styled(Container, {
  padding: "40px 0 120px",
  textAlign: "center",

  "@md": {
    padding: "20px 0 80px",
  },
});

const Panel = styled("div", {
  position: "relative",
  overflow: "hidden",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.1)",
  background:
    "linear-gradient(160deg, rgba(112,88,208,0.18), rgba(255,255,255,0.02))",
  padding: "70px 40px",

  "@md": {
    padding: "50px 24px",
  },
});

const PanelGlow = styled("div", {
  position: "absolute",
  top: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "760px",
  height: "340px",
  background:
    "radial-gradient(closest-side, rgba(112,88,208,0.35) 0%, rgba(112,88,208,0.12) 45%, transparent 75%)",
  filter: "blur(90px)",
  pointerEvents: "none",
  zIndex: 0,
});

const PanelContent = styled("div", {
  position: "relative",
  zIndex: 1,
});

const Title = styled("h2", {
  fontSize: "36px",
  color: "#fff",
  marginBottom: "14px",

  "@md": {
    fontSize: "28px",
  },
});

const Subtitle = styled("p", {
  fontSize: "16px",
  color: "rgba(255,255,255,0.65)",
  maxWidth: "480px",
  margin: "0 auto 34px",
  lineHeight: 1.6,
});

const BadgeRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "10px",
  marginTop: "32px",
});

const FinalCTA = () => {
  return (
    <Section>
      <Panel>
        <PanelGlow />
        <PanelContent>
          <Title>Ready to stop switching tabs?</Title>
          <Subtitle>
            Add Calendario to Chrome and see your whole day — Google and
            Outlook together — the moment you click the toolbar icon.
          </Subtitle>
          <ExtensionButton />
          <BadgeRow>
            <Badge icon="⭐">Free forever</Badge>
            <Badge icon="🧩">Manifest V3</Badge>
            <Badge icon="🔒">Privacy-first</Badge>
          </BadgeRow>
        </PanelContent>
      </Panel>
    </Section>
  );
};

export default FinalCTA;
