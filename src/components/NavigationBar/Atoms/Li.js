import React from "react";
import { variants } from "../animation";

export default function Li({ children, ...props }) {
  return (
    <motion.li
      custom={props.key}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.li>
  );
}
