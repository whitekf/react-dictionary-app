import "./App.css";
import "./Dictionary.css";
import React from "react";
import Dictionary from "./Dictionary";
// import KassLogo from "./KassLogo.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <img src="./KassLogo.jpg" className="AppLogo" alt="logo" /> */}
        <h1 className="dictionaryHeader">
          Dictionary App{" "}
          <a
            href="https://www.freeiconspng.com/img/25701"
            title="Image from freeiconspng.com"
          >
            <img
              src="https://www.freeiconspng.com/uploads/blue-book-png-31.png"
              width="70"
              alt="blue book png"
            />
          </a>
        </h1>
        <Dictionary />
        <p></p>
        <footer className="dictionaryFooter">
          {" "}
          This project is coded by{" "}
          <a
            href="https://kassiewhite.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Kassie White
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/whitekf/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
