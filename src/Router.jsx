import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About";
import Work from "./pages/work/Work";
import WorkDetail from "./pages/work/WorkDetail";
import Program from "./pages/program/Program";
import Archive from "./pages/archive/Archive";
import Documentary from "./pages/archive/documentary/Documentary";
import Gallery from "./pages/archive/galllery/Gallery";
import Map from "./pages/Map";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";
import Staff from "./pages/archive/Staff";
import Memo from "./pages/archive/Memo";
import Onboarding from "./pages/Onboarding";

const router = createBrowserRouter([
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
    children: [
      {
        path: ":id",
        element: <WorkDetail />,
      },
    ],
  },
  {
    path: "/program",
    element: <Program />,
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
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
