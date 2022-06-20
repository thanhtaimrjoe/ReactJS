import React, { useEffect, useState } from "react";
import Menu from "../../components/menu/Menu";
import {
  actAddNewCategoryRequest,
  actFetchCategoriesRequest,
  actUpdateCategoryRequest,
} from "../../actions/category";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "../../components/category-item/CategoryItem";
import CategoryList from "../../components/category-list/CategoryList";
import CategoryModal from "../../components/modal/CategoryModal";

function CategoryPage(props) {
  //state
  const [showModal, setShowModal] = useState(false);

  //redux
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const fetchCategories = () => dispatch(actFetchCategoriesRequest());
  const updateCategory = (category, file) =>
    dispatch(actUpdateCategoryRequest(category, file));
  const addNewCategory = (category, file) =>
    dispatch(actAddNewCategoryRequest(category, file));

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

  const onShowCategoryDialog = () => {
    setShowModal(true);
  };

  const onCloseForm = () => {
    setShowModal(false);
  };

  const onSave = (category, file) => {
    addNewCategory(category, file);
    setShowModal(false);
  };

  return (
    <div>
      <Menu />
      <div className="d-flex flex-column align-items-center mt-5">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={onShowCategoryDialog}
          >
            Add new category
          </button>
          <CategoryList>{showCategories()}</CategoryList>
        </div>
      </div>
      {showModal ? (
        <CategoryModal onCloseForm={onCloseForm} onSave={onSave} />
      ) : (
        ""
      )}
    </div>
  );
}

export default CategoryPage;
