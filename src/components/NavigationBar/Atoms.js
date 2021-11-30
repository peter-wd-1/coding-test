import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { wrapContext } from "utils";

export const NavUl = wrapContext(styled.ul`
  align-items: center;
  justify-items: ${({ isMobile }) => (isMobile ? "start" : "center")};
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr" : "repeat(6, 1fr)"};
  list-style: none;
  font-family: ${({ themeFont }) => themeFont.sub};
  font-size: clamp(1rem, -3.5rem + 4.8vw, 1.6rem);
  color: black;
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

const genMobileNav = () => {
  return;
};

export const Nav = wrapContext(styled(motion.nav)`
  grid-row: ${({ isMobile }) => (isMobile ? "none" : "2/-1")};
  grid-column: ${({ isMobile }) => (isMobile ? "none" : "3/-1")};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 0px;
  ${({ isMobile, themeColor }) => {
    return isMobile
      ? css`
          position: absolute;
          top: 100px;
          left: 5vw;
          background: ${themeColor.baige};
        `
      : "";
  }}
`);
