import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <span>
        {" "}
        <h6 className="example">
          {/* -🔹 Example: <em> {props.example}</em> */}
          -🔹 Example: <em> {props.example}</em>
        </h6>
      </span>
    );
  } else {
    return null;
  }
}
