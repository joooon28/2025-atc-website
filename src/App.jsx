import "./App.css";
import router from "./Router.jsx";
import { RouterProvider, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
