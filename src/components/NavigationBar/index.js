import React, { useContext } from "react";
import { PageContext } from "pages/PageContext";
import { NavLi, NavUl } from "./AtomsLegacy";
import LoginBar from "components/LoginBar";
import { Li, Nav } from "components/NavigationBar/Atoms";

export default function NavigationBar({ isVisible }) {
  const pages = useContext(PageContext);
  return (
    <Nav isVisible={isVisible}>
      <LoginBar forceRender />
      <NavUl>
        {pages.map((name, i) => {
          return (
            <Li key={i} index={i} isVisible={isVisible}>
              <NavLi to={name.replace(/ /g, "")}>{name}</NavLi>
            </Li>
          );
        })}
      </NavUl>
    </Nav>
  );
}
