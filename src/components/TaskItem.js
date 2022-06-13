import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    var {index, task} = this.props;
    return (
      <tr>
        <td>{index+1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span className={task.status ? "badge bg-success" : "badge bg-warning"}>{task.status ? 'Active' : 'InActive'}</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <i className="bi bi-pencil-square"></i> Edit
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash3"></i> Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
