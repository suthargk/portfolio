"use client";

import React from "react";
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
import GlowField from "./GlowField";
import Reveal from "./Reveal";
import ScreenshotFrame from "./ScreenshotFrame";

const SectionOuter = styled("div", {
  position: "relative",
});

const Section = styled(Container, {
  position: "relative",
  zIndex: 1,
  padding: "90px 0",

  "@md": {
    padding: "60px 0",
  },
});

const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "70px",

  "&:not(:last-child)": {
    marginBottom: "115px",
  },

  "@lg": {
    gap: "40px",
  },

  "@md": {
    flexDirection: "column",
    textAlign: "center",

    "&:not(:last-child)": {
      marginBottom: "75px",
    },
  },

  variants: {
    reverse: {
      true: {
        flexDirection: "row-reverse",

        "@md": {
          flexDirection: "column",
        },
      },
    },
  },
});

const TextSide = styled("div", {
  maxWidth: "460px",
  flexShrink: 0,

  "@md": {
    maxWidth: "100%",
  },
});

const Eyebrow = styled("span", {
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  color: "$violetDark9",
  marginBottom: "14px",
});

const Title = styled("h2", {
  fontSize: "30px",
  color: "#fff",
  lineHeight: 1.25,
  marginBottom: "16px",

  "@md": {
    fontSize: "26px",
  },
});

const Description = styled("p", {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.65)",
  marginBottom: "20px",
});

const BulletList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const BulletItem = styled("li", {
  listStyle: "none",
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "rgba(255,255,255,0.8)",

  "@md": {
    justifyContent: "center",
  },

  "&::before": {
    content: "✓",
    color: "$violetDark9",
    fontWeight: 700,
    flexShrink: 0,
  },
});

const ImageSide = styled("div", {
  position: "relative",
  minWidth: "260px",
  maxWidth: "310px",
  flexShrink: 0,

  "@md": {
    maxWidth: "250px",
  },

  variants: {
    wide: {
      true: {
        minWidth: "0",
        width: "100%",
        maxWidth: "560px",
        flexShrink: 1,

        "@md": {
          maxWidth: "100%",
        },
      },
    },
  },
});

const InsetCard = styled("div", {
  position: "absolute",
  bottom: "-28px",
  right: "-28px",
  width: "34%",
  zIndex: 2,

  "@md": {
    right: "0",
    bottom: "-20px",
  },
});

const StackedBehind = styled("div", {
  position: "absolute",
  top: "34px",
  right: "-34px",
  width: "82%",
  opacity: 0.5,
  transform: "rotate(4deg)",
  zIndex: 0,
  filter: "blur(0.3px)",

  "@md": {
    display: "none",
  },
});

