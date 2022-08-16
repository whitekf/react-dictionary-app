import React from "react";
import "./App.css";

export default function Photos(props) {
  //   console.log(props.photos);
  //   console.log(props);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row ">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="image of the searched term"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      // null;
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
                Please try another word <br></br>to <em>hopefully</em> be
                availabe<br></br>
                to view images.
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //   else {
  //     return null;
  //   }
}
