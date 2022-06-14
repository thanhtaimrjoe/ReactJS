import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1,
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elmTaks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onUpdateStatus={this.props.onUpdateStatus}
          onDeleteTask={this.props.onDeleteTask}
          onUpdateTask={this.props.onUpdateTask}
        />
      );
    });
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
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                name="filterStatus"
                className="form-control"
                value={filterStatus}
                onChange={this.onChange}
              >
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, null)(TaskList);
