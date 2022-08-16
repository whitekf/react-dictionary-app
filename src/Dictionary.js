import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [term, setTerm] = useState(props.defaultTerm);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResonse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation:  https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${term}&per_page=39`;
    let pexelsApiKey =
      "563492ad6f91700001000001a57bb7d62efe456788caff1c997a7b2a";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResonse);
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
          <div className="hint">Try candy, neon, sunset, cloud...</div>
        </div>
        <div className="row">
          <div className="col-5">
            <Results results={results} />
          </div>
          <div className="col-6 photosDisplayed">
            {" "}
            <Photos photos={photos} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
