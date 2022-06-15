import React, { Component } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const MenuLink = ({ label, to }) => {
  return (
    <Route
      path={to}
      children={({ match }) => {
        var active = match ? "customli" : "";
        return (
          <li className={active}>
            <NavLink to={to} className="nav-link">
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Yama
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
