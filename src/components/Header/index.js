import React, { useContext } from "react";
import NavigationBar from "components/NavigationBar";
import LoginBar from "components/LoginBar";
import logo from "images/icon.png";
import { ThemeContext } from "components/ThemeContext";
import { HeaderSection, Logo } from "./Atoms";
import styled from "@emotion/styled";
import { wrapContext } from "components/common";

const MenuButton = wrapContext(styled.button`
  left: 0px;
  height: 100%;
  width: 80px;
  position: absolute;
  border: none;
  background: ${({ themeColor }) => themeColor.baige};
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
`);

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
