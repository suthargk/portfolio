import { styled } from "../../../stitches.config";
import LogoLight from "../../assets/icons/LogoLight";
import { Sun } from "../../assets/icons/Sun";
import Button from "../common/Button";

const Nav = styled("nav", {
  width: "70%",
  margin: "0 auto",
  padding: "10px",
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
});

const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <a href="#">
          <LogoLight />
        </a>
        <Button>
          <Sun />
        </Button>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
