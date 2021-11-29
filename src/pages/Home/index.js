import { Section } from "components/common";
import React, { Fragment } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

export default function Home() {
  return (
    <Fragment>
      <Content1 />
      <Content2 />
      <Content3 />
    </Fragment>
  );
}
