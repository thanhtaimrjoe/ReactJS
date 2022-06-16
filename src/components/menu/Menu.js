import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Products",
    to: "product-list",
  },
];

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Call API
          </a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">{this.showMenus(menus)}</ul>
          </div>
        </div>
      </nav>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <li className="nav-item">
            <NavLink
              to={menu.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return result;
  };
}

export default Menu;
