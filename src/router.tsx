import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
]);
