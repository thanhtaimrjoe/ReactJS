import React, { Component } from 'react';
import Search from './components/Search';
import Sort from './components/Sort';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import {v4 as uuidv4} from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onSubmit = (task) => {
    task.id = uuidv4();
    var {tasks} = this.state;
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    var {tasks, isDisplayForm} = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
    return (
      <div className="container">
      <div className="text-center">
        <h1>Job Management</h1>
      </div>
      <hr/>
      <div className="row">
        <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
          {/* Form */}
          {elmTaskForm}
        </div>
        <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
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
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;