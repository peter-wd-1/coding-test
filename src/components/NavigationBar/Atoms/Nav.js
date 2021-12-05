import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { wrapContext } from "utils";
import { variants } from "./animations";
import { ThemeContext } from "components/ThemeContext";

const StyledMotionNav = wrapContext(styled(motion.nav)`
  grid-row: ${({ isMobile }) => (isMobile ? "" : "2/-1")};
  grid-column: ${({ isMobile }) => (isMobile ? "" : "3/-1")};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 0px;
  ${({ isMobile, themeColor, firstLoading, isVisible }) => {
    if (isMobile) {
      return css`
        position: absolute;
        top: 0px;
        left: 0px;
        background: ${isMobile ? "noen" : themeColor.baige};
        z - index: 10000;
        display: ${firstLoading && !isVisible ? "none" : ""};
      `;
    }
  }}
`);

export default function Nav({ children, isVisible, ...props }) {
  const themeContext = useContext(ThemeContext);
  const [isInital, setIsInitial] = useState(false);
  useEffect(() => {
    //first rendering  mobile page
    setIsInitial(themeContext.isMobile);
  }, [themeContext.isMobile]);

  useEffect(() => {
    //after menu clicked it's no longer inital rednering
    if (isVisible) setIsInitial(false);
  }, [isVisible]);

  return (
    <StyledMotionNav firstLoading={isInital} isVisible={isVisible} {...props}>
      {children}
    </StyledMotionNav>
  );
}
