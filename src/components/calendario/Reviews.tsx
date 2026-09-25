"use client";

import React from "react";
import { styled } from "@/styles/stitches.config";
import Container from "./Container";
import Reveal from "./Reveal";
import { EXTENSION_URL } from "./constants";
import { Eyebrow, SectionTitle } from "./Showcase";

const Section = styled("section", {
  padding: "20px 0 100px",

  "@md": { padding: "10px 0 70px" },
});

const Header = styled("div", {
  textAlign: "center",
  maxWidth: "640px",
  margin: "0 auto 48px",
});

const Summary = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "22px",
  padding: "8px 16px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 600,
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.12)",
  transition: "border-color .2s",

  "&:hover": { borderColor: "rgba(157,134,255,0.5)" },
});

const Stars = styled("span", {
  color: "#FBBF24",
  letterSpacing: "2px",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "16px",
  margin: "0 auto",

  "@lg": { gridTemplateColumns: "minmax(0, 1fr)", maxWidth: "640px" },
});

const Card = styled("figure", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "28px",
  padding: "28px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.08)",
  background:
    "radial-gradient(90% 90% at 0% 0%, rgba(124,92,252,0.14), transparent 65%), rgba(255,255,255,0.03)",
});

const Quote = styled("blockquote", {
  fontSize: "18px",
  lineHeight: 1.5,
  fontWeight: 500,
  color: "#fff",
});

const Translation = styled("p", {
  marginTop: "14px",
  fontSize: "14px",
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.5)",
});

const Author = styled("figcaption", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontSize: "14px",
  color: "rgba(255,255,255,0.55)",
});

const Avatar = styled("span", {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 700,
  color: "#fff",
  background: "linear-gradient(135deg, #7C5CFC 0%, #5B3DF5 100%)",
});

const Name = styled("span", {
  display: "block",
  color: "#fff",
  fontWeight: 600,
});

interface Review {
  name: string;
  date: string;
  text: string;
  lang?: string;
  translation?: string;
}

// Verbatim from the Chrome Web Store listing.
const reviews: Review[] = [
  {
    name: "Alberto Jiu",
    date: "Sep 13, 2026",
    lang: "es",
    text: "Se ve muy bien la extensión, ayuda  mucho a controlar las fechas y si es posible pueden agregar la parte de lista de tareas o task, sería de mucha ayuda. Gracias por tu creación.",
    translation:
      "The extension looks great and helps a lot to keep track of dates. If possible, you could add a to-do list or task section, that would be very helpful. Thanks for creating it.",
  },
  {
    name: "onlydeve",
    date: "Jul 10, 2026",
    text: "Calendario made organizing my schedule much easier. The interface is clean, intuitive, and doesn't feel cluttered. Highly recommended. 👌",
  },
  {
    name: "Vijay Solanki",
    date: "Jul 10, 2026",
    text: "Saves me from the calendar tab shuffle.",
  },
];

const Reviews = () => {
  return (
    <Section id="reviews">
      <Container>
        <Reveal>
          <Header>
            <Eyebrow>Reviews</Eyebrow>
            <SectionTitle>What people are saying</SectionTitle>
            <Summary href={EXTENSION_URL} target="_blank" rel="noreferrer">
              <Stars aria-hidden="true">★★★★★</Stars>
              5.0 · 3 ratings on the Chrome Web Store
            </Summary>
          </Header>
        </Reveal>

        <Grid>
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <Card>
                <div>
                  <Quote lang={review.lang}>&ldquo;{review.text}&rdquo;</Quote>
                  {review.translation ? (
                    <Translation>
                      Translated from Spanish: {review.translation}
                    </Translation>
                  ) : null}
                </div>
                <Author>
                  <Avatar aria-hidden="true">
                    {review.name[0].toUpperCase()}
                  </Avatar>
                  <span>
                    <Name>{review.name}</Name>
                    <Stars aria-label="5 out of 5 stars">★★★★★</Stars> ·{" "}
                    {review.date}
                  </span>
                </Author>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Reviews;
