"use client";

import { useEffect } from "react";

/**
 * Fixed-position elements using backdrop-filter (see header.tsx) can be left
 * ghosted/unpainted when Chrome restores a page from the back/forward cache.
 * Forcing a reload on a persisted pageshow guarantees a clean repaint.
 */
export function BfcacheReload() {
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}
