import React, { useContext } from "react";
import { variants } from "./animations";
import { motion } from "framer-motion";
import { ThemeContext } from "components/ThemeContext";

export default function Li({
  children,
  index,
  onLinkClick,
  isVisible,
  ...props
}) {
  const themeContext = useContext(ThemeContext);
  return (
    <motion.li
      onClick={() => {
        if (themeContext.isMobile) onLinkClick(false);
      }}
      custom={index}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </motion.li>
  );
}
