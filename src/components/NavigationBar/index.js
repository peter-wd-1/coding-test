import React, { useContext } from "react";
import { PageContext } from "pages/PageContext";
import { NavLi, NavUl, Nav } from "./Atoms";
import LoginBar from "components/LoginBar";
import { motion } from "framer-motion";
import { Li } from "./Atoms";

export default function NavigationBar() {
  const pages = useContext(PageContext);
  return (
    <Nav>
      <LoginBar forceRender />
      <NavUl>
        {pages.map((name, key) => {
          return (
            <motion.li
              custom={key}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <NavLi to={name.replace(/ /g, "")} key={key}>
                {name}
              </NavLi>
            </motion.li>
          );
        })}
      </NavUl>
    </Nav>
  );
}
