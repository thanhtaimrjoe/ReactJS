import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Routes>{this.showContentMenu(routes)}</Routes>
      </div>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={route.element()} />
        );
      });
    }
    return result;
  };
}

export default App;
