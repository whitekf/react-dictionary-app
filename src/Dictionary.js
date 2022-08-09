import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [term, setTerm] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${term} definition`);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleTermChange}
          placeholder="Enter a word..."
          className="form-control"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="btn btn-primary w-50" />
      </form>
    </div>
  );
}
