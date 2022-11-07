import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Home from "../components/Home";
import Priceing from "../components/Priceing";
import Services from "../components/Services";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/priceing",
        element: <Priceing></Priceing>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },

      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
