"use client";

import { useEffect, useLayoutEffect } from "react";

// ProjectList navigates here with client-side routing, which doesn't reset
// scroll position on route change — without this, the page could mount
// already scrolled partway down if the portfolio was scrolled to Projects.
// Runs before paint so there's no visible jump.
//
// The shared Stitches config has no valid background token for html/body,
// so they're transparent by default, which shows a white flash instead of
// black during elastic/rubber-band overscroll at the edges of the page.
export function CalendarioEffects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return null;
}
