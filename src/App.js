import Section from "components/Section";
import Header from "components/Header";
import PageContectProvider from "pages/PageContext";
import ThemeContextProvider from "components/ThemeContext";

function App() {
  return (
    <PageContectProvider>
      <ThemeContextProvider>
        <Header />
        <Section />
      </ThemeContextProvider>
    </PageContectProvider>
  );
}

export default App;
