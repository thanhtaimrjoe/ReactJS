import React, { useState } from "react";
import CategoryModal from "../modal/CategoryModal";

function CategoryItem(props) {
  const { index, category } = props;
  const [categoryInfo, setCategoryInfo] = useState();
  const [showModal, setShowModal] = useState(false);

  const onShowCategoryInfo = (category) => {
    setCategoryInfo(category);
    setShowModal(true);
  };

  const onSave = (category, file) => {
    props.onEditCategoryInfo(category, file);
    setShowModal(false);
  };

  const onCloseForm = () => {
    setShowModal(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.id}</td>
      <td>{category.name}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onShowCategoryInfo(category)}
        >
          See detail
        </button>
        {showModal ? (
          <CategoryModal
            categoryInfo={categoryInfo}
            onCloseForm={onCloseForm}
            onSave={onSave}
          />
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

export default CategoryItem;
