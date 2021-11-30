import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { css } from "@emotion/react";
import { wrapContext } from "utils";
import { variants } from "./animations";

const StyledMotionNav = wrapContext(styled(motion.nav)`
  grid-row: ${({ isMobile }) => (isMobile ? "none" : "2/-1")};
  grid-column: ${({ isMobile }) => (isMobile ? "none" : "3/-1")};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 0px;
  ${({ isMobile, themeColor }) => {
    return isMobile
      ? css`
          position: absolute;
          top: 100px;
          left: 10px;
          background: ${isMobile ? "noen" : themeColor.baige};
          z-index: 10000;
        `
      : "";
  }}
`);

export default function Nav({ children, isVisible, ...props }) {
  console.log({ isVisible });
  return <StyledMotionNav {...props}>{children}</StyledMotionNav>;
}
