import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import { actFetchProductInforByIDRequest } from "../../actions/product";
import { useDispatch, useSelector } from "react-redux";

function ProductDetailPage(props) {
  //router
  var params = useParams();
  //redux
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProductInfo = (productID) =>
    dispatch(actFetchProductInforByIDRequest(productID));

  useEffect(() => {
    fetchProductInfo(params.id);
  }, []);
  return (
    <div>
      <Menu />
      <div className="d-flex flex-column align-items-center mt-5">
        {/* Card */}
        <div className="card mb-5" style={{ maxWidth: "700px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.overview}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <p className="h4 mb-3">Episode list</p>
          <div
            className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            style={{ backgroundColor: "yellow" }}
          >
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Characters */}
        <div className="container mb-4">
          <p className="h4 mb-3">Character list</p>
          <div
            className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            style={{ backgroundColor: "yellow" }}
          >
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "12rem" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/yama-98f64.appspot.com/o/products%2F95d07660-e64d-11ec-98ae-c91202800daa?alt=media&token=ed69a95a-2968-4469-a535-2528eaff1bb4"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Price: 100$</p>
                  <button type="button" class="btn btn-primary">
                    Edit episode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
