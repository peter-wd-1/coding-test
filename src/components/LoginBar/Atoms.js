import styled from "@emotion/styled";
import { wrapContext } from "utils";
import { Section } from "components/common";
import loginIcon from "images/loginIcon.svg";
import { css } from "@emotion/react";

export const LoginSection = wrapContext(styled.div`
  display: flex;
  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 80px;
        background: ;
      `;
    } else {
      return css`
        grid-row: 1/2;
        grid-column: 5/6;
      `;
    }
  }}
`);

export const SocialSection = wrapContext(styled.div`
  width: 200px;
  display: ${({ isMobile }) => (isMobile ? "none" : "flex")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10%;
`);

export const LoginButton = wrapContext(styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  border-left: solid 2px lightgray;
  padding-right: 25%;
  padding-left: 3%;
  height: 30px;
  ${({ isMobile, themeFont }) => {
    if (isMobile) {
      return css`
        border: none;
        padding: 0px;
        margin: 0px;
        height: 100%;
        font-size: 1rem;
        font-family: ${themeFont.sub};
      `;
    } else {
      return css`
        font-size: 1.2rem;
        &:after {
          content: url(${loginIcon});
          padding-left: 10%;
        }
      `;
    }
  }};
`);
