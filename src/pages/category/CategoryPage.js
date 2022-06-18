import React, { useEffect } from "react";
import Menu from "../../components/menu/Menu";
import { actFetchCategoriesRequest } from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";

function CategoryPage(props) {
  //redux
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const fetchCategories = () => dispatch(actFetchCategoriesRequest());

  useEffect(() => {
    fetchCategories();
  }, []);

  const showCategories = () => {
    var result = null;
    if (categories.length > 0) {
      result = categories.map((category, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{category.id}</td>
            <td>{category.name}</td>
          </tr>
        );
      });
    }
    return result;
  };

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
              <tbody>{showCategories()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
