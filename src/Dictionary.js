import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let defaultTerm = props.defaultTerm;
  let [term, setTerm] = useState(props.defaultTerm);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  // let randomClicked = false;

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

  // function handleRandomWord(event) {
  //   event.preventDefault();
  //   randomClicked = true;
  //   console.log(` in handleRandomWord ${event}`);

  //   let arrayOfTerms = [
  //     "bemused",
  //     "butter",
  //     "banal",
  //     "contrive",
  //     "colloquial",
  //     "deferential",
  //     "existential",
  //     "facetious",
  //     "fortuitous",
  //     "incongruous",
  //     "inflammable",
  //     "deliniation",
  //     "contempt",
  //     "contentious",
  //     "armistice",
  //     "posthumous",
  //     "hubris",
  //     "cavalier",
  //     "postulate",
  //     "posterior",
  //     "infamous",
  //     "modicum",
  //     "moot",
  //     "myriad",
  //     "sun",
  //     "moon",
  //     "stars",
  //     "sparkles",
  //     "color",
  //     "beach",
  //     "ocean",
  //     "butter",
  //     "bread",
  //     "glass",
  //     "pistachio",
  //     "lavender",
  //     "nuance",
  //     "paradox",
  //     "penchant",
  //     "perfunctory",
  //     "peruse",
  //     "plethora",
  //     "deliniate",
  //     "extrapolate",
  //     "dysania",
  //     "serendipity",
  //     "quixotic",
  //     "caruncle",
  //     "osculator",
  //     "limerance",
  //     "atrate",
  //     "metanoia",
  //     "pauciloquent",
  //     "cacoethes",
  //     "vaticinate",
  //     "zoilism",
  //     "mephitic",
  //     "febrile",
  //     "tittle",
  //     "idoneous",
  //     "kenspeckle",
  //     "equivocate",
  //     "tergiversate",
  //     "gigle",
  //     "malarkey",
  //     "bravado",
  //     "darkle",
  //     "interfenestration",
  //     "scintillate",
  //     "sparsile",
  //     "tittynope",
  //     "absquatulate",
  //     "blatherskite",
  //     "microcosm",
  //     "pedantic",
  //     "belie",
  //     "axiom",
  //     "ascertain",
  //     "idempotent",
  //     "premise",
  //     "conjecture",
  //     "paradigm",
  //     "teem",
  //     "inductive",
  //     "incredulous",
  //     "laudable",
  //     "postulate",
  //     "supposition",
  //     "transient",
  //     "transitory",
  //     "epistimology",
  //     "acquiesce",
  //     "alacrity",
  //     "arcane",
  //     "Quintessential",
  //     "Umbrage",
  //     "Exorbitant",
  //     "amiable",
  //     "Seldom",
  //     "Accolade",
  //     "Catch-22",
  //     "Cloying",
  //     "Toilsome",
  //     "Cajole",
  //     "Ubiquitous",
  //     "quiet",
  //     "Boondoggle",
  //     "Perfunctory",
  //     "Eclectic",
  //     "Sycophant",
  //     "Proclivity",
  //     "Dalliance",
  //     "Insidious",
  //     "Euphemism",
  //     "innate",
  //     "inherent",
  //     "facetious",
  //     "Fastidious",
  //     "Cacophony",
  //     "Flummoxed",
  //     "nonsequitur",
  //     "Vitriol",
  //     "Flabbergasted",
  //     "Litany",
  //     "Narcissist",
  //     "Oblivion",
  //     "Ostentatious",
  //     "boat",
  //     "sun",
  //     "water",
  //     "fish",
  //     "yoga",
  //     "book",
  //     "toys",
  //     "phones",
  //     "horses",
  //     "horse",
  //     "kittens",
  //     "puppies",
  //     "love",
  //     "coffee",
  //     "plants",
  //     "candy",
  //     "frosting",
  //     "shopping",
  //     "fashion",
  //     "computers",
  //     "houses",
  //     "frogs",
  //     "quotes",
  //     "goats",
  //     "dogs",
  //     "cats",
  //     "elephants",
  //     "lizzards",
  //     "hands",
  //     "puzzle",
  //     "gorilla",
  //     "potatoes",
  //     "fruit",
  //     "ice cream",
  //     "berries",
  //     "produce",
  //     "friends",
  //     "party",
  //     "community",
  //     "kids",
  //     "cars",
  //     "gardening",
  //     "beach",
  //     "mountains",
  //     "home",
  //     "travel",
  //     "destination",
  //     "cup",
  //     "boat",
  //     "sun",
  //     "water",
  //     "fish",
  //     "yoga",
  //     "book",
  //     "toys",
  //     "phones",
  //     "horses",
  //     "horse",
  //     "kittens",
  //     "puppies",
  //     "love",
  //     "coffee",
  //     "plants",
  //     "candy",
  //     "shopping",
  //     "fashion",
  //     "computers",
  //     "houses",
  //     "frogs",
  //     "quotes",
  //     "goats",
  //     "dogs",
  //     "cats",
  //     "elephants",
  //     "lizzards",
  //     "hands",
  //     "puzzle",
  //     "gorilla",
  //     "sunrise",
  //     "fruit",
  //     "ice cream",
  //     "berries",
  //     "produce",
  //     "friends",
  //     "chocolate",
  //     "caramel",
  //     "ribbons",
  //     "butterfly",
  //     "art",
  //     "party",
  //     "community",
  //     "kids",
  //     "cars",
  //     "gardening",
  //     "beach",
  //     "mountains",
  //     "home",
  //     "travel",
  //     "Tryst",
  //     "Caustic",
  //     "Coerce",
  //     "candy",
  //     "dolls",
  //     "food",
  //     "drinks",
  //     "bar",
  //     "beauty",
  //     "baby",
  //     "ducks",
  //     "beer",
  //     "cake",
  //     "cupcake",
  //     "french",
  //     "kindness",
  //     "ingenious",
  //     "superior",
  //     "subsequently",
  //     "unequivocally",
  //     "plethora",
  //     "Epitome",
  //     "immense",
  //     "exquisite",
  //     "diminutive",
  //     "benevolent",
  //     "despicable",
  //     "fundamentally",
  //     "essential",
  //     "examine",
  //     "Acrimony",
  //     "Adept",
  //     "Adulation",
  //     "Ambivalent",
  //     "Anomaly",
  //     "boat",
  //     "water",
  //     "book",
  //     "kittens",
  //     "candy",
  //     "maybe",
  //     "no",
  //     "yes",
  //     "houses",
  //     "frogs",
  //     "fries",
  //     "goats",
  //     "dogs",
  //     "cats",
  //     "elephants",
  //     "lizzards",
  //     "lollipop",
  //     "berries",
  //     "sunset",
  //     "friends",
  //     "party",
  //     "sunrise",
  //     "candy",
  //     "search",
  //     "gardening",
  //     "beach",
  //     "mountains",
  //     "cup",
  //     "Avant-garde",
  //     "Axiomatic",
  //     "Acquiesce",
  //     "Nefarious",
  //     "comport",
  //     "contrition",
  //     "abhor",
  //     "subsequent",
  //     "stars",
  //     "country",
  //     "concurrency",
  //     "anomoloaus",
  //     "inumerate",
  //     "autonymous",
  //     "defacto",
  //     "overzealous",
  //     "impervious",
  //     "donut",
  //     "nihilism",
  //     "spirtual",
  //     "certitude",
  //     "flippant",
  //     "sparkle",
  //     "color",
  //     "ant",
  //     "love",
  //     "coffee",
  //     "plants",
  //     "candy",
  //     "gorilla",
  //     "cow",
  //     "fruit",
  //     "ice cream",
  //     "berries",
  //     "peace",
  //     "oneness",
  //     "community",
  //     "skittles",
  //     "sprinkles",
  //     "watermelon",
  //     "cup",
  //     "diffidence",
  //     "disputation",
  //     "abberation",
  //     "veridical",
  //     "pursuant",
  //     "awakening",
  //     "anecdotal",
  //   ];

  //   const date = new Date();
  //   let ms = date.getMilliseconds() % 100;
  //   defaultTerm = arrayOfTerms[ms];
  //   console.log(
  //     `&&&&& IN DICTIONARY.JS FILE @@@@    defaultTerm is ${defaultTerm} and randomClicked is ${randomClicked}`
  //   );
  // }

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
          {/* <button className="randomWord" onClick={handleRandomWord}>
            Random Word
          </button> */}
          <div className="hint">Try candy, neon, sunset, cloud, lights...</div>
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
  }
  // if (randomClicked) {
  //   return (
  //     <div className="Dictionary">
  //       <div className="searchBar">
  //         <form onSubmit={handleSubmit}>
  //           <input
  //             type="search"
  //             onChange={handleTermChange}
  //             placeholder="Enter a word..."
  //             className="form-control"
  //             autoFocus="on"
  //           />
  //           <input
  //             type="submit"
  //             value="Search"
  //             className="searchButton" // btn btn-primary w-50
  //           />
  //         </form>
  //         {/* <button className="randomWord" onClick={handleRandomWord}>
  //           Random Word
  //         </button> */}
  //         <div className="hint">Try candy, neon, sunset, cloud, lights... </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-5">
  //           <Results results={defaultTerm} />
  //         </div>
  //         <div className="col-6 photosDisplayed">
  //           {" "}
  //           <Photos photos={defaultTerm} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  //}
  else {
    load();
    return "Loading";
  }
}
