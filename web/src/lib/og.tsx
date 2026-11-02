import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "DataAPI · AutoEx™ — Raw DOM. Pure signal.";

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="#0D0E0C" />
      <path d="M8 11h4M8 16h9M8 21h6" stroke="#61645E" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 11h5M21 16h3M18 21h6" stroke="#00A86B" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/** Shared by opengraph-image and twitter-image. */
export function renderOgImage() {
  // Sync read keeps the image prerendered at build time (async fs would make it dynamic).
  const display = readFileSync(join(process.cwd(), "assets/BricolageGrotesque-Bold.ttf"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: "#F6F5F0", fontFamily: "Bricolage Grotesque", color: "#0D0E0C" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Mark size={64} />
          <span style={{ fontSize: 52, letterSpacing: "-0.03em" }}>DataAPI</span>
          <span style={{ fontSize: 24, padding: "6px 16px", borderRadius: 999, background: "#E3F6EC", color: "#00744A" }}>AutoEx™</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
          <span style={{ color: "#B9BAB3", textDecoration: "line-through", textDecorationColor: "#FF5B2E" }}>Raw DOM.</span>
          <span style={{ color: "#00A86B" }}>Pure signal.</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Bricolage Grotesque", data: display, style: "normal", weight: 700 }] },
  );
}

export function renderAppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0D0E0C" }}>
        <svg width={132} height={132} viewBox="4 4 24 24">
          <path d="M8 11h4M8 16h9M8 21h6" stroke="#61645E" strokeWidth="2" strokeLinecap="round" />
          <path d="M19 11h5M21 16h3M18 21h6" stroke="#00A86B" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
