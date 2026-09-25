"use client";

import React from "react";
import Image from "next/image";

import { keyframes, styled } from "@/styles/stitches.config";
import timelineLight from "@/assets/images/calendario-screenshots/timeline-light.png";
import timelineDark from "@/assets/images/calendario-screenshots/timeline-dark.png";
import agendaList from "@/assets/images/calendario-screenshots/agenda-list.png";
import Container from "./Container";
import ExtensionButton from "./ExtensionButton";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

const HeroOuter = styled("section", {
  position: "relative",
  overflow: "hidden",
});

const Glow = styled("div", {
  position: "absolute",
  top: "-260px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "min(1100px, 130vw)",
  height: "640px",
  background:
    "radial-gradient(closest-side, rgba(112,88,208,0.42), rgba(112,88,208,0.1) 60%, transparent)",
  pointerEvents: "none",
  zIndex: 0,
});

const HeroInner = styled(Container, {
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "84px 0 0",

  "@md": {
    padding: "56px 0 0",
  },
});

const pulse = keyframes({
  "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,0.55)" },
  "70%": { boxShadow: "0 0 0 7px rgba(52,211,153,0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(52,211,153,0)" },
});

const LiveBadge = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "9px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.85)",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(8px)",
  padding: "7px 16px 7px 12px",
  fontSize: "13px",
  fontWeight: 600,
  textDecoration: "none",
  marginBottom: "28px",
});

const LiveDot = styled("span", {
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  backgroundColor: "#34D399",
  flexShrink: 0,
  animation: `${pulse} 2s infinite`,
});

const Heading = styled("h1", {
  fontSize: "76px",
  lineHeight: 1.02,
  letterSpacing: "-0.03em",
  color: "#fff",
  maxWidth: "860px",

  "@lg": { fontSize: "62px" },
  "@md": { fontSize: "46px" },
  "@xs": { fontSize: "38px" },
});

const Gradient = styled("span", {
  background:
    "linear-gradient(100deg, #b9a4ff 0%, #f8d0ff 55%, #ffffff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Lead = styled("p", {
  color: "rgba(255,255,255,0.68)",
  fontSize: "19px",
  fontWeight: 500,
  lineHeight: 1.55,
  maxWidth: "620px",
  marginTop: "24px",

  "@md": { fontSize: "16px" },
});

const CTARow = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
  marginTop: "36px",

  "@xs": { width: "100%" },
});

const FinePrint = styled("span", {
  fontSize: "13px",
  color: "rgba(255,255,255,0.45)",
  fontWeight: 500,
});

// Phones are cropped at the bottom and faded out so the hero reads as a
// "peek" into the popup rather than three stacked screenshots.
const Stage = styled("div", {
  position: "relative",
  width: "100%",
  marginTop: "64px",
  height: "520px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "28px",
  maskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",
  WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 100%)",

  "@md": {
    marginTop: "44px",
    height: "380px",
    gap: "14px",
  },
});

const Phone = styled("div", {
  flexShrink: 0,
  width: "300px",

  "@lg": { width: "260px" },
  "@md": { width: "34vw" },

  variants: {
    pos: {
      left: {
        marginTop: "56px",
        transform: "rotate(-5deg)",
        "@md": { marginTop: "30px", marginRight: "-6vw" },
      },
      center: {
        zIndex: 2,
        "@md": { width: "42vw" },
      },
      right: {
        marginTop: "56px",
        transform: "rotate(5deg)",
        "@md": { marginTop: "30px", marginLeft: "-6vw" },
      },
    },
  },
});

const Hero = () => {
  return (
    <HeroOuter>
      <Glow />
      <HeroInner>
        <Reveal>
          <LiveBadge href="#showcase">
            <LiveDot />
            Live on the Chrome Web Store
          </LiveBadge>
        </Reveal>

        <Reveal delay={80}>
          <Heading>
            Every calendar,
            <br />
            <Gradient>one fast popup.</Gradient>
          </Heading>
        </Reveal>

        <Reveal delay={160}>
          <Lead>
            Calendario merges Google Calendar and Outlook / Microsoft 365 into
            a single toolbar popup, with Zoom connected too. See what&apos;s
            next, join a call, or respond to an invite without opening any of
            them.
          </Lead>
        </Reveal>

        <Reveal delay={240}>
          <CTARow>
            <ExtensionButton />
            <FinePrint>
              Free · No account required · Works with Google, Outlook &amp; Zoom
            </FinePrint>
          </CTARow>
        </Reveal>

        <Reveal delay={320}>
          <Stage>
            <Phone pos="left">
              <PhoneFrame>
                <Image
                  src={timelineDark}
                  alt="Calendario timeline in dark mode"
                  draggable={false}
                  sizes="(min-width: 1024px) 300px, 40vw"
                />
              </PhoneFrame>
            </Phone>
            <Phone pos="center">
              <PhoneFrame>
                <Image
                  src={timelineLight}
                  alt="Calendario timeline view with a live Now marker and today's meetings"
                  draggable={false}
                  priority
                  sizes="(min-width: 1024px) 300px, 42vw"
                />
              </PhoneFrame>
            </Phone>
            <Phone pos="right">
              <PhoneFrame>
                <Image
                  src={agendaList}
                  alt="Calendario agenda list with a Starts in 23m badge and a Join button"
                  draggable={false}
                  sizes="(min-width: 1024px) 300px, 40vw"
                />
              </PhoneFrame>
            </Phone>
          </Stage>
        </Reveal>
      </HeroInner>
    </HeroOuter>
  );
};

export default Hero;
