import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { wrapContext } from "utils";
import { navBackVariants as variants } from "./animations";

const StyledMotionSvg = wrapContext(styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  ${({ isMobile }) => (isMobile ? "" : "display:none;")}
`);

export default function NavBackground({ isVisible }) {
  return (
    <StyledMotionSvg
      animate={{
        display: isVisible ? "visible" : "none",
        transition: {
          delay: isVisible ? 0 : 1,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 20"
    >
      <motion.path
        d="M 0 0 L 12 0 C 16 20 11 22 0 21 L 0 21Z"
        fill="#95050A"
        variants={variants}
        animate={isVisible ? "open" : "close"}
        transition={{
          delay: isVisible ? 0 : 0.07,
          type: "spring",
          stiffness: 400,
          damping: 33,
        }}
      />
      <motion.path
        d="M 0 0 L 12 0 C 16 20 11 22 0 21 L 0 21Z"
        fill="#CB0007"
        variants={variants}
        animate={isVisible ? "open" : "close"}
        transition={{
          delay: isVisible ? 0.2 : 0.03,
          type: "spring",
          stiffness: 400,
          damping: 33,
        }}
      />
      <motion.path
        d="M 0 0 L 12 0 C 16 20 11 22 0 21 L 0 21Z"
        fill="#F4F2EB"
        variants={variants}
        animate={isVisible ? "open" : "close"}
        transition={{
          delay: isVisible ? 0.3 : 0,
          type: "spring",
          stiffness: 400,
          damping: 33,
        }}
      />
    </StyledMotionSvg>
  );
}
