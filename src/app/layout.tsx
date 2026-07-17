import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { wotfard } from "@/lib/fonts";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/site/theme-provider";
import { JsonLd } from "@/components/site/json-ld";
import { BfcacheReload } from "@/components/site/bfcache-reload";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Gaurav Suthar",
    "Frontend Engineer",
    "React Developer",
    "React Engineer portfolio",
    "JavaScript developer",
    "TypeScript developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@suthargk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "ConnectWise",
  },
  sameAs: [site.socials.github, site.socials.linkedin, site.socials.twitter],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={wotfard.variable} suppressHydrationWarning>
      <body className="font-sans">
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <BfcacheReload />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
