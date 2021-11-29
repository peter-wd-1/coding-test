import styled from "@emotion/styled";
import { wrapContext } from "components/common";
import { NavLink } from "react-router-dom";

export const NavUl = wrapContext(styled.ul`
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr" : "repeat(6, 1fr)"};
  list-style: none;
  font-family: ${({ themeFont }) => themeFont.sub};
  font-size: 1.6rem;
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

export const Nav = styled.nav`
  grid-column: 3/-1;
  grid-row: 2/-1;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 0px;
`;
