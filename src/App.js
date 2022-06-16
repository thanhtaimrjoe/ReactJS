import React, { Component } from "react";
import Menu from './components/menu/Menu';
import {Routes, Route} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <div className="container">
          <div className="row">
            {this.showContents(routes)}
          </div>
        </div>
      </div>
    );
  }

  showContents = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element()} />
      })
    }
    return <Routes>{result}</Routes>
  }
}

export default App;
