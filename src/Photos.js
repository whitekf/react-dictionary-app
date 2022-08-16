import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    // console.log(props.photos);
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
    // (
    //   <div className="row">
    //     <div className="col-4">
    //       <div className="noImgMsg">
    //         <h3>
    //           Sorry - no images are availabe for this one! Try another word.
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
