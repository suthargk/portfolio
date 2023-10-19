import { styled } from "../../../stitches.config";

const CustomLinkStyle = styled("a", {
  textDecoration: "none",
  color: "$indigo9",
  fontWeight: 600,
  cursor: "pointer",
});

interface MyComponentProps {
  children: React.ReactNode;
  href: string;
  target: string;
}

const CustomLink = ({ children, href = "#", ...rest }: MyComponentProps) => {
  return (
    <CustomLinkStyle href={href} {...rest}>
      {children}
    </CustomLinkStyle>
  );
};

export default CustomLink;
