import React from "react";
import customersImage from "images/Layer2.svg";
import suppliersImage from "images/Layer1.svg";
import teamImage from "images/teamImage.svg";
import {
  Section2H2,
  Section2CTACircle,
  Section2CTAIcon,
  Section2CTA,
} from "./Atoms";
import { FlexSection } from "components/common";
export default function Content3() {
  return (
    <FlexSection style={{ flexDirection: "row", marginBottom: "10%" }}>
      <FlexSection style={{ width: "auto", margin: "0% 7% 0% 7%" }}>
        <div style={{ position: "relative" }}>
          <Section2CTACircle />
          <Section2CTAIcon src={customersImage} alt="customers-image" />
        </div>
        <Section2H2>Customers</Section2H2>
        <Section2CTA>See our portfolio</Section2CTA>
      </FlexSection>
      <FlexSection style={{ width: "auto", margin: "0% 7% 0% 7%" }}>
        <div style={{ position: "relative" }}>
          <Section2CTACircle />
          <Section2CTAIcon src={suppliersImage} alt="customers-image" />
        </div>
        <Section2H2>Suppliers</Section2H2>
        <Section2CTA>Work with us</Section2CTA>
      </FlexSection>
      <FlexSection style={{ width: "auto", margin: "0% 7% 0% 7%" }}>
        <div style={{ position: "relative" }}>
          <Section2CTACircle />
          <Section2CTAIcon src={teamImage} alt="customers-image" />
        </div>
        <Section2H2>Team</Section2H2>
        <Section2CTA>Sign in or apply</Section2CTA>
      </FlexSection>
    </FlexSection>
  );
}
