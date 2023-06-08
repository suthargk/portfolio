import { styled } from "../../../stitches.config";
import Header from "./Header";
import Hero from "./Hero";

const Main = styled("main", {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PortFolio = () => {
  return (
    <Main>
      <Header />
      <Hero />
    </Main>
  );
};

export default PortFolio;
