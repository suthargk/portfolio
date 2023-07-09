import { createContext, useState } from "react";
import { darkTheme, styled } from "../../../stitches.config";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Project from "./Project";
import Blog from "./Blog";
// import WhatIUses from "./WhatIUses";

const Main = styled("main", {
  [`.${darkTheme} &`]: {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const PortFolio = () => {
  const ThemeContext = createContext("light");
  const [theme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Main>
        <Header />
        <Hero />
        <Blog />
        <About />
        {/* <WhatIUses /> */}
        <Project />
        <Footer />
      </Main>
    </ThemeContext.Provider>
  );
};

export default PortFolio;
