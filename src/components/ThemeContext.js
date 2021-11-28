import { createContext } from "react";

export const ThemeContext = createContext();
export default function ThemeContextProvider({ children }) {
  return (
    <ThemeContext.Provider
      value={{
        themeColor: {
          mustard: "#D8B243",
          red: "#A1151A",
          baige: "#F4F2EB",
        },
        themeFont: {
          primary: "Noto Serif Display",
          sub: "Niveau Grotesk",
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
