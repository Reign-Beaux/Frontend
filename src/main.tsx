import "@Application/Styles/CustomElementsStyles.css";
import "@Application/Styles/Rules.css";
import { router } from "@Infrastructure/Router/Router.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
