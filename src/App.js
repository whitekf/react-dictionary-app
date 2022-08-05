import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <button className="btn btn-primary">Click here</button>
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
  );
}
