import React from "react";
import "./App.css";

export default function Photos(props) {
  //   console.log(props.photos);
  //   console.log(props);

  if (props.photos) {
    return (
      <div className="Photos photosDisplayed">
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="searched term"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!props.photos) {
    // console.log("LENGTH" + props.photos.length());
    return (
      <div className="noImgs">
        <div className="row">
          <div className="col-12">
            <div className="noImgMsg">
              <h5>
                <br></br>
                Sorry - no images are
                <br></br> availabe for this one!
                <br></br>
                <br></br>
                Please enter another word.
                <br></br>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
