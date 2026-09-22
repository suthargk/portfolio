"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import Container from "./Container";
import Reveal from "./Reveal";

const SectionOuter = styled("div", {
  position: "relative",
  borderTop: "1px solid rgba(255,255,255,0.08)",
});

const Section = styled(Container, {
  maxWidth: "760px",
  padding: "70px 0",

  "@md": {
    padding: "50px 0",
  },
});

const Title = styled("h2", {
  fontSize: "26px",
  color: "#fff",
  marginBottom: "16px",

  "@md": {
    fontSize: "22px",
  },
});

const Description = styled("p", {
  fontSize: "15px",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.65)",
  marginBottom: "16px",

  "&:last-child": {
    marginBottom: 0,
  },
});

const Strong = styled("strong", {
  color: "rgba(255,255,255,0.9)",
});

const PolicyLink = styled("a", {
  color: "$violetDark9",
  textDecoration: "underline",
  textUnderlineOffset: "2px",
});

const DataUsage = () => {
  return (
    <SectionOuter>
      <Section>
        <Reveal>
          <Title>How Calendario uses your Google data</Title>
          <Description>
            Calendario asks you to sign in with Google so it can show your
            Google Calendar in the toolbar popup. It requests:{" "}
            <Strong>Google Calendar</Strong> access, to display your events
            and to create, edit, RSVP to and delete events when you ask;
            your <Strong>email address and profile</Strong> (name, photo),
            to show which account is signed in; and, only if you choose to
            allow it when adding guests, <Strong>read-only access to your
            contacts and other contacts</Strong>, used only to suggest
            people to invite as you type.
          </Description>
          <Description>
            Calendario has no server: your data goes directly between your
            browser and Google, is never sold or used for advertising, and
            is not stored anywhere else. Calendario&apos;s use of
            information received from Google APIs adheres to the Google API
            Services User Data Policy, including the Limited Use
            requirements.{" "}
            <PolicyLink href="/calendario/privacy">Privacy Policy</PolicyLink>
          </Description>
        </Reveal>
      </Section>
    </SectionOuter>
  );
};

export default DataUsage;
