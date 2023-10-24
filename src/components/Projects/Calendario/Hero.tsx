import React from "react";
import { styled } from "../../../../stitches.config";
import project_image from "../../../assets/images/project_image.png";

const HeroStyled = styled("div", {
  height: "100vh",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@md": {
    height: "auto",
    flexDirection: "column",
    padding: "80px 0",
    gap: "50px",
  },
});
const Heading = styled("h1", {
  fontSize: "50px",
  userSelect: "none",

  "@md": {
    fontSize: "40px",
    textAlign: "center",
  },

  "@xs": {
    display: "30px",
  },
});
const HeadingMain = styled("span", {});

const HeadingMainPrimary = styled("span", {
  background:
    "linear-gradient(270deg,  rgb(248, 208, 255) 0%, rgb(255,255,255) 100%, rgb(24, 24, 27) 69.8568%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const HeadingMainSecondary = styled("span", {
  color: "$grayDark12",
});

const HeadingMainTertiary = styled("span", {
  background:
    "linear-gradient(340deg,  rgb(112, 88, 208) 4.08744%, rgb(248, 208, 255) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const HeadingDescription = styled("span", {
  color: "#fff",
  fontSize: "16px",
  fontWeight: 500,
  width: "70%",
  display: "block",
  marginTop: "15px",
  lineHeight: "1.4",

  "@md": {
    width: "100%",
  },
});

const ExtensionLink = styled("a", {
  padding: "14px 18px",
  display: "inline-block",
  color: "#fff",
  backgroundColor: "$violetDark8",
  marginTop: "40px",
  borderRadius: "50px",
  fontWeight: 600,
  fontSize: "18px",
  textDecoration: "none",
  transition: "all .3s",
  textAlign: "center",

  "@xs": {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: "$violetDark9",
    transform: "scale(1.1)",
  },
});

const ProjectImageContainer = styled("div", {
  display: "block",
  minWidth: "300px",
  borderRadius: "10px",
  overflow: "hidden",
  height: "520px",
});

const ProjectImage = styled("img", {
  width: "100%",
  height: "100%",
});

const HeadingContainer = styled("div", {
  marginTop: "-80px",

  "@md": {
    textAlign: "center",
  },

  "@lg": {
    marginTop: 0,
  },
});

const Hero = () => {
  return (
    <HeroStyled>
      <HeadingContainer>
        <Heading>
          <HeadingMain>
            <HeadingMainPrimary>
              Transform your calendar experience
            </HeadingMainPrimary>
            <div>
              <HeadingMainSecondary> with our </HeadingMainSecondary>
              <HeadingMainTertiary>Chrome extension.</HeadingMainTertiary>
            </div>
          </HeadingMain>
          <HeadingDescription>
            This powerful Chrome extension simplifies your calendar and ensures
            you never miss an important date again.
          </HeadingDescription>
        </Heading>
        <ExtensionLink href="">Add to Chrome - It's free</ExtensionLink>
      </HeadingContainer>

      <ProjectImageContainer>
        <ProjectImage src={project_image} />
      </ProjectImageContainer>
    </HeroStyled>
  );
};

export default Hero;
