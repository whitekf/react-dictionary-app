import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <h4>{" " + props.meaning.synonyms + " " + " "} </h4>
      <p>{" " + props.meaning.antonyms + " " + " "}</p>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em> {definition.example}</em>
            </p>
          </div>
        );
      })}
      {/* <p>{" " + props.meaning.definitions[0].definition + " " + " "}</p>
      <p>{" " + props.meaning.definitions[0].example + " " + " "}</p> */}
    </div>
  );
}
