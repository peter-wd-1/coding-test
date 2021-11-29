import React from "react";
import { Section2 } from "./Sections";

import detailImage from "images/cheers.png";
import { P } from "components/common";
import customersImage from "images/Layer2.svg";
import suppliersImage from "images/Layer1.svg";
import teamImage from "images/teamImage.svg";

export default function Content2() {
  return (
    <div>
      <Section2 cols={2}>
        <img src={detailImage} alt="section-2-detail-cheers" />
        <div>
          <h2>Knowing the numbers is never enough.</h2>
          <P>
            It's about understanding the opportunities and challenges behind the
            numbers — and planning for a stronger future. What's the right
            product selection for your customers? Which tools and information
            could make your business even more successful? At Southern Glazer's,
            we tailor our services for each and every one of our customers.
            Because we know that when we come together, there's always something
            to celebrate.
          </P>
        </div>
      </Section2>
      <Section2 cols={3}>
        <div>
          <img src={customersImage} alt="customers-image" />
          <h2>Customers</h2>
        </div>
        <div>
          <img src={suppliersImage} alt="suppliers-Image" />
          <h2>Suppliers</h2>
        </div>
        <div>
          <img src={teamImage} alt="team-Image" />
          <h2>Team</h2>
        </div>
      </Section2>
    </div>
  );
}
