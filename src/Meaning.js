import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
// import Example from "./Example";
import "bootstrap/dist/css/bootstrap.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h6>
        {" "}
        {/* <strong className="partOfSpeechTitle"> Part of Speech:</strong>{" "} */}
        <span className="speechPart">{props.meaning.partOfSpeech} </span>๐
      </h6>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h6>
              <strong className="definitionTitle"> ๐  Definition: </strong>
              <span className="definition"> {definition.definition} </span>
            </h6>
            <span>
              {" "}
              <h6 className="example">
                -๐น Example: <em> {definition.example}</em>
              </h6>
            </span>
            {/* <Example example={props.meaning.examples} /> */}
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
          <div className="lineBreak">_____________</div>
        </div>
      </h6>
      {/* โถ๏ธ ๐ ๐ท๐นโผ๏ธโฌโซ๐ณ๐ญ๐ฏ๏ธ๐จ๏ธ โ ๐ด โ โน๏ธ โ โ๏ธ โณ๏ธ ๐๐๐๐ โก โ๏ธ๐ โ   */}
    </div>
  );
}
