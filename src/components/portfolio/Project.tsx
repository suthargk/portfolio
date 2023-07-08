import { darkTheme, styled } from "../../../stitches.config";
import ProjectList from "./ProjectList";

const ProjectSection = styled("section", {});

const ProjectContainer = styled("div", {
  width: "60%",
  margin: "0 auto",
  position: "relative",
  padding: "50px 0",

  "&::before": {
    display: "block",
    content: "",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "1px",
    backgroundImage: "linear-gradient($indigo5 50%, rgba(255,255,255,0) 0%)",
    backgroundPosition: "left",
    backgroundSize: "1px 10px",
    backgroundRepeat: "repeat-y",
    left: "-15px",

    [`.${darkTheme} &`]: {
      backgroundImage:
        "linear-gradient($indigoDark1 50%, rgba(255,255,255,0) 0%)",
    },
  },

  "@lg": {
    width: "80%",
  },
});
const HeadingSecondary = styled("h2", {});

const Project = () => {
  return (
    <ProjectSection id="project">
      <ProjectContainer>
        <HeadingSecondary>Projects</HeadingSecondary>
        <ProjectList />
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Project;
