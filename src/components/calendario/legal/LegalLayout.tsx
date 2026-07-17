"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Container from "../Container";
import Reveal from "../Reveal";
import { CalendarioEffects } from "../CalendarioEffects";

const PageStyled = styled("div", {
  backgroundColor: "#000",
  backgroundImage:
    "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "26px 26px",
  padding: "0 80px",
  "@lg": {
    padding: "0 40px",
  },

  "@md": {
    padding: "0 20px",
  },
});

const Main = styled(Container, {
  maxWidth: "760px",
  padding: "70px 0 110px",

  "@md": {
    padding: "50px 0 80px",
  },
});

const Title = styled("h1", {
  fontSize: "40px",
  lineHeight: 1.15,
  color: "#fff",
  marginBottom: "12px",

  "@md": {
    fontSize: "30px",
  },
});

const UpdatedAt = styled("p", {
  fontSize: "14px",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "48px",
});

const Prose = styled("div", {
  color: "rgba(255,255,255,0.7)",
  fontSize: "16px",
  lineHeight: 1.7,

  "h2, h3": {
    color: "#fff",
    marginTop: "40px",
    marginBottom: "14px",
  },

  h2: {
    fontSize: "22px",
  },

  h3: {
    fontSize: "17px",
  },

  p: {
    marginBottom: "16px",
  },

  "ul, ol": {
    margin: "0 0 16px",
    paddingLeft: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  li: {
    lineHeight: 1.6,
  },

  a: {
    color: "$violetDark9",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
  },

  strong: {
    color: "rgba(255,255,255,0.9)",
  },
});

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

const LegalLayout = ({ title, updatedAt, children }: LegalLayoutProps) => {
  return (
    <PageStyled>
      <CalendarioEffects />
      <NavBar />
      <Main>
        <Reveal>
          <Title>{title}</Title>
          <UpdatedAt>Last updated: {updatedAt}</UpdatedAt>
          <Prose>{children}</Prose>
        </Reveal>
      </Main>
      <Footer />
    </PageStyled>
  );
};

export default LegalLayout;