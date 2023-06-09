import { styled } from "../../../stitches.config";
import LogoLight from "../../assets/icons/LogoLight";
import Sun from "../../assets/icons/Sun";

import Button from "../common/Button";

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
  height: "100px",
});

const Header = () => {
  return (
    <HeaderStyle id="header">
      <Nav>
        <a href="#">
          <LogoLight size={40} />
        </a>
        <Button
          className="light-mode--button"
          style={{ backgroundColor: "hsl(210 16.7% 97.6%)", padding: "10px" }}
        >
          <Sun />
        </Button>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
