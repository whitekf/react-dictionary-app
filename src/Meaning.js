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
        <strong className="partOfSpeechTitle"> Part of Speech:</strong>{" "}
        <span className="speechPart">{props.meaning.partOfSpeech} </span>
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              <strong className="definitionTitle"> 💠 Definition: </strong>
              <span className="definition"> {definition.definition} </span>
            </h6>

            <span>
              {" "}
              <h6 className="example">
                -🔹 Example: <em> {definition.example}</em>
              </h6>
            </span>
          </div>
        );
      })}
      <h6>
        <div className="row synAndAnt">
          <span className="col-6">
            <Synonyms synonyms={props.meaning.synonyms} />
          </span>
          <span className="col-6">
            <Antonyms antonyms={props.meaning.antonyms} />
          </span>
          <div className="lineBreak">__________________________</div>
        </div>
      </h6>
      {/* ▶️ 💠🔷🔹◼️⬛⚫🔳💭🗯️🗨️ */}
    </div>
  );
}
