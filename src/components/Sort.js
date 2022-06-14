import React, { Component } from "react";

class Sort extends Component {

  onCLick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  }

  render() {
    var {sortBy, sortValue} = this.props;
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
          <li onClick={() => this.onCLick('name', 1)}>
            <a className={sortBy === 'name' && sortValue === 1 ? "dropdown-item active" : "dropdown-item"} role="button" href="#">
              <i className="bi bi-sort-alpha-down"></i> Name A-Z
            </a>
          </li>
          <li onClick={() => this.onCLick('name', -1)}>
            <a className={sortBy === 'name' && sortValue === -1 ? "dropdown-item active" : "dropdown-item"} role="button" href="#">
              <i className="bi bi-sort-alpha-down-alt"></i> Name Z-A
            </a>
          </li>
          <li onClick={() => this.onCLick('status', 1)}>
            <a className={sortBy === 'status' && sortValue === 1 ? "dropdown-item active" : "dropdown-item"} role="button" href="#">
              Active
            </a>
          </li>
          <li onClick={() => this.onCLick('status', -1)}>
            <a className={sortBy === 'status' && sortValue === -1 ? "dropdown-item active" : "dropdown-item"} role="button" href="#">
              InActive
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sort;
