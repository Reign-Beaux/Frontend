import "@Application/Styles/CustomElementsStyles.scss";
import "@Application/Styles/Rules.scss";
import { router } from "@Infrastructure/Router/Router.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
