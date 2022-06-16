function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Call API
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info my-3">
              Add new product
            </button>
            <div className="card">
              <div className="card-header">List of products</div>
              <div className="card-body">
                <table className="table table-hover align-middle table-striped table-responsive">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">STT</th>
                      <th scope="col">Code</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td scope="row">A1</td>
                      <td scope="row">Iphone 13</td>
                      <td scope="row">1300</td>
                      <td scope="row">
                        <span className="badge bg-success">Available</span>
                      </td>
                      <td scope="row">
                        <button type="button" className="btn btn-warning me-2">
                          Edit
                        </button>

                        <button type="button" className="btn btn-danger">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
