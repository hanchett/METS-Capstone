import React, { Component } from "react";
import NavBar from "./NavBar";

import "./css/NewComment.css";

class NewComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="background" />
        <div className="content">
          <div className="container">Test</div>
        </div>
      </div>
    );
  }
}

export default NewComment;
