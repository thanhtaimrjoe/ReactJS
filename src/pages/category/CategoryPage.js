import React, { useEffect } from "react";
import Menu from "../../components/menu/Menu";
import {
  actFetchCategoriesRequest,
  actUpdateCategoryRequest,
} from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../components/category-item/CategoryItem";
import CategoryList from "../../components/category-list/CategoryList";

function CategoryPage(props) {
  //redux
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const fetchCategories = () => dispatch(actFetchCategoriesRequest());
  const updateCategory = (category) =>
    dispatch(actUpdateCategoryRequest(category));

  useEffect(() => {
    fetchCategories();
  }, []);

  const onEditCategoryInfo = (category, file) => {
    updateCategory(category, file);
  };

  const showCategories = () => {
    var result = null;
    if (categories.length > 0) {
      result = categories.map((category, index) => {
        return (
          <CategoryItem
            key={index}
            index={index}
            category={category}
            onEditCategoryInfo={onEditCategoryInfo}
          />
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
          <CategoryList>{showCategories()}</CategoryList>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
