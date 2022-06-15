import React from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  var data = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is the detail of {data.name}</h1>
    </div>
  );
};

export default ProductItem;
