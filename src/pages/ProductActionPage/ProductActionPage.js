import React, { Component } from "react";
import callAPI from "../../utils/APICaller";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: 0,
      chkbStatus: false,
    };
  }

  generateProductID = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    var productID = this.generateProductID(5);
    var { txtName, txtPrice, chkbStatus } = this.state;
    callAPI("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
      productID: productID,
    }).then((res) => console.log(res));
  };

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-4">
        <form onSubmit={this.onSave}>
          <div className="mb-3">
            <label className="form-label">Product Name: </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price: </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
            />
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
