import styled from "@emotion/styled";
import { ThemeContext } from "components/ThemeContext";
import { useContext } from "react";

// NOTE for history : I decided to use HOC rather then using below code
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

const StyledP = styled.p`
  font-family: ${({ themeFont }) => themeFont.sub};
`;

const StyledH1 = styled.h1`
  display: inline;
  font-family: ${({ themeFont }) => themeFont.primary};
  font-size: 4.5rem;
`;

const StyledSection = styled.div``;

export const P = wrapContext(StyledP);
export const H1 = wrapContext(StyledH1);
