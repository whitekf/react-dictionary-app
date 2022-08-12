import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
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
            <h5>
              <strong> Definition: </strong>
              {definition.definition}
            </h5>

            <span>
              {" "}
              <h6>
                - - Example: <em> {definition.example}</em>
              </h6>
              <br />
              <Synonyms synonyms={definition.synonyms} />
              <Antonyms antonyms={definition.antonyms} />
            </span>
            <br />
          </div>
        );
      })}
    </div>
  );
}
