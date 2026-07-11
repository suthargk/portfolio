import React from "react";
import { styled } from "../../../../stitches.config";
import Container from "./Container";
import { EXTENSION_URL } from "./constants";

const FooterOuter = styled("div", {
  borderTop: "1px solid rgba(255,255,255,0.08)",
});

const FooterInner = styled(Container, {
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
      <FooterInner>
        <span>© {new Date().getFullYear()} Calendario — built by Gaurav Suthar</span>
        <Links>
          <FooterLink href="/">Portfolio</FooterLink>
          <FooterLink href={EXTENSION_URL} target="_blank" rel="noreferrer">
            Chrome Web Store
          </FooterLink>
          <FooterLink href="mailto:gaurav.suthar161@gmail.com">Contact</FooterLink>
        </Links>
      </FooterInner>
    </FooterOuter>
  );
};

export default Footer;
