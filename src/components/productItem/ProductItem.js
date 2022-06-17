import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      this.props.onDelete(id);
    }
  };
  render() {
    var { index, product } = this.props;
    var statusName = product.status ? "Available" : "Out of stock";
    var statusClass = product.status ? "success" : "warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.productID}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge bg-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-warning me-2"
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
