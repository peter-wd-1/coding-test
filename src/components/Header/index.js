import React, { useContext } from "react";
import NavigationBar from "components/NavigationBar";
import LoginBar from "components/LoginBar";
import logo from "images/icon.png";
import { ThemeContext } from "components/ThemeContext";
import { HeaderSection, Logo, MenuButton } from "./Atoms";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <HeaderSection cols={theme.isMobile ? 1 : 5} rows={theme.isMobile ? 1 : 2}>
      <MenuButton>MENU</MenuButton>
      <Logo src={logo} />
      <LoginBar />
      <NavigationBar />
    </HeaderSection>
  );
}
