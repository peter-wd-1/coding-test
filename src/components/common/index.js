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
  ${({ cols, rows, isMobile }) => {
    return isMobile ? "grid-template-columns: 1fr;" : genGrid(cols, rows);
  }}
  align-items: center;
  justify-items: center;
`);

export const P = wrapContext(styled.p`
  font-family: ${({ themeFont }) => themeFont.sub};
  font-size: 1.6rem;
  /* 1.4rem */
`);

export const H1 = wrapContext(styled.h1`
  display: inline;
  font-family: ${({ themeFont }) => themeFont.primary};
  font-size: 6.1rem;
`);

export const FlexSection = wrapContext(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`);

export const Image = wrapContext(styled.img`
  border-radius: 12px;
  box-shadow: 0 22px 17px rgba(0, 0, 0, 0.15);
`);

export const Button = wrapContext(styled.button`
  font-size: 1.4rem;
  font-family: ${({ themeFont }) => themeFont.sub};
  font-weight: 700;
  width: 18rem;
  height: 5rem;
  background: ${({ themeColor }) => themeColor.mustard};
  border: none;
  border-radius: 12px;
  cursor: pointer;
`);
