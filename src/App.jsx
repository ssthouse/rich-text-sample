import React, { Component } from "react";

class Container extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <span>hi this is rich text editor</span>
      </div>
    );
  }
}

export default Container