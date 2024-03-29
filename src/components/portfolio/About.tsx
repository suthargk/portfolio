import { darkTheme, styled } from "../../../stitches.config";
import DownloadIcon from "../../assets/icons/DownloadIcon";
import CustomLink from "../common/CustomLink";

const AboutSection = styled("section", {
  backgroundColor: "$blue2",
  padding: "50px 0",

  [`.${darkTheme} &`]: {
    backgroundColor: "$indigoDark1",
  },
});

const AboutContainer = styled("div", {
  width: "60%",
  margin: "0 auto",

  "@lg": {
    width: "80%",
  },
});
const HeadingSecondary = styled("h2", {});

const AboutContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "32px",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "40px 0",

  "@md": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

const ResumeLink = styled(CustomLink, {
  backgroundColor: "hsl(226 70% 55.5%)",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "10px",
});

const About = () => {
  console.log("import.meta.env.BASE_URL", import.meta.env.VITE_APP_PATH);
  return (
    <AboutSection id="about">
      <AboutContainer>
        <HeadingSecondary>About me</HeadingSecondary>
        <AboutContent>
          <div>
            I specialize in building responsive and interactive user interfaces
            using modern frontend frameworks such as React. I have a deep
            understanding of React's component-based architecture and have
            successfully implemented complex UIs using React's state management
            and lifecycle methods. In addition to my expertise in frontend
            frameworks, I am proficient in CSS preprocessors like Sass and Less,
            which enable me to create scalable and maintainable stylesheets.
          </div>
          <div>
            My main focus was building high quality, and well-designed
            enterprise products with React, Redux and Styled Components. I
            always strive for clean, well tested and accessible UI projects. I
            am also experienced in integrating frontend applications with
            backend APIs, utilizing technologies such as REST and GraphQL to
            fetch and manipulate data. I am familiar with working in
            collaborative environments, using version control systems like Git
            to manage codebase efficiently and collaborate with team members.
          </div>
        </AboutContent>
        <ResumeLink href="/resume.pdf" target="_blank">
          Resume.pdf
          <DownloadIcon />
        </ResumeLink>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
