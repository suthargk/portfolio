import React from "react";
import Hero from "./Hero";
import { styled } from "../../../../stitches.config";

const CalendarioStyled = styled("div", {
  backgroundColor: "#000",
  padding: "0 80px",
  "@lg": {
    padding: "0 40px",
  },

  "@md": {
    padding: "0 20px",
  },
});

function Calendario() {
  return (
    <CalendarioStyled>
      <Hero />
    </CalendarioStyled>
  );
}

export default Calendario;
