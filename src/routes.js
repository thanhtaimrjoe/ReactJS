import CategoryPage from "./pages/category/CategoryPage";
import ProductPage from "./pages/product/ProductPage";
import SignInPage from "./pages/sign-in/SignInPage";

const routes = [
  {
    path: "/",
    element: () => <SignInPage />,
  },
  {
    path: "home",
    element: () => <CategoryPage />,
  },
  {
    path: "product-list",
    element: () => <ProductPage />,
  },
];
export default routes;
