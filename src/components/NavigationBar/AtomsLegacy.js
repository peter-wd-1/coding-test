import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { wrapContext } from "utils";

// TODO need to be refectored into several components in Atoms folder
export const NavUl = wrapContext(styled.ul`
  align-items: center;
  justify-items: ${({ isMobile }) => (isMobile ? "start" : "center")};
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr" : "repeat(6, 1fr)"};
  list-style: none;
  font-family: ${({ themeFont }) => themeFont.sub};
  font-size: ${({ isMobile }) =>
    isMobile
      ? "clamp(1.0rem, 0.6655rem + 8.2759vw, 2.4rem)"
      : "clamp(1rem, -3.5rem + 4.8vw, 1.6rem)"};
  color: black;
  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        padding: 0px;
        padding-top: 100px;
        margin: 0px;
        line-height: 4rem;
      `;
    }
  }}
`);

export const NavLi = styled(NavLink)`
  color: black;
  text-decoration-color: none;
  text-decoration-line: none;
  text-decoration-style: none;
  width: auto;
  padding: 10px;
  opacity: 30%;
  &.active {
    opacity: 100%;
  }
`;
