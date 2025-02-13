import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import Home from "~/pages/Home/Home";
import AboutUs from "~/pages/AboutUs/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/podcast",
        element: "podcast",
      },
      {
        path: "/bultenler",
        element: "bültenler",
      },
      {
        path: "/yazarlar",
        element: "yazarlar",
      },
      {
        path: "/hakkimizda",
        element: <AboutUs />,
      },
      {
        path: "/iletisim",
        element: "iletişim",
      },
    ],
  },
]);

export default routes;
