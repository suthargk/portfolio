import { useEffect, useState } from "react";
import { darkTheme, styled } from "../../../stitches.config";
import LogoLight from "../../assets/icons/LogoLightIcon";
import SunIcon from "../../assets/icons/SunIcon";

import Button from "../common/Button";
import MoonIcon from "../../assets/icons/MoonIcon";
import { setDarkModeFunc } from "./helper";

const Nav = styled("nav", {
  width: "60%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "inherit",

  "@lg": {
    width: "80%",
  },
});

const HeaderStyle = styled("header", {
  position: "fixed",
  top: 0,
  zIndex: 10,
  width: "100%",
  height: "100px",
  transition: "height 0.2s",

  "&[data-active='true']": {
    backdropFilter: "blur(8px)",
    backgroundColor: "hsl(0 0% 99%, 0.1)",
    height: "70px",
    borderBottom: "1px solid hsl(0 0% 95.1%)",

    "@xs": {
      height: "80px",
    },
  },

  "@xs": {
    height: "80px",
  },

  [`.${darkTheme} &`]: {
    transition: "height 0.3s",
    borderColor: "#f8fafc0f",
  },
});

const SunButton = styled(Button, {
  outline: "2px solid transparent",
  transition: "all 0.3s ease-out",
  backgroundColor: "hsl(210 16.7% 97.6%)",
  padding: "10px",

  "&:hover": {
    outline: "2px solid hsl(226 70% 55.5%)",
    transform: "scale(0.95)",
    boxShadow: "0 2px 40px -4px hsl(226 75.4% 74.5%)",
  },

  "&:hover svg": {
    color: "hsl(226 70% 55.5%)",
  },

  [`.${darkTheme} &`]: {
    backgroundColor: "$blueDark1",
  },
});

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  useEffect(() => {
    window.localStorage.setItem("isDarkMode", JSON.stringify(darkMode));
    setDarkModeFunc(darkMode, darkTheme);
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkModeFunc(darkMode, darkTheme);
    setDarkMode(!darkMode);
    window.localStorage.setItem("isDarkMode", JSON.stringify(darkMode));
  };

  return (
    <HeaderStyle id="header">
      <Nav>
        <a href="#">
          <LogoLight size={40} />
        </a>
        <SunButton onClick={handleDarkMode}>
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </SunButton>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
