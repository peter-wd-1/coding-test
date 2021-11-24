import "./App.css";
import NavigationBar from "components/NavigationBar";
import Section from "components/Section";
import LoginBar from "components/LoginBar";
import { css } from "@emotion/css";

const pageNames = [
  "Home",
  "Our Portfolio",
  "Suppliers",
  "Careers",
  "Our Causes",
  "News",
];

function App() {
  return (
    <div className="App">
      <div>
        <div name="logo" />
        <div name="Menu" style={{}}>
          <LoginBar />
          <NavigationBar pages={pageNames} />
        </div>
        <div name="MainSections" />
        <Section pages={pageNames} />
      </div>
    </div>
  );
}

const query = css`
  body {
    background: lightblue;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }
`;
export default App;
