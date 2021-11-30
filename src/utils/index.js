import { motion } from "framer-motion";
import { ThemeContext } from "components/ThemeContext";
import { useContext } from "react";

// NOTE I decided to use HOC rather then using below code
// function PWrapper(props) {
//   const themeContext = useContext(ThemeContext);
//   const P = styled.p`
//     font-family: ${({ themeFont }) => themeFont.sub};
//   `;
//   return <P {...themeContext} {...props} />;
// }

// HOC code for wrapping theme context
const ContextWrapper = ({ Wrappee, ...props }) => {
  const themeContext = useContext(ThemeContext);
  return <Wrappee {...themeContext} {...props} />;
};

export const wrapContext = (Wrappee) => {
  return (props) => {
    return <ContextWrapper Wrappee={Wrappee} {...props} />;
  };
};

// HOC code for wrapping motion component
const MotionWrapper = ({ Wrappee, ...props }) => {
  const MotionWrapped = motion(Wrappee);
  return <MotionWrapped {...props} />;
};

export const wrapMotion = (Wrappee) => (props) => {
  return <MotionWrapper Wrappee={Wrappee} {...props} />;
};

// NOTE this is generating grid with cols rows from props. I thought I would mostly work with 1fr
export const genGrid = (x = 1, y = 1) => {
  let grid = ["1fr", "1fr"];
  [x, y].map((i, j) => {
    Array.from({ length: i - 1 }, () => {
      grid[j] = grid[j].concat(" ", "1fr");
    });
  });
  const col = "grid-template-columns: ".concat(grid[0], ";");
  const row = "grid-template-rows: ".concat(grid[1], ";");
  return col.concat(row);
};
