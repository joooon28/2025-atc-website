import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/About";
import Work from "./pages/work/Work";
import WorkDetail from "./pages/work/WorkDetail";
import Program from "./pages/Program";
import Archive from "./pages/archive/Archive";
import Credit from "./pages/archive/Credit";
import Documentary from "./pages/archive/Documentary";
import Note from "./pages/archive/Note";
import Gallery from "./pages/archive/Gallery";
import Map from "./pages/Map";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
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
    element: <Archive />,
    children: [
      {
        path: "credit",
        element: <Credit />,
      },
      {
        path: "documentary",
        element: <Documentary />,
      },
      {
        path: "note",
        element: <Note />,
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
