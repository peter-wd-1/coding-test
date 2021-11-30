import React from "react";
import {
  Section1,
  Section1Desc,
  Section1H1,
  Section1P,
  FlexSection1,
  Section1Image1,
  Section1Image2,
  DecoBox,
} from "./Atoms";
import hero1 from "images/hero1.png";
import hero2 from "images/hero2.png";
import { Button } from "components/common";

export default function Content1() {
  return (
    <Section1 cols={2}>
      <Section1Desc>
        <Section1H1>
          To binging
          <div>
            people{" "}
            <Section1H1 style={{ fontStyle: "italic" }}>together.</Section1H1>
          </div>
        </Section1H1>
        <Section1P src={hero1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Section1P>
        <Button>PORTFOLIO</Button>
      </Section1Desc>
      <FlexSection1>
        <Section1Image1 src={hero1} alt="hero-image-land" />
        <Section1Image2 src={hero2} alt="hero-image-port" />
        <DecoBox />
      </FlexSection1>
    </Section1>
  );
}
