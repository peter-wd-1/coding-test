import React from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import * as Pages from 'pages'

export default function Section(props) {
  return (
    <Routes>
      <Route exac path="/" element={<Pages.Home />} />
      {props.pages.map(name => {
        const pathUrl = name.replace(/ /g, "")
        const Element = Pages[pathUrl]
        return (
          <Route path={pathUrl} element={<Element />} />
        )
      })}
    </Routes>
  )
};
