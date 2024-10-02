import { createBrowserRouter } from "react-router-dom";

import MainPage from "../pages/Main";
import BVBNav from "../components/BVBNav";
import NavLgDropDown from "../components/NavLgDropdown";
import SABurger from "../components/SABurger";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "bvb-nav",
        element: <BVBNav />,
      },
      {
        path: "nav-lg-dropdown",
        element: <NavLgDropDown />,
      },
      {
        path: "sa-burger",
        element: <SABurger />,
      },
    ],
  },
]);
