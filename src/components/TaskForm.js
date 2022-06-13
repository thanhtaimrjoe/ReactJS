import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Add new job{" "}
            <span>
              <i className="bi bi-x-circle text-right"></i>
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label for="">Name: </label>
              <input type="text" name="" className="form-control" />
            </div>
            <label for="">Status: </label>
            <select className="form-control" name="" id="">
              <option value={true}>Active</option>
              <option value={false}>InActive</option>
            </select>
            <br />
            <div classNameName="text-center">
              <button type="button" className="btn btn-warning">
                <i className="bi bi-plus-lg"></i> Save
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <i className="bi bi-x-lg"></i> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
