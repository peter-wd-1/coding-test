import styled from "@emotion/styled";
import { wrapContext, genGrid } from "utils";

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
  border-radius: ${({ isMobile }) => (isMobile ? "0" : "12px")};
  cursor: pointer;
`);
