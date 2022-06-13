import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Job Management</h1>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            <i className="bi bi-plus-lg"></i> Add new job
          </button>
          {/* Search & sort */}
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="input-group mt-15">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-btn">
                  <button type="button" className="btn btn-primary">
                    <i className="bi bi-search"></i> Search
                  </button>
                </span>
              </div>
            </div>

            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="dropdown mt-15">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" role="button" href="#">
                      <i class="bi bi-sort-alpha-down"></i> Name A-Z
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" role="button" href="#">
                      <i class="bi bi-sort-alpha-down-alt"></i> Name Z-A
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" role="button" href="#">
                      Active
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" role="button" href="#">
                      InActive
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
