import React, { createContext } from "react";
const pageNames = [
  "Home",
  "Our Portfolio",
  "Suppliers",
  "Careers",
  "Our Causes",
  "News",
];
export const PageContext = createContext();
export default function PageContectProvider({ children }) {
  return (
    <PageContext.Provider value={pageNames}>{children}</PageContext.Provider>
  );
}
