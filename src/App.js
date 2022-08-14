import "./App.css";
import React, { useState } from "react";
import Dictionary from "./Dictionary";
// import KassLogo from "./KassLogo.jpg";

export default function App() {
  let [wordOfDay, setWordOfDay] = useState(true);

  let arrayOfTerms = [
    "bemused",
    "banal",
    "contrive",
    "colloquial",
    "deferential",
    "existential",
    "facetious",
    "fortuitous",
    "incongruous",
    "inflammable",
    "infamous",
    "modicum",
    "moot",
    "myriad",
    "nuance",
    "paradox",
    "penchant",
    "perfunctory",
    "peruse",
    "plethora",
    "deliniate",
    "extrapolate",
    "dysania",
    "serendipity",
    "quixotic",
    "caruncle",
    "agelast",
    "osculator",
    "limerance",
    "atrate",
    "metanoia",
    "pauciloquent",
    "jamais-vu",
    "laodicean",
    "cacoethes",
    "vaticinate",
    "zoilism",
    "mephitic",
    "febrile",
    "tittle",
    "idoneous",
    "kenspeckle",
    "equivocate",
    "tergiversate",
    "gigle",
    "malarkey",
    "bravado",
    "darkle",
    "interfenestration",
    "scintillate",
    "sparsile",
    "jentacular",
    "tittynope",
    "absquatulate",
    "blatherskite",
    "microcosm",
    "pedantic",
    "belie",
    "axiom",
    "ascertain",
    "idempotent",
    "premise",
    "conjecture",
    "paradigm",
    "teem",
    "inductive",
    "incredulous",
    "laudable",
    "postulate",
    "supposition",
    "transient",
    "transitory",
    "epistimology",
    "comport",
    "contrition",
    "subsequent",
    "concurrency",
    "anomoloaus",
    "inumerate",
    "autonymous",
    "defacto",
    "overzealous",
    "impervious",
    "nihilism",
    "spirtual",
    "certitude",
    "flippant",
    "diffidence",
    "disputation",
    "veridical",
    "pursuant",
    "awakening",
    "anecdotal",
  ];
  const date = new Date();
  let ms = date.getMilliseconds() % 42;
  let defaultTerm = arrayOfTerms[ms];

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

        <Dictionary defaultTerm={defaultTerm} />
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
