import React from "react";
import { styled } from "../../../../stitches.config";

import settingsIntegrations from "../../../assets/images/calendario-screenshots/settings-integrations.png";
import homeDark from "../../../assets/images/calendario-screenshots/home-dark.png";
import monthPicker from "../../../assets/images/calendario-screenshots/month-picker.png";
import eventDetail from "../../../assets/images/calendario-screenshots/event-detail.png";
import eventExpanded from "../../../assets/images/calendario-screenshots/event-expanded.png";
import settingsAppearance from "../../../assets/images/calendario-screenshots/settings-appearance.png";
import settingsAccount from "../../../assets/images/calendario-screenshots/settings-account.png";

import Container from "./Container";
import ScreenshotFrame from "./ScreenshotFrame";

const Section = styled(Container, {
  padding: "110px 0",

  "@md": {
    padding: "70px 0",
  },
});

const Row = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "70px",

  "&:not(:last-child)": {
    marginBottom: "140px",
  },

  "@lg": {
    gap: "40px",
  },

  "@md": {
    flexDirection: "column",
    textAlign: "center",

    "&:not(:last-child)": {
      marginBottom: "90px",
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
  image: string;
  imageAlt: string;
  secondaryImage?: string;
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

const FeatureRow = ({ feature }: { feature: Feature }) => {
  return (
    <Row reverse={feature.reverse}>
      <TextSide>
        <Eyebrow>{feature.eyebrow}</Eyebrow>
        <Title>{feature.title}</Title>
        <Description>{feature.description}</Description>
        <BulletList>
          {feature.bullets.map((bullet) => (
            <BulletItem key={bullet}>{bullet}</BulletItem>
          ))}
        </BulletList>
      </TextSide>

      <ImageSide>
        {feature.secondaryImage ? (
          <StackedBehind>
            <ScreenshotFrame>
              <img src={feature.secondaryImage} alt="" aria-hidden="true" draggable={false} />
            </ScreenshotFrame>
          </StackedBehind>
        ) : null}
        <StackedFront>
          <ScreenshotFrame>
            <img src={feature.image} alt={feature.imageAlt} draggable={false} />
          </ScreenshotFrame>
        </StackedFront>
      </ImageSide>
    </Row>
  );
};

const Features = () => {
  return (
    <Section>
      {features.map((feature) => (
        <FeatureRow key={feature.title} feature={feature} />
      ))}
    </Section>
  );
};

export default Features;
