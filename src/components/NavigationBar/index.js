import React, { useContext } from "react";
import "components/Section/section.css";
import { NavLink } from "react-router-dom";
import { PageContext } from "pages/PageContext";
import Grid from "components/Grid";
import Ul from "components/NavigationBar/Ul";

export default function NavigationBar() {
  const pages = useContext(PageContext);
  return (
    <nav>
      <Ul>
        <Grid>
          {pages.map((name, key) => {
            return (
              <li>
                <NavLink to={name.replace(/ /g, "")} key={key}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </Grid>
      </Ul>
    </nav>
  );
}
