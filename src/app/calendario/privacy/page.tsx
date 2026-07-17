import type { Metadata } from "next";
import PrivacyPolicy from "@/components/calendario/legal/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Calendario Privacy Policy",
  description:
    "How the Calendario Chrome extension accesses, stores, and protects your calendar data.",
  alternates: { canonical: "/calendario/privacy" },
  robots: { index: true, follow: true },
};

export default function CalendarioPrivacyPage() {
  return <PrivacyPolicy />;
}
