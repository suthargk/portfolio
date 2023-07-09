import { useEffect } from "react";
import { darkTheme, styled } from "../../../stitches.config";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import Button from "../common/Button";
import CustomLink from "../common/CustomLink";

const HeroWrapper = styled("section", {});

const HeroStyle = styled("div", {
  width: "60%",
  margin: "0 auto",
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  "@lg": {
    width: "80%",
  },

  "@sm": {
    height: "80vh",
    justifyContent: "flex-end",
  },

  [`.${darkTheme} &`]: {},
});

const HeadingPrimary = styled("h1", {
  lineHeight: "1.6",
  fontSize: "34px",

  "@xs": {
    fontSize: "28px",
  },
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px",

  "@xs": {
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
});

const HeroButtonGroup = styled("div", {
  display: "flex",
  gap: "10px",

  "@xs": {
    flexDirection: "column",
  },
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

  gap: "2px",
  borderRadius: "unset",
  backgroundColor: "unset",
  textDecoration: "underline",

  "@xs": {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
});

const TwitterLinkContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  "@xs": { display: "none" },
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
    <HeroWrapper>
      <HeroStyle id="hero-page">
        <HeadingPrimary>
          <span style={{ color: "hsl(226 70.0% 55.5%)" }}>
            Hello! I'm Gaurav Suthar 🤖{" "}
          </span>
          <span>
            , a frontend engineer 🧑‍💻 working with React ⚛️ and Redux.{" "}
          </span>
          <span>I'm very enthusiastic about frontend technologies.</span>
        </HeadingPrimary>
        <Container>
          <HeroButtonGroup>
            <HeroButton
              onClick={() => {
                const aboutPage = document.querySelector("#about");
                aboutPage?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              About me
            </HeroButton>
            <HeroButton
              onClick={() => {
                const ProjectPage = document.querySelector("#project");
                ProjectPage?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Project
            </HeroButton>
          </HeroButtonGroup>
          <TwitterLinkContainer>
            <TwitterLink href="https://twitter.com/suthargk" target="__blank">
              <TwitterIcon />
              <span>@Suthargk</span>
            </TwitterLink>
          </TwitterLinkContainer>
        </Container>
      </HeroStyle>
    </HeroWrapper>
  );
};

export default Hero;
