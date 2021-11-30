import styled from "@emotion/styled";
import { motion } from "framer-motion";

const path = [
  "M 0 0 L 15 0 C 17 21 12 21 0 19 L 0 19",
  "M 0 0 L 12 0 C 12 0 7 0 0 0 L 0 0",
];

const variants = {
  open: {
    d: path[0],
  },
  close: {
    d: path[1],
  },
};

const StyledMotionSvg = styled(motion.svg)`
  position: absolute;
  top: -200px;
  left: 20px;
  z-index: -1;
  height: 130vh;
  width: auto;
  overflow: visible;
`;

export default function NavBackground({ isVisible }) {
  return (
    <StyledMotionSvg xmlns="http://www.w3.org/2000/svg" viewBox="1.5 0 12 25">
      <motion.path
        d="M 0 0 L 12 0 C 16 20 11 22 0 21 L 0 21Z"
        fill="#95050A"
        variants={variants}
        animate={isVisible ? "open" : "close"}
        transition={{
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
          delay: 0.2,
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
          delay: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 33,
        }}
      />
    </StyledMotionSvg>
  );
}
