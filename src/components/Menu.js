import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

//Customer link
// const MenuLink = ({ label, to }) => {
//   return (
//     <Route
//       path={to}
//       children={({ match }) => {
//         var active = match ? "customli" : "";
//         return (
//           <li className={active}>
//             <NavLink to={to} className="nav-link">
//               {label}
//             </NavLink>
//           </li>
//         );
//       }}
//     />
//   );
// };

class Menu extends Component {
  render() {
    return (
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
              <li className="nav-item">
                <NavLink to="product" className="nav-link">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="login" className="nav-link">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
