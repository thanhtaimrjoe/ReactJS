import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-4">
        <form>
          <div className="mb-3">
            <label className="form-label">Product Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price: </label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Available</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
