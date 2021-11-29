import React, { useContext } from "react";
import { PageContext } from "pages/PageContext";
import { NavLi, NavUl, Nav } from "./Atoms";

export default function NavigationBar() {
  const pages = useContext(PageContext);
  return (
    <Nav>
      <NavUl>
        {pages.map((name, key) => {
          return (
            <li>
              <NavLi to={name.replace(/ /g, "")} key={key}>
                {name}
              </NavLi>
            </li>
          );
        })}
      </NavUl>
    </Nav>
  );
}
