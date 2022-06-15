import React, { Component } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand color-nav" href="/#">
              Yama
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link color-nav"
                    aria-current="page"
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-nav" href="/#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;
