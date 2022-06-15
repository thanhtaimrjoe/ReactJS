import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearchTask } from "../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    return (
      <div className="input-group mt-15">
        <input
          type="text"
          name="keyword"
          value={this.state.keyword}
          onChange={this.onChange}
          className="form-control"
          placeholder="Search"
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onSearch}
          >
            <i className="bi bi-search"></i> Search
          </button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => dispatch(actSearchTask(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
