import React, { Fragment, useContext } from "react";
import { ThemeContext } from "components/ThemeContext";
import { P, H1 } from "components/common";

//TODO put'em into seperate index.js
import hero1 from "images/hero1.png";
import hero2 from "images/hero2.png";
import detailImage from "images/cheers.png";
import customersImage from "images/Layer2.svg";
import suppliersImage from "images/Layer1.svg";
import teamImage from "images/teamImage.svg";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  return (
    <Fragment>
      <H1>
        To binging{" "}
        <div>
          people <H1>together.</H1>
        </div>
      </H1>
      <P>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </P>
      <button>PORTFOLIO</button>
      <div name="col2">
        <img src={hero1} alt="hero-image-land" />
        <img src={hero2} alt="hero-image-port" />
      </div>

      <div name="section2">
        <img src={detailImage} alt="section-2-detail-cheers" />
        <h2>Knowing the numbers is never enough.</h2>
        <P>
          It's about understanding the opportunities and challenges behind the
          numbers — and planning for a stronger future. What's the right product
          selection for your customers? Which tools and information could make
          your business even more successful? At Southern Glazer's, we tailor
          our services for each and every one of our customers. Because we know
          that when we come together, there's always something to celebrate.
        </P>
      </div>
      <div name="call-to-action">
        <img src={customersImage} alt="customers-image" />
        <h2>Customers</h2>
        <img src={suppliersImage} alt="suppliers-Image" />
        <h2>Suppliers</h2>
        <img src={teamImage} alt="team-Image" />
        <h2>Team</h2>
      </div>
    </Fragment>
  );
}
