import React, { useState } from "react";
import "./Dictionary.css";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [term, setTerm] = useState("");
  let [results, setResults] = useState(null);

  function handleResonse(response) {
    console.log(response.data);
    console.log(term);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation:  https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;
    axios.get(apiUrl).then(handleResonse);
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="searchBar">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleTermChange}
            placeholder="Enter a word..."
            className="form-control"
            autoFocus="on"
          />
          <input
            type="submit"
            value="Search"
            className="  searchButton" // btn btn-primary w-50
          />
        </form>
      </div>
      <br />
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
