import React, { Fragment, useContext } from "react";
import hero1 from "images/hero1.png";
import hero2 from "images/hero2.png";
import { ThemeContext } from "components/ThemeContext";
import { P, H1 } from "components/common";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);
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
        <img src={hero1} alt="hero-image" />
        <img src={hero2} alt="hero-image" />
      </div>
    </Fragment>
  );
}
