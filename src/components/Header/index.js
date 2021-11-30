import React, { useContext, useState } from "react";
import NavigationBar from "components/NavigationBar";
import LoginBar from "components/LoginBar";
import logo from "images/icon.png";
import { ThemeContext } from "components/ThemeContext";
import { Logo } from "./AtomsLegucy";
import { MenuButton, HeaderSection } from "./Atoms";

export default function Header() {
  const theme = useContext(ThemeContext);
  const [menuClicked, setMenuClicked] = useState(true);
  console.log({ menuClicked });
  return (
    <HeaderSection cols={theme.isMobile ? 1 : 5} rows={theme.isMobile ? 1 : 2}>
      <MenuButton menuClicked={menuClicked} onMenuClicked={setMenuClicked}>
        MENU
      </MenuButton>
      <Logo src={logo} />
      <LoginBar isVisible={menuClicked} />
      <NavigationBar isVisible={menuClicked} onNavClick={setMenuClicked} />
    </HeaderSection>
  );
}
