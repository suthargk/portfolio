"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { styled } from "@/styles/stitches.config";

import settingsIntegrations from "@/assets/images/calendario-screenshots/settings-integrations.png";
import homeDark from "@/assets/images/calendario-screenshots/home-dark.png";
import monthPicker from "@/assets/images/calendario-screenshots/month-picker.png";
import eventDetail from "@/assets/images/calendario-screenshots/event-detail.png";
import eventExpanded from "@/assets/images/calendario-screenshots/event-expanded.png";
import settingsAppearance from "@/assets/images/calendario-screenshots/settings-appearance.png";
import settingsAccount from "@/assets/images/calendario-screenshots/settings-account.png";
import searchEvents from "@/assets/images/calendario-screenshots/search-events.png";
import searchResultExpanded from "@/assets/images/calendario-screenshots/search-result-expanded.png";
import filterTime from "@/assets/images/calendario-screenshots/filter-time.png";
import filterPeople from "@/assets/images/calendario-screenshots/filter-people.png";
import reminderPopup from "@/assets/images/calendario-screenshots/reminder-popup.png";
import settingsReminders from "@/assets/images/calendario-screenshots/settings-reminders.png";

import Container from "./Container";
import CreateEventGallery from "./CreateEventGallery";
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
    eyebrow: "MULTI-PROVIDER SYNC",
    title: "Google and Outlook, together at last",
    description:
      "Sign in to Google Calendar and Microsoft 365 independently — Calendario merges every event into one chronologically sorted agenda.",
    bullets: [
      "Use one provider or both at the same time",
      "Toggle secondary calendars on or off — Family, Team, Holidays",
      "Manual \"Sync Now\" plus automatic background refresh",
    ],
    image: settingsIntegrations,
    imageAlt: "Google and Outlook accounts connected in Calendario settings",
  },
  {
    eyebrow: "YOUR DAY, AT A GLANCE",
    title: "Know what's happening without opening a tab",
    description:
      "A clean agenda of event cards shows exactly where you stand — what's live, what's next, and how much time is left.",
    bullets: [
      "\"NOW\" and \"Starts in 15m\" badges with a live progress bar",
      "Compact month strip plus an expandable full month view",
      "Built-in search across every connected calendar",
    ],
    image: homeDark,
    imageAlt: "Calendario agenda view showing live and upcoming meetings",
    secondaryImage: monthPicker,
    reverse: true,
  },
  {
    eyebrow: "RICH EVENT DETAILS",
    title: "Everything about a meeting, one tap away",
    description:
      "Expand any event to see the full picture — no need to leave the popup or dig through your inbox.",
    bullets: [
      "One-tap Join — Google Meet and Microsoft Teams links detected automatically",
      "Full attendee list with accepted / declined / tentative status",
      "Description, location, reminders, and downloadable attachments",
    ],
    image: eventDetail,
    imageAlt: "Full event detail view with attendees and join button",
  },
  {
    eyebrow: "RESPOND WITHOUT LEAVING THE POPUP",
    title: "RSVP, share, or clear your calendar in seconds",
    description:
      "Handle invites the moment they land, right from the card they arrived on.",
    bullets: [
      "Accept, decline, or mark tentative — synced straight back to Google or Outlook",
      "Copy an event's shareable link in one click",
      "Delete a single occurrence or an entire recurring series",
    ],
    image: eventExpanded,
    imageAlt: "Expanded event card with attendee avatars and reminder",
    reverse: true,
  },
  {
    eyebrow: "SEARCH THAT KEEPS UP",
    title: "Find any event in a couple of keystrokes",
    description:
      "Press ⌘K and search every connected calendar at once. Quick filters and suggestions get you to the right meeting before you finish typing.",
    bullets: [
      "One-tap quick filters: Today, Tomorrow, This week, Next week, Meetings, Attachments",
      "Suggestions drawn from your own events, with provider icons at a glance",
      "Keyboard-first: arrows to navigate, Enter to open, Esc to close",
    ],
    image: searchEvents,
    imageAlt: "Search events panel with quick filters, suggestions and upcoming events",
    secondaryImage: searchResultExpanded,
  },
  {
    eyebrow: "FILTER BY ANYTHING",
    title: "Narrow it down by time, people, status, and more",
    description:
      "When search alone isn't enough, the filter panel slices your agenda along every dimension that matters, with a live count of matching events.",
    bullets: [
      "Date range, time of day (morning to evening), and duration",
      "Organized by me, invited by others, or a specific attendee or organizer",
      "Just me, 1:1, groups of 3+, and external attendees",
      "Separate tabs for Meeting, Status, and More filters, plus a one-tap Reset",
    ],
    image: filterTime,
    imageAlt: "Filter panel on the Time tab with date range, time of day and duration options",
    secondaryImage: filterPeople,
    reverse: true,
  },
  {
    eyebrow: "NEVER MISS A MEETING",
    title: "Reminders that actually reach you",
    description:
      "A popup and a sound show up on whatever page you're on when a reminder is due, so a meeting never sneaks up on you.",
    bullets: [
      "In-page reminder popup with a one-click \"Open event\" button",
      "Toggle reminders on or off from Settings, and silence them all in one switch",
      "Auto-close reminders after a set time, or never",
      "Choose where the extension opens, and add a floating page launcher icon with a per-site exclude list",
    ],
    image: reminderPopup,
    imageAlt: "Reminder popup on a web page beside the Calendario side panel",
    insetImage: settingsReminders,
    insetAlt: "Settings showing reminder notification and auto-close options",
    wide: true,
    reverse: true,
  },
  {
    eyebrow: "MAKE IT YOURS",
    title: "Themes, time formats, and 15 languages",
    description:
      "Calendario adapts to how you like to work, not the other way around.",
    bullets: [
      "Light and dark mode with 7 accent color themes",
      "12-hour or 24-hour time, with an optional live clock",
      "National holidays overlaid right in your agenda",
      "Available in 15 languages, including Hindi, Spanish, French, German, Japanese, and Arabic",
    ],
    image: settingsAppearance,
    imageAlt: "Appearance settings with theme and accent color options",
  },
  {
    eyebrow: "PRIVACY BY DESIGN",
    title: "Your data stays between you and your calendar",
    description:
      "Calendario talks directly to Google's and Microsoft's own APIs — there's no third-party server sitting in between reading your events.",
    bullets: [
      "No intermediary server, ever",
      "Sign in or out of either provider independently, any time",
      "Manage exactly which calendars sync, per account",
    ],
    image: settingsAccount,
    imageAlt: "Connected Google account with calendar sync toggles",
    reverse: true,
  },
];

// The create-event gallery sits between the filters row and the reminders row.
const GALLERY_INDEX = features.findIndex(
  (feature) => feature.eyebrow === "NEVER MISS A MEETING",
);

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
        {features.slice(0, GALLERY_INDEX).map((feature) => (
          <FeatureRow key={feature.title} feature={feature} />
        ))}
      </Section>
      <CreateEventGallery />
      <Section>
        {features.slice(GALLERY_INDEX).map((feature) => (
          <FeatureRow key={feature.title} feature={feature} />
        ))}
      </Section>
    </SectionOuter>
  );
};

export default Features;