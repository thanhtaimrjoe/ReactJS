import React, { Component } from "react";

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value, 
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>
            Add new job
            <span onClick={this.onCloseForm} className="float-end">
            <i className="bi bi-x-circle"></i>
            </span>
          </h4>
          
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
            </div>
            <label>Status: </label>
            <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
              <option value={true}>Active</option>
              <option value={false}>InActive</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                <i className="bi bi-plus-lg"></i> Save
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick={this.onClear}>
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
