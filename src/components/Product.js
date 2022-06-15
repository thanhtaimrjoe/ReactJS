import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Product = () => {
  var products = [
    {
      id: 1,
      name: "Iphone 12",
      price: 500,
      slug: "iphone",
    },
    {
      id: 2,
      name: "Samsung Galaxy A53",
      price: 300,
      slug: "samsung",
    },
    {
      id: 3,
      name: "Oppo F1s",
      price: 600,
      slug: "oppo",
    },
  ];

  var data = useLocation();

  var result = products.map((product, index) => {
    return (
      <NavLink
        className="list-group-item"
        key={index}
        to={`${data.pathname}/${product.slug}`}
      >
        {product.id} - {product.name} - {product.price}
      </NavLink>
    );
  });
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>List of product</h1>
      <div className="row">
        <ul className="list-group">{result}</ul>
      </div>
    </div>
  );
};

export default Product;
