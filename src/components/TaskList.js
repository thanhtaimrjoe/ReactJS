import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    var {tasks} = this.props;
    var elmTaks = tasks.map((task,index) => {
      return <TaskItem key={task.id} task={task} index={index}/>
    })
    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" name="filterName" />
            </td>
            <td>
              <select name="filterStatus" className="form-control">
                <option value={-1}>All</option>
                <option value={0}>InActive</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmTaks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
