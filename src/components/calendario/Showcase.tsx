"use client";

import React, { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { styled } from "@/styles/stitches.config";

import timelineDark from "@/assets/images/calendario-screenshots/timeline-dark.png";
import timelineEventExpanded from "@/assets/images/calendario-screenshots/timeline-event-expanded.png";
import agendaList from "@/assets/images/calendario-screenshots/agenda-list.png";
import monthPicker from "@/assets/images/calendario-screenshots/month-picker.png";
import dragToCreate from "@/assets/images/calendario-screenshots/drag-to-create.png";
import createEvent from "@/assets/images/calendario-screenshots/create-event.png";
import searchEvents from "@/assets/images/calendario-screenshots/search-events.png";
import searchFilters from "@/assets/images/calendario-screenshots/search-filters.png";
import reminderPopup from "@/assets/images/calendario-screenshots/reminder-popup.png";
import settingsAppearance from "@/assets/images/calendario-screenshots/settings-appearance.png";
import settingsBehavior from "@/assets/images/calendario-screenshots/settings-behavior.png";
import settingsIntegrations from "@/assets/images/calendario-screenshots/settings-integrations.png";

import Container from "./Container";
import PhoneFrame from "./PhoneFrame";
import Reveal from "./Reveal";

const Section = styled("section", {
  position: "relative",
  padding: "110px 0 90px",
  scrollMarginTop: "60px",

  "@md": { padding: "70px 0 60px" },
});

const Header = styled("div", {
  textAlign: "center",
  maxWidth: "640px",
  margin: "0 auto 40px",
});

export const Eyebrow = styled("span", {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#9d86ff",
  marginBottom: "14px",
});

export const SectionTitle = styled("h2", {
  fontSize: "44px",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: "#fff",

  "@md": { fontSize: "32px" },
});

const SectionLead = styled("p", {
  fontSize: "17px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.6)",
  marginTop: "16px",
});

// Scrolls sideways on narrow screens instead of wrapping into a tall block.
const TabList = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "6px",
  padding: "6px",
  margin: "0 auto 56px",
  width: "max-content",
  maxWidth: "100%",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",

  "@lg": {
    justifyContent: "flex-start",
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },

  "@md": { marginBottom: "36px" },
});

const Tab = styled("button", {
  appearance: "none",
  border: 0,
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  padding: "10px 18px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.6)",
  background: "transparent",
  transition: "color .2s, background .2s",

  "&:hover": { color: "#fff" },
  "&:focus-visible": { outline: "2px solid #9d86ff", outlineOffset: "2px" },

  "&[aria-selected='true']": {
    color: "#fff",
    background: "linear-gradient(135deg, #7C5CFC 0%, #5B3DF5 100%)",
    boxShadow: "0 6px 18px -6px rgba(91,61,245,0.8)",
  },
});

// Every panel sits in the same grid cell so the section height is the tallest
// panel and switching tabs never shifts the page. Inactive panels stay mounted
// so their screenshots are already loaded when the tab is opened.
const Panels = styled("div", {
  display: "grid",
});

const Panel = styled("div", {
  gridArea: "1 / 1",
  display: "grid",
  gridTemplateColumns: "minmax(0, 420px) minmax(0, 1fr)",
  alignItems: "center",
  gap: "72px",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(14px)",
  transition:
    "opacity .45s ease, transform .45s cubic-bezier(0.16,0.84,0.44,1), visibility 0s .45s",

  "&[data-active='true']": {
    opacity: 1,
    visibility: "visible",
    transform: "none",
    transition:
      "opacity .45s ease, transform .45s cubic-bezier(0.16,0.84,0.44,1), visibility 0s",
  },

  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    transform: "none",
  },

  "@lg": { gap: "40px" },

  "@md": {
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: "36px",
    textAlign: "center",
  },
});

const Copy = styled("div", {});

const PanelTitle = styled("h3", {
  fontSize: "32px",
  lineHeight: 1.2,
  letterSpacing: "-0.015em",
  color: "#fff",
  marginBottom: "14px",

  "@md": { fontSize: "26px" },
});

const PanelDescription = styled("p", {
  fontSize: "16px",
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.62)",
  marginBottom: "24px",
});

const Bullets = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  textAlign: "left",
});

