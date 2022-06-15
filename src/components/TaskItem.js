import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actCloseForm,
  actDeleteTask,
  actEditTask,
  actOpenForm,
  actUpdateStatus,
} from "../actions/index";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  };

  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };

  render() {
    var { index, task } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            onClick={this.onUpdateStatus}
            className={task.status ? "badge bg-success" : "badge bg-warning"}
          >
            {task.status ? "Active" : "InActive"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.onEditTask}
          >
            <i className="bi bi-pencil-square"></i> Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDeleteTask}
          >
            <i className="bi bi-trash3"></i> Remove
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => dispatch(actUpdateStatus(id)),
    onDeleteTask: (id) => dispatch(actDeleteTask(id)),
    onCloseForm: () => dispatch(actCloseForm()),
    onOpenForm: () => dispatch(actOpenForm()),
    onEditTask: (task) => dispatch(actEditTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
