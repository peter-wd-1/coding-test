import React, { useContext } from "react";
import { PageContext } from "pages/PageContext";
import { NavLi, NavUl } from "./AtomsLegacy";
import LoginBar from "components/LoginBar";
import { Li, Nav } from "components/NavigationBar/Atoms";

export default function NavigationBar({ isVisible, onNavClick }) {
  const pages = useContext(PageContext);
  return (
    <Nav isVisible={isVisible}>
      <NavUl>
        {pages.map((name, i) => {
          return (
            <Li
              key={i}
              index={i}
              isVisible={isVisible}
              onLinkClick={onNavClick}
            >
              <NavLi to={name.replace(/ /g, "")}>{name}</NavLi>
            </Li>
          );
        })}
      </NavUl>
    </Nav>
  );
}
