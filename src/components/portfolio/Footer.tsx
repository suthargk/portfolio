import { styled } from "../../../stitches.config";
import LogoLight from "../../assets/icons/LogoLight";
import CustomLink from "../common/CustomLink";

const footerList = [
  {
    id: 1,
    name: "Home",
    path: "#",
    target: false,
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
    target: true,
  },
  {
    id: 4,
    name: "Work",
    path: "#work",
    target: false,
  },
  {
    id: 2,
    name: "Twitter",
    path: "https://twitter.com/suthargk",
    target: true,
  },
  { id: 5, name: "Github", path: "https://github.com/suthargk", target: true },
  {
    id: 6,
    name: "Linkedin",
    path: "https://linkedin.com/in/suthargk",
    target: true,
  },
  {
    id: 7,
    name: "Contact",
    path: "mailto:gaurav.suthar161@gmail.com",
    target: false,
  },
];

const FooterSection = styled("footer", {
  borderTop: `1px solid $gray4`,
});

const FooterContainer = styled("footer", {
  width: "70%",
  margin: "0 auto",
  padding: "30px 0",
});

const FooterList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
});

const FooterItemStyle = styled("li", {
  listStyle: "none",
});

const FooterCopyWrite = styled("div", {
  marginTop: "30px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",

  "& p": {
    display: "flex",
    alignItems: "flex-end",

    "& span": {
      fontWeight: "500",
    },
  },
});

const FooterLink = styled(CustomLink, {
  fontWeight: 400,
  fontSize: "16px",
  color: "hsl(0 0% 43.5%)",
  transition: "all 0.3s",

  "&:hover": {
    color: "hsl(0 0% 9%)",
  },
});

const FooterItem = ({ footer: { path, target, name } }) => {
  return (
    <FooterItemStyle>
      <FooterLink href={path} target={target ? "_blank" : ""}>
        {name}
      </FooterLink>
    </FooterItemStyle>
  );
};

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterList>
          {footerList.map((footer) => {
            return <FooterItem key={footer.id} footer={footer} />;
          })}
        </FooterList>

        <FooterCopyWrite>
          <p>
            <span>© 2023 Gaurav Suthar&nbsp;</span> —— Frontend Engineer
          </p>
          <LogoLight size={30} />
        </FooterCopyWrite>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
