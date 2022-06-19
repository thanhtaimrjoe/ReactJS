import React from "react";

function CategoryItem(props) {
  const { index, category } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{category.id}</td>
      <td>{category.name}</td>
    </tr>
  );
}

export default CategoryItem;
