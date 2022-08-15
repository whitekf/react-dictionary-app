import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetic">
        <h6 className="phoneticSection">
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
            className="listenLink"
          >
            ▶️ Listen
          </a>{" "}
          <span className="pronounciation">{props.phonetic.text}</span>
        </h6>
      </div>
    );
  } else {
    return null;
  }
}
