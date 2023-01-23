import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/components/Home";
import Intro from "../pages/components/Intro";
import Root from "../pages/components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "intro",
        element: <Intro />,
      },
    ],
  },
]);

export default router;
