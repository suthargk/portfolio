import { styled } from "../../../stitches.config";
import LogoLight from "../../assets/icons/LogoLight";
import SunIcon from "../../assets/icons/SunIcon";

import Button from "../common/Button";
import CustomLink from "../common/CustomLink";

const Nav = styled("nav", {
  width: "70%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "inherit",
});

const HeaderStyle = styled("header", {
  position: "fixed",
  top: 0,
  zIndex: 10,
  width: "100%",
  height: "120px",
  transition: "height 0.2s",

  "&[data-active='true']": {
    backdropFilter: "blur(8px)",
    backgroundColor: "hsl(0 0% 99%, 0.1)",
    height: "70px",
    border: "1px solid hsl(0 0% 95.1%)",
  },
});

const SunButton = styled(Button, {
  outline: "2px solid transparent",
  transition: "all 0.2s ease-out",
  backgroundColor: "hsl(210 16.7% 97.6%)",
  padding: "10px",

  "&:hover": {
    outline: "2px solid hsl(226 70% 55.5%)",
    transform: "scale(0.95)",
    padding: "8px",
    boxShadow: "0 2px 40px -4px hsl(226 75.4% 74.5%)",
  },

  "& svg": {
    color: "hsl(226 70% 55.5%)",
  },
});

const Header = () => {
  return (
    <HeaderStyle id="header">
      <Nav>
        <a href="#">
          <LogoLight size={40} />
        </a>
        <SunButton>
          <SunIcon />
        </SunButton>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
