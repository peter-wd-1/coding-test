import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeContextProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // NOTE 1034 is avg for landspace
    // I targeted landspace to cover both landscape and portrait
    // Since there are no landscape specification for design,
    // I decide not to seperate landscape from portrait design.
    const media = window.matchMedia("(max-width: 1034px)");
    const onChangeWidth = (event) => {
      setIsMobile(event.matches);
    };
    media.addEventListener("change", onChangeWidth);
    return () => media.removeEventListener("cahnge", onChangeWidth);
  });
  return (
    <ThemeContext.Provider
      value={{
        isMobile,
        themeColor: {
          mustard: "#D8B243",
          red: "#CB0007",
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
