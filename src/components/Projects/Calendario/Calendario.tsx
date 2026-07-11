import React, { useEffect, useLayoutEffect } from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Features from "./Features";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import { styled } from "../../../../stitches.config";

const CalendarioStyled = styled("div", {
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

function Calendario() {
  // ProjectList navigates here with react-router's client-side useNavigate,
  // which doesn't reset scroll position on route change — if the portfolio
  // was scrolled down to the Projects section, this page would otherwise
  // mount already scrolled partway down. Run before paint so there's no
  // visible jump.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The shared portfolio stitches config has no valid background token for
  // html/body, so they're transparent by default — the main portfolio only
  // looks right because its dark-mode toggle force-sets body's background,
  // a side effect that never runs on this route (and is wiped on reload).
  // Without this, elastic/rubber-band overscroll bounce reveals a white
  // flash instead of black at the edges of the page.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlBg = html.style.backgroundColor;
    const prevBodyBg = body.style.backgroundColor;

    html.style.backgroundColor = "#000";
    body.style.backgroundColor = "#000";

    return () => {
      html.style.backgroundColor = prevHtmlBg;
      body.style.backgroundColor = prevBodyBg;
    };
  }, []);

  return (
    <CalendarioStyled>
      <NavBar />
      <Hero />
      <Features />
      <FinalCTA />
      <Footer />
    </CalendarioStyled>
  );
}

export default Calendario;
