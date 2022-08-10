import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h6>
        {" "}
        <strong> Part of Speech:</strong> {props.meaning.partOfSpeech}
      </h6>
      <br />
      <h5>
        <strong> Synonym(s):</strong> {" " + props.meaning.synonyms + " " + " "}{" "}
      </h5>
      <br />
      <strong> Antonym(s): </strong>
      <h5>{" " + props.meaning.antonyms + " " + " "}</h5>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h5>
              <strong> Definition: </strong>
              {" " + definition.definition}
            </h5>

            <h5>
              {" "}
              <h6>
                - Example: <em> {" " + definition.example}</em>
              </h6>
              <br />
            </h5>
          </div>
        );
      })}
    </div>
  );
}
