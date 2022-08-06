import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a word..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-50"
            />
          </div>
        </div>
      </form>
      DICTIONARY COMPONENT....
    </div>
  );
}
