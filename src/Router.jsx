import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About";
import Work from "./pages/work/Work";
import WorkDetail from "./pages/work/WorkDetail";
import Program from "./pages/program/Program";
import Archive from "./pages/archive/Archive";
import Documentary from "./pages/archive/documentary/Documentary";
import Gallery from "./pages/archive/galllery/Gallery";
import Map from "./pages/Map";
import Made from "./pages/Made";
import NotFound from "./pages/NotFound";
import Staff from "./pages/archive/Staff";
import Memo from "./pages/archive/Memo";
import Onboarding from "./pages/Onboarding";
import RouteFade from "./components/RouterFade";

const RootLayout = () => {
  return (
    <>
      <RouteFade />
      <ScrollRestoration />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/work/:id",
        element: <WorkDetail />,
      },
      {
        path: "/program",
        element: <Program />,
      },
      {
        path: "/made",
        element: <Made />,
      },
      {
        path: "/archive",
        children: [
          {
            path: "",
            element: <Archive />,
          },
          {
            path: "staff",
            element: <Staff />,
          },
          {
            path: "documentary",
            element: <Documentary />,
          },
          {
            path: "memo",
            element: <Memo />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
