import { darkTheme, styled } from "../../../../stitches.config";
import ChevronArrow from "../../../assets/icons/ChevronArrow";
import CustomLink from "../../common/CustomLink";

const BlogItemStyled = styled("a", {
  textDecoration: "none",
  color: "unset",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "20px",
  transition: "all .15s cubic-bezier(.4,0,.2,1)",

  "&:hover": {
    backgroundColor: "$gray2",
    borderRadius: "15px",
  },

  [`.${darkTheme} &`]: {
    "&:hover": {
      backgroundColor: "$grayDark1",
    },
  },
});

const BlogDate = styled("div", {
  fontSize: "14px",
  display: "flex",
  gap: "10px",
  color: "$gray11",

  "&::before": {
    content: "",
    display: "block",
    width: "2px",
    height: "16px",
    backgroundColor: "$gray6",
  },
});

const BlogTitle = styled("div", {
  fontWeight: 500,
});

const BlogDescription = styled("div", {
  fontSize: "14px",
  color: "$gray11",
});

const ReadBlog = styled(CustomLink, {
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  gap: "5px",
});

const BlogItem = ({ blog: { title, description, url, date } }) => {
  return (
    <BlogItemStyled href={url} target="_blank">
      <BlogDate>{date}</BlogDate>
      <BlogTitle>{title}</BlogTitle>
      <BlogDescription>{description}</BlogDescription>
      <ReadBlog href={url} target="_blank">
        Read blog
        <ChevronArrow />
      </ReadBlog>
    </BlogItemStyled>
  );
};

export default BlogItem;
