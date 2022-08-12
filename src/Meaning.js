import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "bootstrap/dist/css/bootstrap.css";

export default function Meaning(props) {
  console.log(props.results);

  return (
    <div className="Meaning">
      <h6>
        {" "}
        <strong> Part of Speech:</strong>{" "}
        <span className="speechPart">{props.meaning.partOfSpeech} </span>
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              <strong> 💠 Definition: </strong>
              {definition.definition}
            </h6>

            <span>
              {" "}
              <h6 className="example">
                -🔹 Example: <em> {definition.example}</em>
              </h6>
              <h6>
                <div className="row synAndAnt">
                  <span className="col-6">
                    <Synonyms synonyms={definition.synonyms} />
                  </span>
                  <span className="col-6">
                    <Antonyms antonyms={definition.antonyms} />
                  </span>
                </div>
              </h6>
            </span>
            <br />
          </div>
        );
      })}
      {/* ▶️ 💠🔷🔹◼️⬛⚫🔳💭🗯️🗨️ */}
    </div>
  );
}
