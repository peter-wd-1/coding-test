import React from "react";
import {
  FlexSection2,
  Section2,
  Section2Deco2,
  Section2Deco1,
  Section2H1,
  Section2Image,
  Section2ImageDeco,
  Section2P,
} from "./Atoms";

import detailImage from "images/cheers.png";
import deco from "images/Vector.svg";

export default function Content2() {
  return (
    <div style={{ position: "relative" }}>
      <Section2 cols={2}>
        <Section2ImageDeco>
          <Section2Image src={detailImage} alt="section-2-detail-cheers" />
        </Section2ImageDeco>
        <FlexSection2>
          <Section2H1>
            Knowing the numbers is never{" "}
            <Section2H1 style={{ fontStyle: "italic" }}>enough.</Section2H1>
          </Section2H1>
          <Section2P>
            It's about understanding the opportunities and challenges behind the
            numbers — and planning for a stronger future. What's the right
            product selection for your customers? Which tools and information
            could make your business even more successful? At Southern Glazer's,
            we tailor our services for each and every one of our customers.
            Because we know that when we come together, there's always something
            to celebrate.
          </Section2P>
        </FlexSection2>
      </Section2>
      <Section2Deco1 />
      <Section2Deco2 src={deco} />
    </div>
  );
}
