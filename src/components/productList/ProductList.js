import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">List of products</div>
        <div className="card-body">
          <table className="table table-hover align-middle table-striped table-responsive">
            <thead className="thead-dark">
              <tr>
                <th>STT</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
