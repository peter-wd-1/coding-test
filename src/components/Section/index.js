import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "pages";
import { PageContext } from "pages/PageContext";

export default function Section() {
  const pages = useContext(PageContext);
  return (
    <Routes>
      <Route exac path="/" element={<Pages.Home />} />
      {pages.map((name) => {
        const pathUrl = name.replace(/ /g, "");
        const Element = Pages[pathUrl];
        return <Route path={pathUrl} element={<Element />} />;
      })}
    </Routes>
  );
}
