import React from "react";
import { styled } from "../../../../stitches.config";
import CalendarioLogoIcon from "../../../assets/icons/CalendarioLogoIcon";
import Container from "./Container";
import { EXTENSION_URL } from "./constants";

const NavOuter = styled("div", {
  borderBottom: "1px solid rgba(255,255,255,0.08)",
});

const NavInner = styled(Container, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0",
});

const LogoGroup = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#fff",
  textDecoration: "none",
});

const LogoBadge = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  borderRadius: "9px",
  backgroundColor: "#fff",
  color: "#000",
  flexShrink: 0,
});

const LogoText = styled("span", {
  fontSize: "17px",
  fontWeight: 700,

  "@xs": {
    display: "none",
  },
});

const NavRight = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

const BackLink = styled("a", {
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  transition: "color .2s",

  "&:hover": {
    color: "#fff",
  },

  "@xs": {
    display: "none",
  },
});

const CTAButton = styled("a", {
  padding: "9px 18px",
  borderRadius: "50px",
  backgroundColor: "#fff",
  color: "#000",
  fontWeight: 600,
  fontSize: "13px",
  textDecoration: "none",
  transition: "all .2s",

  "&:hover": {
    backgroundColor: "$violetDark9",
    color: "#fff",
  },
});

const NavBar = () => {
  return (
    <NavOuter>
      <NavInner>
        <LogoGroup href="/">
          <LogoBadge>
            <CalendarioLogoIcon width={18} height={18} />
          </LogoBadge>
          <LogoText>Calendario</LogoText>
        </LogoGroup>

        <NavRight>
          <BackLink href="/">&larr; Back to portfolio</BackLink>
          <CTAButton href={EXTENSION_URL} target="_blank" rel="noreferrer">
            Add to Chrome
          </CTAButton>
        </NavRight>
      </NavInner>
    </NavOuter>
  );
};

export default NavBar;
