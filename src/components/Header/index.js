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

export default function Header() {
  return (
    <Section cols={5} rows={2} style={{ background: "white" }}>
      <Logo src={logo} />
      <LoginBar />
      <NavigationBar />
    </Section>
  );
}
