import { darkTheme, styled } from "../../../../stitches.config";
import DownArrow from "../../../assets/icons/DownArrow";
import WorkIcon from "../../../assets/icons/WorkIcon";
import CustomLink from "../../common/CustomLink";
import WorkList from "./WorkList";

const WorkContainer = styled("div", {
  width: "50%",
  maxWidth: "400px",
  minWidth: "300px",
  border: `1px solid $gray4`,
  borderRadius: "15px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",

  "@md": {
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },

  [`.${darkTheme} &`]: {
    border: `1px solid $grayDark4`,
  },
});

const WorkHeading = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",

  h4: {
    fontSize: "15px",
    fontWeight: "600",
  },

  svg: {
    color: "$gray9",
  },
});

const WorkButton = styled(CustomLink, {
  color: "$gray12",
  backgroundColor: "$gray2",
  padding: "10px 12px",
  borderRadius: "5px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  transition: "all .2s",
  fontWeight: 500,

  svg: {
    color: "$gray9",
  },

  "&:hover": {
    backgroundColor: "$gray3",
  },

  [`.${darkTheme} &`]: {
    color: "$grayDark12",
    backgroundColor: `$grayDark2`,

    "&:hover": {
      backgroundColor: "$grayDark3",
    },
  },
});

const Work = () => {
  return (
    <WorkContainer>
      <WorkHeading>
        <WorkIcon />
        <h4>Work</h4>
      </WorkHeading>
      <WorkList />
      <WorkButton href="https://linkedin.com/in/suthargk" target="_blank">
        More on Linkedin
        <DownArrow />
      </WorkButton>
    </WorkContainer>
  );
};

export default Work;
