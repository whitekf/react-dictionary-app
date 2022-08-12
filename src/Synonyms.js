import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span>
        <h6>
          {" "}
          <strong> Synonym(s):</strong>{" "}
        </h6>

        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}
