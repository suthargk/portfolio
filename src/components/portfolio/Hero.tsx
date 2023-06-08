import { styled } from "../../../stitches.config";

const HeroStyle = styled("div", {});

const HeadingPrimary = styled("h1", {
  width: "70%",
  textAlign: "center",
});

const Hero = () => {
  return (
    <HeadingPrimary>
      Hello 🤖, I'm Gaurav Suthar, a Mumbai based frontend engineer 🧑‍💻 working
      with React ⚛️.
    </HeadingPrimary>
  );
};

export default Hero;
