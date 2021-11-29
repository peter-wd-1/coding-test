import React from "react";
import NavigationBar from "components/NavigationBar";
import { Section } from "components/common";
import LoginBar from "components/LoginBar";
import logo from "images/icon.png";
import styled from "@emotion/styled";

const Logo = styled.img`
  grid-row: 1/3;
  grid-column: 1/2;
`;

const HeaderSection = styled(Section)`
  background: white;
`;

export default function Header() {
  return (
    <HeaderSection cols={5} rows={2}>
      <Logo src={logo} />
      <LoginBar />
      <NavigationBar />
    </HeaderSection>
  );
}
