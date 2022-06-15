import React, { Component } from "react";
import Search from "./components/Search";
import Sort from "./components/Sort";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";
import { connect } from "react-redux";
import { actEditTask, actOpenForm, actToggleForm } from "./actions/index";

class App extends Component {
  onToggleForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };

  render() {
    var { isDisplayForm } = this.props;
    var elmTaskForm = isDisplayForm ? <TaskForm /> : "";
    return (
      <div className="container">
        <div className="text-center">
          <h1>Job Management</h1>
        </div>
        <hr />
        <div className="row">
          <div
            className={
              isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {/* Form */}
            {elmTaskForm}
          </div>
          <div
            className={
              isDisplayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <i className="bi bi-plus-lg"></i> Add new job
            </button>
            {/* Search - Sort */}
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort />
              </div>
            </div>
            {/* List */}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList onFilter={this.onFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => dispatch(actToggleForm()),
    onOpenForm: () => dispatch(actOpenForm()),
    onClearTask: (task) => dispatch(actEditTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
