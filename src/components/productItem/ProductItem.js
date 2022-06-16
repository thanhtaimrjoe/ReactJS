import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { index, product } = this.props;
    var statusName = product.status ? "Available" : "Out of stock";
    var statusClass = product.status ? "success" : "warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge bg-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning me-2">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
