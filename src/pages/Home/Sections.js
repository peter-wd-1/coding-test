import styled from "@emotion/styled";
import { P, H1, Section, wrapContext } from "components/common";

export const Section1 = wrapContext(styled(Section)`
  background: ${({ themeColor }) => themeColor.red};
`);
export const Section2 = wrapContext(styled(Section)`
  background: ${({ themeColor }) => themeColor.baige};
`);

export const Section1H1 = wrapContext(styled(H1)`
  color: white;
`);

export const Section1P = wrapContext(styled(P)`
  color: white;
`);
