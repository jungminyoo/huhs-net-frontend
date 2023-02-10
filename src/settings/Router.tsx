import { createHashRouter as createRouter } from "react-router-dom";
import Home from "../pages/components/Home";
import Intro from "../pages/components/Intro";
import ErrorNotFound from "../error/components/ErrorNotFound";
import Root from "../pages/components/Root";
import ErrorComponent from "../error/components/ErrorComponent";

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "intro",
        element: <Intro />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
]);

export default router;
