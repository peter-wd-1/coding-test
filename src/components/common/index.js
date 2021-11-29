import styled from "@emotion/styled";
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
export const ContextWrapper = ({ Wrappee, ...props }) => {
  const themeContext = useContext(ThemeContext);
  return <Wrappee {...themeContext} {...props} />;
};

export const wrapContext = (Wrappee) => (props) => {
  return <ContextWrapper Wrappee={Wrappee} {...props} />;
};

// NOTE this is generating grid with cols rows from props. I thought I would mostly work with 1fr
function genGrid(x = 1, y = 1) {
  let grid = ["1fr", "1fr"];
  [x, y].map((i, j) => {
    Array.from({ length: i - 1 }, () => {
      grid[j] = grid[j].concat(" ", "1fr");
    });
  });
  const col = "grid-template-columns: ".concat(grid[0], ";");
  const row = "grid-template-rows: ".concat(grid[1], ";");
  return col.concat(row);
}
export const Section = wrapContext(styled.div`
  display: grid;
  ${({ cols, rows }) => genGrid(cols, rows)}
  align-items: center;
  justify-items: center;
`);

export const P = wrapContext(styled.p`
  font-family: ${({ themeFont }) => themeFont.sub};
`);

export const H1 = wrapContext(styled.h1`
  display: inline;
  font-family: ${({ themeFont }) => themeFont.primary};
  font-size: 4.5rem;
`);
