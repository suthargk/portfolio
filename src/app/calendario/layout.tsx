import { StitchesRegistry } from "@/components/calendario/StitchesRegistry";

export default function CalendarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StitchesRegistry>{children}</StitchesRegistry>;
}