const StackedFront = styled("div", {
  position: "relative",
  zIndex: 1,
});

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  imageAlt: string;
  secondaryImage?: StaticImageData;
  insetImage?: StaticImageData;
  insetAlt?: string;
  wide?: boolean;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    eyebrow: "TIMELINE VIEW",
    title: "Your day, laid out hour by hour",
    description:
      "See meetings where they actually sit in your day, with a live marker showing exactly where you are right now.",
    bullets: [
      "A red \"Now\" line with the current time, always in the right place",
      "Overlapping meetings sit side by side instead of hiding behind each other",
      "Scrolled away? A \"Jump to now\" pill takes you straight back",
      "Colour-coded cards with the provider icon, in light and dark mode",
    ],
    image: timelineDark,
    imageAlt: "Calendario timeline in dark mode with a Now marker and a Jump to now button",
  },
  {
    eyebrow: "EVENT DETAILS",
    title: "Expand any meeting without leaving the timeline",
    description:
      "Tap a card and it opens in place with the calendar, time, reminder and organizer, so you never lose your spot in the day.",
    bullets: [
      "Which calendar and account the event belongs to, at a glance",
      "Start and end time, reminder lead time and organizer in one card",
      "Turn on \"Expand multiple events\" to keep several open at once",
    ],
    image: timelineEventExpanded,
    imageAlt: "An expanded event on the timeline showing calendar, time, reminder and organizer",
    reverse: true,
  },
  {
    eyebrow: "AGENDA LIST",
    title: "Prefer a simple list? One toggle away",
    description:
      "Switch the timeline off in Settings and your day becomes a clean, colourful agenda with live status on every card.",
    bullets: [
      "\"Starts in 23m\" badges so the next meeting is never a surprise",
      "One-tap Join button on cards that have a video call",
      "Calendar chip on every card, plus expandable details",
    ],
    image: agendaList,
    imageAlt: "Agenda list with a Starts in 23m badge and a Join button on the Dinner Time event",
  },
  {
    eyebrow: "JUMP TO ANY DATE",
    title: "A week strip and a month picker, both a tap away",
    description:
      "Scan the week at the top, or open the month grid to leap to any day, and see which days have events before you tap.",
    bullets: [
      "Week strip with coloured dots showing each day's events",
      "Month picker with a Today shortcut and previous / next arrows",
      "Today stays highlighted so you always know where you are",
    ],
    image: monthPicker,
    imageAlt: "Month picker over the calendar with Today shortcut and month navigation",
    reverse: true,
  },
  {
    eyebrow: "DRAG TO CREATE",
    title: "Drag across the timeline to pick a time",
    description:
      "Press and drag on any free stretch of the timeline and Calendario turns it into a new event, so scheduling starts where you're already looking.",
    bullets: [
      "Handles at the start and end let you fine-tune the range",
      "Live start, end and duration labels while you drag",
      "A dashed selection previews the exact time range before you commit",
    ],
    image: dragToCreate,
    imageAlt: "Dashed selection on the timeline from 06:15 PM to 08:15 PM with a 2h duration label",
  },
  {
    eyebrow: "CREATE EVENTS",
    title: "A full event composer with conflict warnings",
    description:
      "Add an event or a task from the popup. If your new time collides with something already booked, Calendario tells you before you save.",
    bullets: [
      "Event and Task tabs, with a title field and choice of calendar and account",
      "Location field with a map shortcut beside it",
      "All-day toggle plus start and end date and time pickers",
      "\"Overlaps with other events\" lists exactly what clashes, with a \"Find a time\" shortcut",
    ],
    image: createEvent,
    imageAlt: "Create Event form in dark mode showing an overlap warning with two conflicting events",
    reverse: true,
  },
  {
    eyebrow: "SEARCH THAT KEEPS UP",
    title: "Find any event in a couple of keystrokes",
    description:
      "Press ⌘K and search every connected calendar at once. Quick filters and suggestions get you to the right meeting before you finish typing.",
    bullets: [
      "Quick filters: Today, Tomorrow, This week, Next week, Meetings, Attachments",
      "Suggestions drawn from your own events, with provider icons at a glance",
      "Keyboard-first: arrows to navigate, Enter to select, Esc to close",
    ],
    image: searchEvents,
    imageAlt: "Search panel with quick filters, suggestions and upcoming events in dark mode",
  },
  {
    eyebrow: "FILTER BY ANYTHING",
    title: "Stack filters as chips and see what matches",
    description:
      "Combine filters like duration, day and time of day. Each one becomes a removable chip, with a count on the filter button and a summary of what was searched.",
    bullets: [
      "Chips such as duration 30-60, when today and time evening, each removable in one tap",
      "Badge on the filter button shows how many filters are active",
      "\"All calendars searched\" summary: accounts, calendars and events found",
      "Results grouped by day, with provider shortcuts for Google, Outlook and Zoom",
    ],
    image: searchFilters,
    imageAlt: "Search results narrowed by three filter chips with a summary of calendars searched",
    reverse: true,
  },
  {
    eyebrow: "NEVER MISS A MEETING",
    title: "Reminders that actually reach you",
    description:
      "A popup shows up on whatever page you're on when a reminder is due, right beside the Calendario side panel, so a meeting never sneaks up on you.",
    bullets: [
      "In-page reminder with the event name, time and a one-click \"Open event\" button",
      "Open Calendario as a side panel next to the page you're working on",
      "Floating page launcher icon on any site, with an exclude-websites list",
    ],
    image: reminderPopup,
    imageAlt: "Reminder popup on a web page beside the Calendario side panel",
    wide: true,
  },
  {
    eyebrow: "MAKE IT YOURS",
    title: "Themes, accent colours and how it behaves",
    description:
      "Calendario adapts to how you like to work, not the other way around, with a live preview for the settings that change how it looks.",
    bullets: [
      "System, Light or Dark theme with 7 accent colours",
      "Timeline view toggle with an animated preview you can replay",
      "12-hour or 24-hour time, with an optional live clock next to Today",
      "Choose whether the toolbar icon opens a side panel, and show or hide the page launcher",
    ],
    image: settingsAppearance,
    imageAlt: "Appearance settings with theme, accent colour and timeline view options",
    secondaryImage: settingsBehavior,
    reverse: true,
  },
  {
    eyebrow: "CONNECTED ACCOUNTS",
    title: "Google, Outlook and Zoom, all in one place",
    description:
      "Connect your accounts independently and Calendario merges every event into a single agenda. Sync, or disconnect, any time from Settings.",
    bullets: [
      "Use one account or several at the same time",
      "\"Last synced\" status and a \"Sync Now\" button on every account",
      "Disconnect any integration independently, whenever you like",
    ],
    image: settingsIntegrations,
    imageAlt: "Connected accounts for Google, Outlook and Zoom with Sync Now buttons",
  },
];

const FeatureRow = ({ feature }: { feature: Feature }) => {
  return (
    <Row reverse={feature.reverse}>
      <TextSide>
        <Reveal>
          <Eyebrow>{feature.eyebrow}</Eyebrow>
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
          <BulletList>
            {feature.bullets.map((bullet) => (
              <BulletItem key={bullet}>{bullet}</BulletItem>
            ))}
          </BulletList>
        </Reveal>
      </TextSide>

      <ImageSide wide={feature.wide}>
        <Reveal delay={120}>
          {feature.secondaryImage ? (
            <StackedBehind>
              <ScreenshotFrame>
                <Image
                  src={feature.secondaryImage}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  sizes="(min-width: 768px) 310px, 250px"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScreenshotFrame>
            </StackedBehind>
          ) : null}
          <StackedFront>
            <ScreenshotFrame>
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                draggable={false}
                sizes={feature.wide ? "(min-width: 768px) 560px, 90vw" : "(min-width: 768px) 310px, 250px"}
                style={{ width: "100%", height: "auto" }}
              />
            </ScreenshotFrame>
          </StackedFront>
          {feature.insetImage ? (
            <InsetCard>
              <ScreenshotFrame>
                <Image
                  src={feature.insetImage}
                  alt={feature.insetAlt ?? ""}
                  draggable={false}
                  sizes="(min-width: 768px) 190px, 90px"
                  style={{ width: "100%", height: "auto" }}
                />
              </ScreenshotFrame>
            </InsetCard>
          ) : null}
        </Reveal>
      </ImageSide>
    </Row>
  );
};

const Features = () => {
  return (
    <SectionOuter>
      <GlowField />
      <Section>
        {features.map((feature) => (
          <FeatureRow key={feature.title} feature={feature} />
        ))}
      </Section>
    </SectionOuter>
  );
};

export default Features;
