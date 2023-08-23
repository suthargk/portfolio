import { darkTheme, styled } from "../../../stitches.config";
import CustomLink from "../common/CustomLink";
import { projectList } from "./utils";

const ProjectListStyle = styled("ul", {
  margin: "40px 0",
});

const ProjectItemStyle = styled("li", {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "2fr 0.8fr",
  gap: "15px",

  "&:not(:last-child)": {
    marginBottom: "50px",
  },

  "@md": {
    gridTemplateColumns: "1.5fr 1fr",
    gap: "20px",
  },

  "@sm": {
    gridTemplateColumns: "1fr",
  },
});
const ProjectDescription = styled("span", {
  color: "$gray12",
  fontSize: "18px",

  [`.${darkTheme} &`]: {
    color: "$grayDark12",
  },
});

const ProjectTitleContainer = styled("div", {
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

const ProjectTitle = styled("span", {
  fontSize: "15px",
  position: "relative",

  "&::before": {
    display: "block",
    content: "",
    width: "1px",
    height: "15px",
    backgroundColor: "$indigo9",
    marginLeft: "-15px",
    position: "absolute",
    top: "10%",
  },
});

const ProjectStatus = styled("div", {
  padding: "4px 8px",
  border: "1px  $indigo9",
  borderRadius: "10px",
  boxShadow: "0 0 8px 1px #3e63dd",
  color: "black",
  fontWeight: 500,
  fontSize: "10px",

  [`.${darkTheme} &`]: {
    color: "$grayDark12",
    boxShadow: "0 0 16px 1px #3e63dd",
  },
});

const Figure = styled("figure", {
  aspectRatio: 2 / 1,
  position: "relative",
});

const Picture = styled("picture", {
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  width: "100%",
  height: "100%",
  display: "flex",
  maxWidth: "none",
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

interface ProjectItemProps {
  item: {
    path: string;
    name: string;
    description: string;
    imgSrc: string;
  };
}

const ProjectItem = ({ item }: ProjectItemProps) => {
  return (
    <ProjectItemStyle>
      <CustomLink href={item.path} target="_blank">
        <span style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <ProjectTitleContainer>
            <ProjectTitle>{item.name}</ProjectTitle>
            {item.status === 0 ? (
              <ProjectStatus children="Coming Soon" />
            ) : null}
          </ProjectTitleContainer>
          <ProjectDescription>{item.description}</ProjectDescription>
        </span>
      </CustomLink>
      <Figure>
        <CustomLink href={item.path} target="_blank">
          <Picture>
            <Image src={item.imgSrc} />
          </Picture>
        </CustomLink>
      </Figure>
    </ProjectItemStyle>
  );
};
const ProjectList = () => {
  return (
    <ProjectListStyle className="Project-list">
      {projectList.map((item) => {
        return <ProjectItem key={item.id} item={item} />;
      })}
    </ProjectListStyle>
  );
};

export default ProjectList;
