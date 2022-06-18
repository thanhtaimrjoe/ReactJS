import React from "react";
import Menu from "../../components/menu/Menu";

function CategoryPage(props) {
  return (
    <div>
      <Menu />

      <div className="d-flex flex-column align-items-center mt-5">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button type="button" className="btn btn-primary mb-3">
            Add new category
          </button>
          <div>
            <table className="table table-striped table-hover border">
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>N</td>
                  <td>N</td>
                  <td>N</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
