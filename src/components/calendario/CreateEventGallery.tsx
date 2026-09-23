"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { styled } from "@/styles/stitches.config";

import createEvent from "@/assets/images/calendario-screenshots/create-event.png";
import createSelectCalendar from "@/assets/images/calendario-screenshots/create-select-calendar.png";
import createLocation from "@/assets/images/calendario-screenshots/create-location.png";
import createFindATime from "@/assets/images/calendario-screenshots/create-find-a-time.png";
import createRepeat from "@/assets/images/calendario-screenshots/create-repeat.png";
import createCustomRecurrence from "@/assets/images/calendario-screenshots/create-custom-recurrence.png";
import createTimezone from "@/assets/images/calendario-screenshots/create-timezone.png";
import createMeetGuests from "@/assets/images/calendario-screenshots/create-meet-guests.png";
import createNotification from "@/assets/images/calendario-screenshots/create-notification.png";
import createDescription from "@/assets/images/calendario-screenshots/create-description.png";

import Container from "./Container";
import Reveal from "./Reveal";
import ScreenshotFrame from "./ScreenshotFrame";

const Wrapper = styled(Container, {
  position: "relative",
  zIndex: 1,
  padding: "0 0 25px",

  "@md": {
    padding: "0 0 10px",
  },
});

const Header = styled("div", {
  maxWidth: "620px",
  margin: "0 auto 56px",
  textAlign: "center",
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
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "40px 24px",

  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "36px 16px",
  },
});

const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const CardTitle = styled("h3", {
  fontSize: "15px",
  fontWeight: 700,
  color: "#fff",
  lineHeight: 1.3,
  marginBottom: "6px",
});

const CardText = styled("p", {
  fontSize: "13px",
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.6)",
});

interface Step {
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
}

const steps: Step[] = [
  {
    title: "Event or task",
    text: "Add a title, pick a calendar, and set the date and time in one compact form. Flip to the Task tab for to-dos.",
    image: createEvent,
    alt: "Create Event form with title, calendar, location and date and time fields",
  },
  {
    title: "Pick the right calendar",
    text: "Choose any calendar you can write to. Read-only ones, like holidays, are clearly marked \"View only\".",
    image: createSelectCalendar,
    alt: "Calendar picker listing owned calendars and a view-only holidays calendar",
  },
  {
    title: "Location autocomplete",
    text: "Start typing a place and get suggestions from Google Places, with a map shortcut right beside the field.",
    image: createLocation,
    alt: "Location field showing Google Places autocomplete suggestions",
  },
  {
    title: "Find a time",
    text: "See instantly whether you're free, with a day preview of your existing events so you never double-book.",
    image: createFindATime,
    alt: "Suggested times screen with a free-at-this-time banner and a day preview",
  },
  {
    title: "Repeat, your way",
    text: "Daily, weekly, monthly, yearly, or every weekday. Each option spells out the exact rule for your date.",
    image: createRepeat,
    alt: "Repeat options: does not repeat, daily, weekly, monthly, yearly, every weekday and custom",
  },
  {
    title: "Custom recurrence",
    text: "Repeat every N days, weeks, or months on chosen weekdays, and end never, on a date, or after N occurrences, with a live preview of upcoming dates.",
    image: createCustomRecurrence,
    alt: "Custom recurrence sheet with interval, weekday, end and upcoming date controls",
  },
  {
    title: "Any time zone",
    text: "Search by city, zone name, or GMT offset. Popular zones sit up top, with every region a tap away.",
    image: createTimezone,
    alt: "Time zone picker with search, popular zones and regional lists",
  },
  {
    title: "Meet link and guests",
    text: "Add a Google Meet link with one toggle, then invite people by name or email, import a list from a file, or mark guests optional.",
    image: createMeetGuests,
    alt: "Google Meet toggle and guest search with an invited guest listed",
  },
  {
    title: "Custom reminders",
    text: "Stack up to 5 reminders, as early as 4 weeks ahead. Calendario also warns you if popups are switched off in Settings.",
    image: createNotification,
    alt: "Notification section with a 10 minute reminder and a warning about disabled reminders",
  },
  {
    title: "Rich description",
    text: "Write notes or an agenda with bold, italic, underline, bulleted and numbered lists, and links.",
    image: createDescription,
    alt: "Description field with a formatting toolbar",
  },
];

const CreateEventGallery = () => {
  return (
    <Wrapper>
      <Header>
        <Reveal>
          <Eyebrow>CREATE EVENTS</Eyebrow>
          <Title>Schedule anything without leaving the popup</Title>
          <Description>
            A full event composer lives inside Calendario, from the first
            keystroke to the final invite. Here&apos;s the whole flow, step by
            step.
          </Description>
        </Reveal>
      </Header>

      <Grid>
        {steps.map((step, index) => (
          <Card key={step.title}>
            <Reveal delay={(index % 5) * 70}>
              <ScreenshotFrame css={{ aspectRatio: "712 / 1440" }}>
                <Image
                  src={step.image}
                  alt={step.alt}
                  draggable={false}
                  sizes="(min-width: 1025px) 220px, (min-width: 769px) 320px, 50vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </ScreenshotFrame>
              <div style={{ marginTop: "16px" }}>
                <CardTitle>{step.title}</CardTitle>
                <CardText>{step.text}</CardText>
              </div>
            </Reveal>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default CreateEventGallery;
