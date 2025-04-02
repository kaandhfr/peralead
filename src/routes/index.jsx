import { createBrowserRouter } from "react-router-dom";
import App from "~/App";
import Home from "~/pages/Home/Home";
import AboutUs from "~/pages/AboutUs/AboutUs";
import store from "~/redux/store";
import { Provider } from "react-redux";
import CategoryListingPage from "~/pages/CategoryListingPage/CategoryListingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
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
      {
        path: "/kategori",
        element: <CategoryListingPage />,
      },
    ],
  },
]);

export default routes;
