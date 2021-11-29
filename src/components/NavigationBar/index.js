import React, { useContext } from "react";
import { PageContext } from "pages/PageContext";
import { NavLi, NavUl, Nav } from "./Atoms";
import LoginBar from "components/LoginBar";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
    },
  }),
};

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
