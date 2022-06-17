import React, { Component } from "react";
import ProductList from "../../components/productList/ProductList";
import ProductItem from "../../components/productItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actDeleteProductRequest,
  actFetchAllProductsRequest,
} from "../../actions/index";

class ProductListPage extends Component {
  componentDidMount() {
    this.props.actFetchAllProductsRequest();
  }

  onDelete = (id) => {
    this.props.actDeleteProductRequest(id);
  };

  render() {
    var { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info my-3">
          Add new product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }
  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    actFetchAllProductsRequest: () => {
      dispatch(actFetchAllProductsRequest());
    },
    actDeleteProductRequest: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
