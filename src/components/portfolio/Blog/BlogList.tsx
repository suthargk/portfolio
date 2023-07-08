import { styled } from "../../../../stitches.config";
import { blogList } from "../utils";
import BlogItem from "./BlogItem";

const BlogListContainer = styled("div", {
  width: "60%",
  marginTop: "20px",

  "@xl": {
    width: "50%",
  },

  "@lg": {
    width: "100%",
  },
});

const BlogList = () => {
  return (
    <BlogListContainer>
      {blogList.map((blog) => {
        return <BlogItem key={blog.id} blog={blog} />;
      })}
    </BlogListContainer>
  );
};

export default BlogList;
