import type { Metadata } from "next";
import TermsOfService from "@/components/calendario/legal/TermsOfService";

export const metadata: Metadata = {
  title: "Calendario Terms of Service",
  description: "The terms that govern your use of the Calendario Chrome extension.",
  alternates: { canonical: "/calendario/terms" },
  robots: { index: true, follow: true },
};

export default function CalendarioTermsPage() {
  return <TermsOfService />;
}
