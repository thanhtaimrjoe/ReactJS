import "./App.css";
import Search from "./components/Search";
import Sort from "./components/Sort";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Job Management</h1>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* Form */}
          <TaskForm />
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i> Add new job
          </button>
          {/* Search - Sort */}
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Search />
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Sort />
            </div>
          </div>
          {/* List */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
