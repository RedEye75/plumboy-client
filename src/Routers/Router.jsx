import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
import Priceing from "../components/Priceing";
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
      { path: "/priceing", element: <Priceing></Priceing> },

      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