const Bullet = styled("li", {
  listStyle: "none",
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "rgba(255,255,255,0.82)",

  "&::before": {
    content: "",
    flexShrink: 0,
    width: "6px",
    height: "6px",
    marginTop: "8px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #b9a4ff, #7C5CFC)",
    boxShadow: "0 0 10px rgba(124,92,252,0.9)",
  },
});

const Stage = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "24px",
  padding: "40px 24px",
  borderRadius: "32px",
  border: "1px solid rgba(255,255,255,0.08)",
  background:
    "radial-gradient(80% 60% at 50% 0%, rgba(124,92,252,0.22), transparent 70%), rgba(255,255,255,0.025)",
  overflow: "hidden",

  "@md": { padding: "28px 16px", gap: "14px" },
});

const ShotBox = styled("div", {
  width: "100%",
  maxWidth: "270px",

  variants: {
    offset: {
      true: { marginTop: "56px", "@md": { marginTop: "28px" } },
    },
    wide: {
      true: { maxWidth: "540px" },
    },
  },
});

interface Shot {
  src: StaticImageData;
  alt: string;
  // Stagger the second phone down so a pair reads as depth, not a grid.
  offset?: boolean;
  wide?: boolean;
}

interface Feature {
  id: string;
  tab: string;
  title: string;
  description: string;
  bullets: string[];
  shots: Shot[];
}

const features: Feature[] = [
  {
    id: "timeline",
    tab: "Timeline",
    title: "Your day, laid out hour by hour",
    description:
      "See meetings where they actually sit in your day, with a live marker showing exactly where you are right now. Tap a card and it opens in place.",
    bullets: [
      "A red \"Now\" line with the current time, and a \"Jump to now\" pill when you scroll away",
      "Overlapping meetings sit side by side instead of hiding behind each other",
      "Expand a card for calendar, time, reminder and organizer without losing your spot",
      "Colour-coded cards with the provider icon, in light and dark mode",
    ],
    shots: [
      {
        src: timelineDark,
        alt: "Calendario timeline in dark mode with a Now marker and a Jump to now button",
      },
      {
        src: timelineEventExpanded,
        alt: "An expanded event on the timeline showing calendar, time, reminder and organizer",
        offset: true,
      },
    ],
  },
  {
    id: "agenda",
    tab: "Agenda & dates",
    title: "A simple list, and any date a tap away",
    description:
      "Switch the timeline off and your day becomes a clean agenda with live status on every card. Scan the week at the top, or open the month grid to leap anywhere.",
    bullets: [
      "\"Starts in 23m\" badges and a one-tap Join button on cards with a video call",
      "Week strip with coloured dots showing each day's events",
      "Month picker with a Today shortcut and previous / next arrows",
    ],
    shots: [
      {
        src: agendaList,
        alt: "Agenda list with a Starts in 23m badge and a Join button on the Dinner Time event",
      },
      {
        src: monthPicker,
        alt: "Month picker over the calendar with Today shortcut and month navigation",
        offset: true,
      },
    ],
  },
  {
    id: "create",
    tab: "Create",
    title: "Drag to pick a time, then add the details",
    description:
      "Press and drag on any free stretch of the timeline and Calendario turns it into a new event. If it collides with something already booked, you'll know before you save.",
    bullets: [
      "Live start, end and duration labels while you drag, with handles to fine-tune",
      "Event and Task tabs, a choice of calendar and account, and an all-day toggle",
      "\"Overlaps with other events\" lists exactly what clashes, with a \"Find a time\" shortcut",
    ],
    shots: [
      {
        src: dragToCreate,
        alt: "Dashed selection on the timeline from 06:15 PM to 08:15 PM with a 2h duration label",
      },
      {
        src: createEvent,
        alt: "Create Event form in dark mode showing an overlap warning with two conflicting events",
        offset: true,
      },
    ],
  },
  {
    id: "search",
    tab: "Search",
    title: "Find any event in a couple of keystrokes",
    description:
      "Press ⌘K and search every connected calendar at once. Stack filters as removable chips and see exactly what matches.",
    bullets: [
      "Quick filters: Today, Tomorrow, This week, Next week, Meetings, Attachments",
      "Combine duration, day and time of day, with a count on the filter button",
      "Results grouped by day, with provider shortcuts for Google, Outlook and Zoom",
      "Keyboard-first: arrows to navigate, Enter to select, Esc to close",
    ],
    shots: [
      {
        src: searchEvents,
        alt: "Search panel with quick filters, suggestions and upcoming events in dark mode",
      },
      {
        src: searchFilters,
        alt: "Search results narrowed by three filter chips with a summary of calendars searched",
        offset: true,
      },
    ],
  },
  {
    id: "reminders",
    tab: "Reminders",
    title: "Reminders that actually reach you",
    description:
      "A popup shows up on whatever page you're on when a reminder is due, right beside the Calendario side panel, so a meeting never sneaks up on you.",
    bullets: [
      "In-page reminder with the event name, time and a one-click \"Open event\" button",
      "Open Calendario as a side panel next to the page you're working on",
      "Floating page launcher on any site, with an exclude-websites list",
    ],
    shots: [
      {
        src: reminderPopup,
        alt: "Reminder popup on a web page beside the Calendario side panel",
        wide: true,
      },
    ],
  },
  {
    id: "customize",
    tab: "Make it yours",
    title: "Themes, accent colours and how it behaves",
    description:
      "Calendario adapts to how you like to work, with a live preview for the settings that change how it looks.",
    bullets: [
      "System, Light or Dark theme with 7 accent colours",
      "Timeline view toggle with an animated preview you can replay",
      "12-hour or 24-hour time, with an optional live clock next to Today",
      "Choose whether the toolbar icon opens a side panel, and show or hide the page launcher",
    ],
    shots: [
      { src: settingsAppearance, alt: "Appearance settings with theme, accent colour and timeline view options" },
      { src: settingsBehavior, alt: "Behavior settings for time format, side panel and page launcher", offset: true },
    ],
  },
  {
    id: "accounts",
    tab: "Accounts",
    title: "Google, Outlook and Zoom, all in one place",
    description:
      "Connect your accounts independently and Calendario merges every event into a single agenda. Sync or disconnect any time from Settings.",
    bullets: [
      "Use one account or several at the same time",
      "\"Last synced\" status and a \"Sync Now\" button on every account",
      "Disconnect any integration independently, whenever you like",
    ],
    shots: [
      {
        src: settingsIntegrations,
        alt: "Connected accounts for Google, Outlook and Zoom with Sync Now buttons",
      },
    ],
  },
];

