import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Learn ReactJS</td>
        <td className="text-center">
          <span class="label label-danger">Active</span>
        </td>
        <td className="text-center">
          <button type="button" class="btn btn-warning">
            <i class="bi bi-pencil-square"></i> Edit
          </button>
          &nbsp;
          <button type="button" class="btn btn-danger">
            <i class="bi bi-trash3"></i> Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
