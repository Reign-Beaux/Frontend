import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

const Home = lazy(() => import("@Presentation/Pages/Home/Home"));
const MainLayout = lazy(() => import("@Presentation/Components/Layouts/MainLayout/MainLayout"))

const routes = [
  {
    path: Routes.Home,
    element: (
      <Suspense fallback={<div>Cargando...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <>Página no encontrada</>,
  },
];

const router = createBrowserRouter(routes);

export { router };
