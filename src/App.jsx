import "./App.css";
import router from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import Maintenance from "./pages/Maintenance.jsx";

function App() {
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
