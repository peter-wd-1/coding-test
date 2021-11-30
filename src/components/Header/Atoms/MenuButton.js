import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { wrapContext } from "utils";

export const StyledMotionMenuButton = wrapContext(styled(motion.button)`
  left: 0px;
  height: 100%;
  width: 60px;
  position: absolute;
  border: none;
  color: white;
  background: ${({ themeColor }) => themeColor.red};
  display: ${({ isMobile }) => (isMobile ? "block" : "none")};
`);

export default function MenuButton({
  children,
  onMenuClicked,
  menuClicked,
  ...props
}) {
  return (
    <StyledMotionMenuButton
      onClick={() => {
        onMenuClicked(!menuClicked);
      }}
      {...props}
    >
      {children}
    </StyledMotionMenuButton>
  );
}
