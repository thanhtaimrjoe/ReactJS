import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
  {
    path: "/",
    element: () => <HomePage />,
  },
  {
    path: "product-list",
    element: () => <ProductListPage />,
  },
  {
    path: "product/:id/edit",
    element: () => <ProductActionPage />,
  },
  {
    path: "product/add",
    element: () => <ProductActionPage />,
  },
  {
    path: "*",
    element: () => <NotFoundPage />,
  },
];
export default routes;
