import React from "react";
import Hero from "./Hero";
import { styled } from "../../../../stitches.config";

const CalendarioStyled = styled("div", {
  backgroundColor: "black",
  padding: "0 80px",
  "@lg": {
    padding: "0 40px",
  },

  "@md": {
    padding: "0 20px",
  },
});

const Calendario = () => {
  return (
    <CalendarioStyled>
      <Hero />
    </CalendarioStyled>
  );
};

export default Calendario;
