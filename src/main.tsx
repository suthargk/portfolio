import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Calendario from "./components/Projects/Calendario/Calendario";
import PrivacyPolicy from "./components/Projects/Calendario/legal/PrivacyPolicy";
import TermsOfService from "./components/Projects/Calendario/legal/TermsOfService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "calendario",
    element: <Calendario />,
  },
  {
    path: "calendario/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "calendario/terms",
    element: <TermsOfService />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
