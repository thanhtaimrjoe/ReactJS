import React from "react";
import { NavLink } from "react-router-dom";

function ProductItem(props) {
  const { index, product } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.categoryName}</td>
      <td>{product.productID}</td>
      <td>
        <NavLink to={`/product/${product.productID}`}>{product.name}</NavLink>
      </td>
    </tr>
  );
}

export default ProductItem;
