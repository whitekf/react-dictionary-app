import "./App.css";
import "./Dictionary.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img src="./KassLogoK.jpg" className="AppLogo" alt="logo" />
        <h1>Dictionary App</h1>
        <button className="btn btn-primary">Click here</button>
        <Dictionary />
        <p></p>
        <footer>
          {" "}
          This project is coded by{" "}
          <a href="https://kassiewhite.netlify.app/index.html" target="_blank">
            Kassie White{" "}
          </a>{" "}
          and it's{" "}
          <a
            href="https://github.com/whitekf/react-dictionary-app"
            target="_blank"
          >
            Open-Sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
