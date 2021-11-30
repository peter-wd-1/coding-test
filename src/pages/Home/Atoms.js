import styled from "@emotion/styled";
import { Image } from "components/common";
import ctabuttonIcon from "images/CTA.svg";
import { P, H1, Section, FlexSection } from "components/common";
import { wrapContext } from "utils";

//Section1 styles
export const Section1 = wrapContext(styled(Section)`
  background: ${({ themeColor }) => themeColor.red};
`);

export const Section1Desc = styled.div`
  box-sizing: border-box;
  padding: 10%;
`;

export const Section1H1 = wrapContext(styled(H1)`
  color: white;
  letter-spacing: -0.1rem;
  font-size: clamp(3rem, 2.5995rem + 3.2041vw, 6.1rem);
  ${({ isMobile }) => (isMobile ? " line-height: 3.7rem" : "")};
`);

export const Section1P = wrapContext(styled(P)`
  color: white;
  width: 90%;
  margin-bottom: 4rem;
`);

export const FlexSection1 = wrapContext(styled(FlexSection)`
  position: relative;
  box-sizing: border-box;
  padding: 4% 9% 12% 0%;
`);

export const Section1Image1 = styled(Image)`
  width: 80%;
  margin: 10px;
  margin-right: auto;
  z-index: 1;
`;

export const Section1Image2 = styled(Image)`
  width: 40%;
  margin: 2%;
  margin-left: auto;
  z-index: 1;
`;

export const DecoBox = wrapContext(styled.div`
  position: absolute;
  top: 30%;
  right: 20%;
  background: ${({ themeColor }) => themeColor.mustard};
  width: 40%;
  height: 40%;
  z-index: 0;
  border-radius: 12px;
`);

//Section2 styles
export const Section2 = wrapContext(styled(Section)``);

export const Section2ImageDeco = wrapContext(styled.div`
  width: 40vw;
  height: 40vw;
  margin: 15% auto 15% 10%;
  border-radius: 12px;
  background-color: ${({ themeColor }) => themeColor.mustard};
  position: relative;
  filter: drop-shadow(0 22px 7px rgba(0, 0, 0, 0.25));
`);

export const Section2Image = wrapContext(styled.div`
  width: 40vw;
  height: 40vw;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  position: absolute;
  left: 20px;
  bottom: 20px;
`);

export const Section2H1 = styled(Section1H1)`
  color: black;
  line-height: 5rem;
  font-size: 5rem;
  font-weight: 400;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  letter-spacing: -4px;
`;

export const Section2H2 = styled(Section2H1)`
  font-size: 3rem;
  text-shadow: none;
  margin-bottom: 0;
`;

export const FlexSection2 = styled(FlexSection1)`
  width: 100%;
  align-items: flex-start;
`;

export const Section2P = styled(Section1P)`
  color: black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 2.5rem;
  font-weight: 300;
`;

export const Section2Deco1 = styled.div`
  background-color: white;
  position: absolute;
  width: 80vw;
  height: 170vh;
  z-index: -1;
  top: 0px;
`;

export const Section2Deco2 = wrapContext(styled.div`
  position: absolute;
  top: -20%;
  right: -3%;
  width: 10vw;
  height: 10vw;
  padding: 5%;
  border: dashed 0.3rem ${({ themeColor }) => themeColor.mustard};
  border-radius: 50%;
  z-index: 1;
  &:after {
    position: absolute;
    content: "";
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: 10vw;
    height: 10vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`);

export const Section2CTACircle = wrapContext(styled.div`
  background: ${({ themeColor }) => themeColor.mustard};
  width: 12vw;
  height: 12vw;
  border-radius: 50%;
  opacity: 30%;
`);

export const Section2CTAIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40%;
`;

export const Section2CTA = wrapContext(styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-family: ${({ themeFont }) => themeFont.sub};
  font-size: 1.6rem;
  font-weight: 300;
  &:after {
    content: url(${ctabuttonIcon});
    padding-left: 1rem;
  }
`);
