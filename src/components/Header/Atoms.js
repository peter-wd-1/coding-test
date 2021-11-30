import React from "react";
import styled from "@emotion/styled";
import { Section } from "components/common";
import { wrapContext } from "utils";

export const MenuButton = wrapContext(styled.button`
  left: 0px;
  height: 100%;
  width: 80px;
  position: absolute;
  border: none;
  background: ${({ themeColor }) => themeColor.baige};
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
`);

export const Logo = wrapContext(styled.img`
  grid-row: 1/6;
  grid-column: 1/2;
  height: calc(4vw + 30px);
  padding: ${({ isMobile }) =>
    isMobile ? "10px 0 10px 0" : " 10px 0 10px 20%"};
  justify-self: ${({ isMobile }) => (isMobile ? "center" : "start")};
`);

export const HeaderSection = styled(Section)`
  position: relative;
  background: white;
`;
