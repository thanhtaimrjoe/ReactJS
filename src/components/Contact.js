import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>This is Contact page</h1>
        <button type="button" class="btn btn-info">
          Allow
        </button>
        &nbsp;
        <button type="button" class="btn btn-danger">
          Not Allow
        </button>
      </div>
    );
  }
}

export default Contact;
