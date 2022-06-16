import React, { Component } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductItem from "../../components/productItem/ProductItem";

class ProductListPage extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone 13",
        price: 1200,
        status: true,
      },
      {
        id: 2,
        name: "Iphone 13",
        price: 1200,
        status: true,
      },
      {
        id: 3,
        name: "Iphone 13",
        price: 1200,
        status: true,
      },
      {
        id: 4,
        name: "Iphone 13",
        price: 1200,
        status: true,
      },
    ];

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info my-3">
          Add new product
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} index={index} product={product} />;
      });
    }
    return result;
  };
}

export default ProductListPage;
