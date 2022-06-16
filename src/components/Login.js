import React, { Component, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: username,
          password: password,
        })
      );
    }
  };
  var location = useLocation();
  var loggedUser = localStorage.getItem("user");
  if (loggedUser) {
    return (
      <Navigate
        to={{
          pathname: "/product",
          state: {
            from: location,
          },
        }}
        replace={true}
      />
      // <Navigate to="/product" replace={true} />
    );
  }
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={onLogin}>
          <legend>Sign In</legend>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input Username"
              value={username}
              name="username"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Input Password"
              value={password}
              name="password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
