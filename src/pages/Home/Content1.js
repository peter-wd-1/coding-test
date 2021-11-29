import React from "react";
import { Section1, Section1H1, Section1P } from "./Sections";
import hero1 from "images/hero1.png";
import hero2 from "images/hero2.png";

export default function Content1() {
  return (
    <Section1 cols={2}>
      <div>
        <Section1H1>
          To binging
          <div>
            people <Section1H1>together.</Section1H1>
          </div>
        </Section1H1>
        <Section1P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Section1P>
        <button>PORTFOLIO</button>
      </div>
      <div>
        <img src={hero1} alt="hero-image-land" />
        <img src={hero2} alt="hero-image-port" />
      </div>
    </Section1>
  );
}
