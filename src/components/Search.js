import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="input-group mt-15">
        <input type="text" className="form-control" placeholder="Search" />
        <span className="input-group-btn">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-search"></i> Search
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
