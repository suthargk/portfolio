import { styled } from "../../../stitches.config";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";

const Main = styled("main", {});

const PortFolio = () => {
  return (
    <Main>
      <Header />
      <Hero />
      <About />
      <Work />
      <Footer />
    </Main>
  );
};

export default PortFolio;
