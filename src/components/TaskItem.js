import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
  };

  onUpdateTask = () => {
    this.props.onUpdateTask(this.props.task.id);
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
            onClick={this.onUpdateTask}
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

export default TaskItem;
