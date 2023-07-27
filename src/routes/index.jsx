import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/WebLayout";
import Home from "~/pages/home";
import Blog from "~/pages/blog";
import Equipments from "~/pages/equipments";
import Stories from "~/pages/stories";
import BlogInner from "~/pages/blog-inner";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/equipments",
        element: <Equipments />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
      {
        path: "blog/:slug",
        element: <BlogInner />,
      },
    ],
  },
]);

export default routes;
