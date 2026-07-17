"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "@/styles/stitches.config";

export function StitchesRegistry({ children }: { children: React.ReactNode }) {
  const [inserted, setInserted] = useState(false);

  useServerInsertedHTML(() => {
    if (inserted) return null;
    setInserted(true);
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return <>{children}</>;
}