const Showcase = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = features.length - 1;
    if (event.key === "ArrowRight") select(index === last ? 0 : index + 1);
    else if (event.key === "ArrowLeft") select(index === 0 ? last : index - 1);
    else if (event.key === "Home") select(0);
    else if (event.key === "End") select(last);
    else return;
    event.preventDefault();
  };

  return (
    <Section id="showcase">
      <Container>
        <Reveal>
          <Header>
            <Eyebrow>Everything in the popup</Eyebrow>
            <SectionTitle>Built for the way your day actually runs</SectionTitle>
            <SectionLead>
              From a glance at what&apos;s next to scheduling, searching and
              reminders, without leaving the page you&apos;re on.
            </SectionLead>
          </Header>
        </Reveal>

        <Reveal delay={100}>
          <TabList role="tablist" aria-label="Calendario features">
            {features.map((feature, i) => (
              <Tab
                key={feature.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${feature.id}`}
                aria-selected={active === i}
                aria-controls={`panel-${feature.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {feature.tab}
              </Tab>
            ))}
          </TabList>
        </Reveal>

        <Reveal delay={160}>
          <Panels>
            {features.map((feature, i) => (
              <Panel
                key={feature.id}
                role="tabpanel"
                id={`panel-${feature.id}`}
                aria-labelledby={`tab-${feature.id}`}
                data-active={active === i}
                aria-hidden={active !== i}
              >
                <Copy>
                  <PanelTitle>{feature.title}</PanelTitle>
                  <PanelDescription>{feature.description}</PanelDescription>
                  <Bullets>
                    {feature.bullets.map((bullet) => (
                      <Bullet key={bullet}>{bullet}</Bullet>
                    ))}
                  </Bullets>
                </Copy>

                <Stage>
                  {feature.shots.map((shot) => (
                    <ShotBox key={shot.alt} offset={shot.offset} wide={shot.wide}>
                      <PhoneFrame>
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          draggable={false}
                          sizes={
                            shot.wide
                              ? "(min-width: 768px) 540px, 90vw"
                              : "(min-width: 768px) 270px, 44vw"
                          }
                        />
                      </PhoneFrame>
                    </ShotBox>
                  ))}
                </Stage>
              </Panel>
            ))}
          </Panels>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Showcase;
