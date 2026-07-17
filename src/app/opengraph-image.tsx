import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NBSP = " ";

export default async function Image() {
  const fontDir = join(process.cwd(), "src/assets/fonts");
  const [wotfardBold, wotfardMedium] = await Promise.all([
    readFile(join(fontDir, "Wotfard-Bold.ttf")),
    readFile(join(fontDir, "Wotfard-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Wotfard",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "#5468e0",
            opacity: 0.25,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#5468e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#fafafa",
              }}
            >
              G
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#fafafa" }}>
              {site.name}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 500, color: "#a3a3a3" }}>
            gauravsuthar.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#fafafa",
            }}
          >
            A frontend engineer who builds
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.25,
              color: "#fafafa",
            }}
          >
            <span>{`fast,${NBSP}accessible${NBSP}`}</span>
            <span style={{ color: "#8b9bf5" }}>{`React${NBSP}`}</span>
            <span>{"products."}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["React", "TypeScript", "Next.js", "Performance"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #262626",
                color: "#d4d4d4",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Wotfard", data: wotfardBold, weight: 700, style: "normal" },
        { name: "Wotfard", data: wotfardMedium, weight: 500, style: "normal" },
      ],
    }
  );
}
