import { styled } from "../../../stitches.config";

const CustomLinkStyle = styled("a", {
  textDecoration: "none",
  color: "$indigo9",
  fontWeight: 600,
});

const CustomLink = ({ children, href = "#", ...rest }) => {
  return (
    <CustomLinkStyle href={href} {...rest}>
      {children}
    </CustomLinkStyle>
  );
};

export default CustomLink;
