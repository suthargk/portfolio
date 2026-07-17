import type { Metadata } from "next";
import { CalendarioShell } from "@/components/calendario/CalendarioShell";
import NavBar from "@/components/calendario/NavBar";
import Hero from "@/components/calendario/Hero";
import Features from "@/components/calendario/Features";
import FinalCTA from "@/components/calendario/FinalCTA";
import Footer from "@/components/calendario/Footer";
import { CalendarioEffects } from "@/components/calendario/CalendarioEffects";
import { JsonLd } from "@/components/site/json-ld";
import { site } from "@/lib/site";
import { EXTENSION_URL } from "@/components/calendario/constants";

export const metadata: Metadata = {
  title: "Calendario — Google & Outlook, one popup",
  description:
    "Calendario is a Chrome extension that merges Google Calendar and Outlook / Microsoft 365 into a single toolbar popup — see what's next, join a call, or respond to an invite without opening either calendar app.",
  alternates: { canonical: "/calendario" },
  openGraph: {
    type: "website",
    url: `${site.url}/calendario`,
    title: "Calendario — Google & Outlook, one popup",
    description:
      "Merge Google Calendar and Outlook into one fast toolbar popup.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Calendario",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description: metadata.description,
  url: `${site.url}/calendario`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: site.name,
  },
  installUrl: EXTENSION_URL,
};

export default function CalendarioPage() {
  return (
    <CalendarioShell>
      <JsonLd data={jsonLd} />
      <CalendarioEffects />
      <NavBar />
      <Hero />
      <Features />
      <FinalCTA />
      <Footer />
    </CalendarioShell>
  );
}
