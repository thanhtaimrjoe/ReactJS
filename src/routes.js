import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import ProductItem from "./components/ProductItem";
import Login from "./components/Login";

const routes = [
  {
    path: "/",
    element: () => <Home />,
  },
  {
    path: "about",
    element: () => <About />,
  },
  {
    path: "contact",
    element: () => <Contact />,
  },
  {
    path: "product",
    element: () => <Product />,
  },
  {
    path: "product/:name", //name is param's name
    element: () => <ProductItem />,
  },
  {
    path: "login",
    element: () => <Login />,
  },
  {
    path: "*",
    element: () => <NotFound />,
  },
];
export default routes;
