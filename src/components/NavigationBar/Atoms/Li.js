import React from "react";
import { variants } from "./animations";
import { motion } from "framer-motion";

export default function Li({ children, index, isVisible, ...props }) {
  return (
    <motion.li
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
