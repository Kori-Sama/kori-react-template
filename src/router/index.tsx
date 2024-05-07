import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/layout";
import HomePage from "@/pages/home";
import NotFound from "@/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
