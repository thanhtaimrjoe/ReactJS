import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onLogin = (event) => {
    event.preventDefault();
    var { txtUsername, txtPassword } = this.state;
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };

  render() {
    var { txtUsername, txtPassword } = this.state;
    var loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      return <Navigate to="/product" replace={true} />;
    }
    return (
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onLogin}>
            <legend>Sign In</legend>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input Username"
                value={txtUsername}
                name="txtUsername"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Input Password"
                value={txtPassword}
                name="txtPassword"
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
