import type { StaticImageData } from "next/image";
import calendarioImg from "@/assets/images/calendario.png";
import connectwiseLogo from "@/assets/images/connectwise_logo.jpeg";
import hectorLogo from "@/assets/images/hectorai_logo.png";
import yapsodyLogo from "@/assets/images/yapsody-logo.png";

export type Project = {
  id: string;
  name: string;
  description: string;
  image: StaticImageData;
  href: string;
  external: boolean;
  status?: "live" | "coming-soon";
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "calendario",
    name: "Calendario",
    description:
      "A Chrome extension that unifies Google and Outlook calendars in one popup, so you can manage events, set reminders, and stay organized while browsing the web.",
    image: calendarioImg,
    href: "/calendario",
    external: false,
    status: "live",
    tags: ["Chrome Extension", "React", "TypeScript"],
  },
];

export type WorkExperience = {
  id: string;
  company: string;
  logo: StaticImageData;
  position: string;
  duration: string;
  url: string;
};

export const workExperience: WorkExperience[] = [
  {
    id: "connectwise",
    company: "ConnectWise",
    logo: connectwiseLogo,
    position: "Frontend Engineer II",
    duration: "2024 — Present",
    url: "https://www.connectwise.com",
  },
  {
    id: "hector-ai",
    company: "Hector AI",
    logo: hectorLogo,
    position: "Frontend Engineer",
    duration: "2023 — 2024",
    url: "https://www.hectorai.live/",
  },
  {
    id: "yapsody",
    company: "Yapsody India",
    logo: yapsodyLogo,
    position: "Frontend Engineer",
    duration: "2022 — 2023",
    url: "https://www.yapsody.com/ticketing/",
  },
];

export type ExternalPost = {
  title: string;
  description: string;
  url: string;
  date: string;
  source: string;
};

export const externalPosts: ExternalPost[] = [
  {
    title: "When to use memo in React",
    description:
      "When state changes, a component re-renders along with all of its descendant components. Here's when React.memo actually helps.",
    url: "https://dev.to/suthargk/when-to-use-memo-in-react-dp3",
    date: "2023-06-30",
    source: "dev.to",
  },
];
