import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "../pages";

import { nav } from "./Nav/Nav";
import { algo } from "./Algo/Algo";
import { cssSpecial } from "./CssSpecial/CssSpecial";

import { ButtonPrimary } from "../components/Button";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [{path: "/", element: <ButtonPrimary/>},...nav, ...algo, ...cssSpecial],
  },
]);
