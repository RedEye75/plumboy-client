import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blogs from "../components/Blogs";

import Contact from "../components/Contact";
import Error from "../components/Error";
import Feature from "../components/Feature";
import Home from "../components/Home";
import Priceing from "../components/Priceing";
import Services from "../components/Services";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
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
      { path: "/blogs", element: <Blogs></Blogs> },

      { path: "/signIn", element: <SignIn></SignIn> },
      { path: "/signUp", element: <SignUp></SignUp> },
      { path: "/feature", element: <Feature></Feature> },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
