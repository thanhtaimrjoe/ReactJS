import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown mt-15">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" role="button" href="#">
              <i className="bi bi-sort-alpha-down"></i> Name A-Z
            </a>
          </li>
          <li>
            <a className="dropdown-item" role="button" href="#">
              <i className="bi bi-sort-alpha-down-alt"></i> Name Z-A
            </a>
          </li>
          <li>
            <a className="dropdown-item" role="button" href="#">
              Active
            </a>
          </li>
          <li>
            <a className="dropdown-item" role="button" href="#">
              InActive
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sort;
