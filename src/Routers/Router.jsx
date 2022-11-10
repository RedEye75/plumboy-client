import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import AddService from "../components/AddService";
import Blogs from "../components/Blogs";

import Contact from "../components/Contact";
import Error from "../components/Error";
import Feature from "../components/Feature";
import Home from "../components/Home";
import MyReview from "../components/MyReview";
import Priceing from "../components/Priceing";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import UserFeedbacks from "../components/UserFeedbacks";
import Root from "../Layout/Root";
import PrivateRoute from "../Routers/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews/:id",
        element: <Reviews></Reviews>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-seven-lilac.vercel.app/services/${params.id}`
          ),
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/feature",
        element: <Feature></Feature>,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/userFeedback",
        element: <UserFeedbacks></UserFeedbacks>,
      },
      {
        path: "/myReview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
