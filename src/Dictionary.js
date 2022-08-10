import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [term, setTerm] = useState("");

  function handleResonse(response) {
    console.log(response.data[0]);

    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;
    axios.get(apiUrl).then(handleResonse);
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
