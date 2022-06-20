import React, { useEffect, useState } from "react";

function CategoryModal(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  var { categoryInfo } = props;

  useEffect(() => {
    if (categoryInfo) {
      setName(categoryInfo.name);
    }
  }, []);

  const onCloseForm = () => {
    props.onCloseForm();
  };

  const onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "file" ? target.files[0] : target.value;
    if (name === "name") {
      setName(value);
    }
    if (name === "image") {
      setImage(value);
    }
  };

  const onSave = (event) => {
    event.preventDefault();
    categoryInfo.name = name;
    props.onSave(categoryInfo, image);
  };

  return (
    <div
      className="modal show fade"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Category information</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCloseForm}
            ></button>
          </div>
          <form onSubmit={onSave}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="col-form-label">ID:</label>
                <input
                  type="text"
                  className="form-control"
                  value={categoryInfo.id}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3 d-flex flex-column">
                <label className="col-form-label">Image:</label>
                <input
                  className="form-control mb-3"
                  type="file"
                  name="image"
                  onChange={onChange}
                ></input>
                <img
                  src={image ? URL.createObjectURL(image) : categoryInfo.image}
                  className="img-thumbnail"
                  alt="..."
                  style={{ width: "200px" }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseForm}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
