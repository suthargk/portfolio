import localFont from "next/font/local";

export const wotfard = localFont({
  src: [
    { path: "../assets/fonts/Wotfard-Thin.ttf", weight: "100", style: "normal" },
    { path: "../assets/fonts/Wotfard-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../assets/fonts/Wotfard-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../assets/fonts/Wotfard-Light.ttf", weight: "300", style: "normal" },
    { path: "../assets/fonts/Wotfard-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../assets/fonts/Wotfard-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Wotfard-RegularItalic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/Wotfard-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Wotfard-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../assets/fonts/Wotfard-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Wotfard-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../assets/fonts/Wotfard-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Wotfard-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-wotfard",
  display: "swap",
});
