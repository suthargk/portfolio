"use client";

import React from "react";
import Image from "next/image";

import { keyframes, styled } from "@/styles/stitches.config";
import homeLight from "@/assets/images/calendario-screenshots/home-light.png";
import Badge from "./Badge";
import Container from "./Container";
import ExtensionButton from "./ExtensionButton";
import Reveal from "./Reveal";
import ScreenshotFrame from "./ScreenshotFrame";

const HeroOuter = styled("div", {
  position: "relative",
  overflow: "hidden",
});

const Glow = styled("div", {
  position: "absolute",
  top: "-200px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "900px",
  height: "500px",
  background:
    "radial-gradient(closest-side, rgba(112,88,208,0.35), transparent)",
  pointerEvents: "none",
  zIndex: 0,
});

const HeroStyled = styled(Container, {
  position: "relative",
  zIndex: 1,
  minHeight: "calc(100vh - 74px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  padding: "60px 0",

  "@md": {
    minHeight: "auto",
    flexDirection: "column",
    padding: "60px 0 40px",
    gap: "50px",
  },
});

const HeadingContainer = styled("div", {
  maxWidth: "600px",

  "@md": {
    textAlign: "center",
    maxWidth: "100%",
  },
});

const pulse = keyframes({
  "0%": { boxShadow: "0 0 0 0 rgba(52,211,153,0.55)" },
  "70%": { boxShadow: "0 0 0 7px rgba(52,211,153,0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(52,211,153,0)" },
});

const LiveBadge = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "9px",
  width: "max-content",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.85)",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(8px)",
  padding: "7px 16px 7px 12px",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "24px",

  "@md": {
    margin: "0 auto 24px",
  },
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
  fontSize: "52px",
  lineHeight: 1.1,
  userSelect: "none",

  "@lg": {
    fontSize: "44px",
  },

  "@md": {
    fontSize: "38px",
  },

  "@xs": {
    fontSize: "32px",
  },
});

const HeadingPrimary = styled("span", {
  display: "block",
  background:
    "linear-gradient(270deg, rgb(248, 208, 255) 0%, rgb(255,255,255) 100%, rgb(24, 24, 27) 69.8568%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const HeadingSecondary = styled("span", {
  color: "$grayDark12",
});

const HeadingTertiary = styled("span", {
  background:
    "linear-gradient(340deg, rgb(112, 88, 208) 4.08744%, rgb(248, 208, 255) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const HeadingDescription = styled("p", {
  color: "rgba(255,255,255,0.7)",
  fontSize: "17px",
  fontWeight: 500,
  display: "block",
  marginTop: "20px",
  lineHeight: "1.55",
});

const CTARow = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: "34px",
  flexWrap: "wrap",

  "@md": {
    justifyContent: "center",
  },
});

const FinePrint = styled("span", {
  fontSize: "13px",
  color: "rgba(255,255,255,0.45)",
  fontWeight: 500,
});

const BadgeRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "30px",

  "@md": {
    justifyContent: "center",
  },
});

const ImageSide = styled("div", {
  minWidth: "260px",
  maxWidth: "310px",
  flexShrink: 0,

  "@md": {
    maxWidth: "250px",
  },
});

const Hero = () => {
  return (
    <HeroOuter>
      <Glow />
      <HeroStyled>
        <HeadingContainer>
          <Reveal>
            <LiveBadge>
              <LiveDot />
              Live on the Chrome Web Store
            </LiveBadge>
          </Reveal>

          <Reveal delay={80}>
            <Heading>
              <HeadingPrimary>Every calendar,</HeadingPrimary>
              <span>
                <HeadingSecondary>in </HeadingSecondary>
                <HeadingTertiary>one fast popup.</HeadingTertiary>
              </span>
            </Heading>
          </Reveal>

          <Reveal delay={160}>
            <HeadingDescription>
              Calendario merges your Google Calendar and Outlook / Microsoft
              365 calendar into a single toolbar popup — see what&apos;s next, join
              a call, or respond to an invite without ever opening either
              calendar app.
            </HeadingDescription>
          </Reveal>

          <Reveal delay={240}>
            <CTARow>
              <ExtensionButton />
              <FinePrint>No account required · Works with Google &amp; Outlook</FinePrint>
            </CTARow>
          </Reveal>

          <Reveal delay={320}>
            <BadgeRow>
              <Badge icon="🔄">Google + Outlook sync</Badge>
              <Badge icon="🌐">15 languages</Badge>
              <Badge icon="🎨">7 accent themes</Badge>
              <Badge icon="🔒">100% client-side</Badge>
            </BadgeRow>
          </Reveal>
        </HeadingContainer>

        <ImageSide>
          <Reveal delay={200}>
            <ScreenshotFrame>
              <Image
                src={homeLight}
                alt="Calendario agenda popup showing today's meetings"
                draggable={false}
                sizes="(min-width: 768px) 310px, 250px"
                style={{ width: "100%", height: "auto" }}
              />
            </ScreenshotFrame>
          </Reveal>
        </ImageSide>
      </HeroStyled>
    </HeroOuter>
  );
};

export default Hero;