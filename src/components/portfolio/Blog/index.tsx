import { styled } from "../../../../stitches.config";
import Work from "../Work";

import BlogList from "./BlogList";

const BlogSection = styled("section", {
  //  backgroundColor: "$blue2",
});
const BlogContainer = styled("div", {
  padding: "50px 0",
  width: "60%",
  margin: "0 auto",

  "@lg": {
    width: "80%",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: "60px",

  "@xl": {
    gap: "20px",
  },

  "@md": {
    flexDirection: "column",
  },
});

const HeadingSecondary = styled("h2", {});

const Blog = () => {
  return (
    <BlogSection>
      <BlogContainer>
        <HeadingSecondary>Blogs</HeadingSecondary>
        <Wrapper>
          <BlogList />
          <Work />
        </Wrapper>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;
