import React from "react";
import { styled } from "../../../../stitches.config";
import Container from "./Container";
import { EXTENSION_URL } from "./constants";

const FooterOuter = styled("div", {
  position: "relative",
  borderTop: "1px solid rgba(255,255,255,0.08)",
});

const FooterGlow = styled("div", {
  position: "absolute",
  bottom: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "min(820px, 92vw)",
  height: "180px",
  background:
    "radial-gradient(closest-side, rgba(112,88,208,0.3) 0%, rgba(112,88,208,0.1) 45%, transparent 75%)",
  filter: "blur(90px)",
  pointerEvents: "none",
  zIndex: 0,
});

const FooterInner = styled(Container, {
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "28px 0",
  flexWrap: "wrap",
  gap: "16px",
  fontSize: "13px",
  color: "rgba(255,255,255,0.5)",

  "@md": {
    justifyContent: "center",
    textAlign: "center",
  },
});

const Links = styled("div", {
  display: "flex",
  gap: "24px",
});

const FooterLink = styled("a", {
  color: "rgba(255,255,255,0.5)",
  textDecoration: "none",
  transition: "color .2s",

  "&:hover": {
    color: "#fff",
  },
});

const Footer = () => {
  return (
    <FooterOuter>
      <FooterGlow />
      <FooterInner>
        <span>© {new Date().getFullYear()} Calendario — built by Gaurav Suthar</span>
        <Links>
          <FooterLink href="/">Portfolio</FooterLink>
          <FooterLink href={EXTENSION_URL} target="_blank" rel="noreferrer">
            Chrome Web Store
          </FooterLink>
          <FooterLink href="/calendario/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/calendario/terms">Terms of Service</FooterLink>
          <FooterLink href="mailto:gaurav.suthar161@gmail.com">Contact</FooterLink>
        </Links>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;
