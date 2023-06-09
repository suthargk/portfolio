import { useEffect } from "react";
import { styled } from "../../../stitches.config";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink";

const HeroStyle = styled("div", {
  width: "70%",
  margin: "0 auto",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@lg": {
    width: "80%",
  },

  "@sm": {
    height: "100vh",
  },
});

const HeadingPrimary = styled("h1", {
  lineHeight: "1.6",
  fontSize: "34px",
});

const Container = styled("div", {
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-between",
});

const HeroButton = styled(Button, {
  padding: "12px 18px",
  backgroundColor: "hsl(223 92.9% 95%)",
  borderRadius: "10px",
  textDecoration: "none",
  color: "$indigo9",
  fontWeight: 600,
  fontSize: "16px",
});

const TwitterLink = styled(CustomLink, {
  display: "flex",
  alignItems: "center",
  gap: "2px",
  borderRadius: "unset",
  backgroundColor: "unset",
  textDecoration: "underline",
});

const Hero = () => {
  useEffect(() => {
    const obsCallback = (entries) => {
      const [entry] = entries;
      const header = document.querySelector("#header");

      if (!entry.isIntersecting) {
        header?.setAttribute("data-active", "true");
      } else {
        header?.setAttribute("data-active", "false");
      }
    };
    const obsOPtion = {
      root: null,
      threshold: 0.9,
    };
    const heroPage = document.querySelector("#hero-page");

    const observer = new IntersectionObserver(obsCallback, obsOPtion);
    observer.observe(heroPage);
  }, []);

  return (
    <HeroStyle id="hero-page">
      <HeadingPrimary>
        <span style={{ color: "hsl(226 70.0% 55.5%)" }}>
          Hello! I'm Gaurav Suthar 🤖{" "}
        </span>
        <span>, a frontend engineer 🧑‍💻 working with React ⚛️ and Redux. </span>
        <span>I'm very enthusiastic about frontend technologies.</span>
      </HeadingPrimary>
      <Container>
        <div style={{ display: "flex", gap: "10px" }}>
          <HeroButton
            onClick={() => {
              const aboutPage = document.querySelector("#about");
              aboutPage?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About me
          </HeroButton>
          <HeroButton
            onClick={() => {
              const aboutPage = document.querySelector("#work");
              aboutPage?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Work
          </HeroButton>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TwitterLink href="https://twitter.com/suthargk" target="__blank">
            <TwitterIcon />
            <span>@Suthargk</span>
          </TwitterLink>
        </div>
      </Container>
    </HeroStyle>
  );
};

export default Hero;
