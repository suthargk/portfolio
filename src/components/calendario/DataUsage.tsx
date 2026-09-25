"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import Container from "./Container";
import Reveal from "./Reveal";
import { Eyebrow, SectionTitle } from "./Showcase";

const Section = styled("section", {
  position: "relative",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "100px 0",

  "@md": { padding: "64px 0" },
});

const Layout = styled(Container, {
  display: "grid",
  gridTemplateColumns: "minmax(0, 360px) minmax(0, 1fr)",
  gap: "72px",
  alignItems: "start",

  "@lg": { gap: "40px" },
  "@md": { gridTemplateColumns: "minmax(0, 1fr)", gap: "36px" },
});

const Intro = styled("div", {
  position: "sticky",
  top: "96px",

  "@md": { position: "static" },
});

const Lead = styled("p", {
  fontSize: "16px",
  lineHeight: 1.65,
  color: "rgba(255,255,255,0.62)",
  marginTop: "18px",
});

const PolicyLink = styled("a", {
  display: "inline-block",
  marginTop: "22px",
  fontSize: "15px",
  fontWeight: 600,
  color: "#b9a4ff",
  textDecoration: "none",
  borderBottom: "1px solid rgba(185,164,255,0.4)",
  paddingBottom: "2px",
  transition: "color .2s, border-color .2s",

  "&:hover": { color: "#fff", borderColor: "#fff" },
});

const Cards = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

const Card = styled("div", {
  display: "grid",
  gridTemplateColumns: "44px minmax(0, 1fr)",
  gap: "18px",
  padding: "24px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",

  "@xs": { gridTemplateColumns: "1fr", gap: "14px" },
});

const IconBox = styled("div", {
  width: "44px",
  height: "44px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  background: "rgba(124,92,252,0.16)",
  border: "1px solid rgba(157,134,255,0.3)",
});

const CardTitle = styled("h3", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
  fontSize: "17px",
  color: "#fff",
  marginBottom: "6px",
});

const Tag = styled("span", {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "3px 8px",
  borderRadius: "999px",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.16)",
});

const CardBody = styled("p", {
  fontSize: "15px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.62)",
});

const Note = styled("p", {
  fontSize: "14px",
  lineHeight: 1.7,
  color: "rgba(255,255,255,0.5)",
  padding: "6px 4px 0",
});

const DataUsage = () => {
  return (
    <Section id="privacy">
      <Layout>
        <Intro>
          <Reveal>
            <Eyebrow>Privacy</Eyebrow>
            <SectionTitle css={{ fontSize: "34px", "@md": { fontSize: "28px" } }}>
              How Calendario uses your Google data
            </SectionTitle>
            <Lead>
              Calendario asks you to sign in with Google so it can show your
              Google Calendar in the toolbar popup. It has no server: your
              data goes directly between your browser and Google, is never
              sold or used for advertising, and is not stored anywhere else.
            </Lead>
            <PolicyLink href="/calendario/privacy">
              Read the Privacy Policy &rarr;
            </PolicyLink>
          </Reveal>
        </Intro>

        <Cards>
          <Reveal>
            <Card>
              <IconBox aria-hidden="true">📅</IconBox>
              <div>
                <CardTitle>Google Calendar</CardTitle>
                <CardBody>
                  To display your events, and to create, edit, RSVP to and
                  delete events when you ask.
                </CardBody>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={80}>
            <Card>
              <IconBox aria-hidden="true">👤</IconBox>
              <div>
                <CardTitle>Email address and profile</CardTitle>
                <CardBody>
                  Your name and photo, to show which account is signed in.
                </CardBody>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={160}>
            <Card>
              <IconBox aria-hidden="true">✉️</IconBox>
              <div>
                <CardTitle>
                  Contacts <Tag>Optional</Tag>
                </CardTitle>
                <CardBody>
                  Only if you choose to allow it when adding guests:
                  read-only access to your contacts and other contacts, used
                  only to suggest people to invite as you type.
                </CardBody>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={240}>
            <Note>
              Calendario&apos;s use of information received from Google APIs
              adheres to the Google API Services User Data Policy, including
              the Limited Use requirements.
            </Note>
          </Reveal>
        </Cards>
      </Layout>
    </Section>
  );
};

export default DataUsage;
