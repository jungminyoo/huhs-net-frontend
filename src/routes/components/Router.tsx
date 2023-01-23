import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Intro from "./Intro";
import Root from "./Root";

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
