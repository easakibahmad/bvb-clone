import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "../pages";

import {
  BeautyCurveHome,
  BVBNav,
  NavLgDropDown,
  SABurger,
  KMPAlgo,
  NQueens,
  MergeSort,
  FlexOne,
} from "../components";

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
      {
        path: "beauty-curve-home",
        element: <BeautyCurveHome />,
      },
      {
        path: "kmp-algo",
        element: <KMPAlgo />,
      },
      {
        path: "n-queens",
        element: <NQueens />,
      },
      {
        path: "merge-sort",
        element: <MergeSort />,
      },
      {
        path: "flex-one",
        element: <FlexOne />,
      },
    ],
  },
]);
