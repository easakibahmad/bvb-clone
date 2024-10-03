import { BVBNav, NavLgDropDown, SABurger } from "../../components";
import { navRoutes } from "../../constants";

export const nav = [
  {
    path: navRoutes.BVB_NAV,
    element: <BVBNav />,
  },
  {
    path: navRoutes.NAV_LG_DROPDOWN,
    element: <NavLgDropDown />,
  },
  {
    path: navRoutes.SA_BURGER,
    element: <SABurger />,
  },
];
