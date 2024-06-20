import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home";
import ShopPage from "@/pages/Shop";
import ContactsPage from "@/pages/Contacts";
import AboutPage from "@/pages/About";
import ProductPage from "@/pages/Product";
import NotFoundPage from "@/pages/404";
import Cart from "./pages/Cart";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
