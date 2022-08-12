import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <h6>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            ▶️ Listen
          </a>{" "}
          {/* {props.phonetic.text} */}
        </h6>
      </div>
    );
  }
  if (props.phonetic.text) {
    return (
      <div className="phonetic">
        <h6>{props.phonetic.text}</h6>
      </div>
    );
  }
  if (!props.phonetic.audio) {
    return (
      <div className="phonetic">
        <h6>{props.phonetic.text}</h6>
      </div>
    );
  } else {
    return null;
  }
}
