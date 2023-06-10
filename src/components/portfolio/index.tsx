import { createContext, useState } from "react";
import { darkTheme, styled } from "../../../stitches.config";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";

const Main = styled("main", {
  [`.${darkTheme} &`]: {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const PortFolio = () => {
  const ThemeContext = createContext("light");
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Main>
        <Header />
        <Hero />
        <About />
        <Work />
        <Footer />
      </Main>
    </ThemeContext.Provider>
  );
};

export default PortFolio;
