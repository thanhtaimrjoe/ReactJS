import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const ProductActionPage = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const addProductRequest = (product) =>
    dispatch(actAddProductRequest(product));
  const getProductRequest = (id) => dispatch(actGetProductRequest(id));
  const updateProductRequest = (product) =>
    dispatch(actUpdateProductRequest(product));
  var paramID = params.id;

  useEffect(() => {
    if (paramID) {
      getProductRequest(paramID);
    }
  }, []);

  useEffect(() => {
    if (paramID) {
      setID(paramID);
      setName(product.name);
      setPrice(product.price);
      setStatus(product.status);
    }
  }, [product]);

  const generateProductID = (length) => {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "name") {
      setName(value);
    }
    if (name === "price") {
      setPrice(value);
    }
    if (name === "status") {
      setStatus(value);
    }
  };

  const onSave = (event) => {
    event.preventDefault();
    var productID = generateProductID(5);
    var product = {
      id: id,
      name: name,
      price: price,
      status: status,
      productID: productID,
    };
    if (id) {
      updateProductRequest(product);
      navigate(-1);
    } else {
      addProductRequest(product);
      navigate(-1);
    }
  };

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-4">
      <form onSubmit={onSave}>
        <div className="mb-3">
          <label className="form-label">Product Name: </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price: </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={price}
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="status"
            checked={status}
            value={status}
            onChange={onChange}
          />
          <label className="form-check-label">Available</label>
        </div>
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductActionPage;
