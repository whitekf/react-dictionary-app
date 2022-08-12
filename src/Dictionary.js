import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [term, setTerm] = useState(props.defaultTerm);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResonse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation:  https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;
    axios.get(apiUrl).then(handleResonse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="searchBar">
          <form onSubmit={handleSubmit}>
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
              className="searchButton" // btn btn-primary w-50
            />
          </form>
        </div>
        <br />
        <div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
