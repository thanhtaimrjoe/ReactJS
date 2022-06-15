import React, { Component } from "react";
import { connect } from "react-redux";
import { actSortTask } from "../actions/index";

class Sort extends Component {
  onCLick = (sortBy, sortValue) => {
    this.props.onSort({ by: sortBy, value: sortValue });
  };

  render() {
    var { by, value } = this.props.sort;
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
          <li onClick={() => this.onCLick("name", 1)}>
            <a
              className={
                by === "name" && value === 1
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              role="button"
              href="/#"
            >
              <i className="bi bi-sort-alpha-down"></i> Name A-Z
            </a>
          </li>
          <li onClick={() => this.onCLick("name", -1)}>
            <a
              className={
                by === "name" && value === -1
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              role="button"
              href="/#"
            >
              <i className="bi bi-sort-alpha-down-alt"></i> Name Z-A
            </a>
          </li>
          <li onClick={() => this.onCLick("status", 1)}>
            <a
              className={
                by === "status" && value === 1
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              role="button"
              href="/#"
            >
              Active
            </a>
          </li>
          <li onClick={() => this.onCLick("status", -1)}>
            <a
              className={
                by === "status" && value === -1
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
              role="button"
              href="/#"
            >
              InActive
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => dispatch(actSortTask(sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
