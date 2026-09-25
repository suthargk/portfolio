"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import CalendarioLogoIcon from "./CalendarioLogoIcon";
import Container from "./Container";
import { EXTENSION_URL } from "./constants";

const NavOuter = styled("div", {
  position: "sticky",
  top: 0,
  zIndex: 50,
  // Bleed past the shell's horizontal padding so the blur spans the viewport.
  margin: "0 -80px",
  padding: "0 80px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",

  "@lg": { margin: "0 -40px", padding: "0 40px" },
  "@md": { margin: "0 -20px", padding: "0 20px" },
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

const NavLink = styled("a", {
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 500,
  transition: "color .2s",

  "&:hover": {
    color: "#fff",
  },

  "@md": {
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
        <LogoGroup href="/calendario">
          <LogoBadge>
            <CalendarioLogoIcon width={18} height={18} />
          </LogoBadge>
          <LogoText>Calendario</LogoText>
        </LogoGroup>

        <NavRight>
          <NavLink href="/calendario#showcase">Features</NavLink>
          <NavLink href="/calendario#privacy">Privacy</NavLink>
          <NavLink href="/">&larr; Portfolio</NavLink>
          <CTAButton href={EXTENSION_URL} target="_blank" rel="noreferrer">
            Add to Chrome
          </CTAButton>
        </NavRight>
      </NavInner>
    </NavOuter>
  );
};

export default NavBar;