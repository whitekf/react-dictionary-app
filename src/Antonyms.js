import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <span>
        <h6>
          {" "}
          <strong>Antonym(s)</strong>{" "}
        </h6>
        <ul className="Antonyms">
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}
