import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

const Home = lazy(() => import("@Presentation/Pages/Home/Home"));
const MainLayout = lazy(() => import("@Presentation/Components/Layouts/MainLayout/MainLayout"));
const AboutMe = lazy(() => import("@Presentation/Pages/AboutMe/AboutMe"));
const Blog = lazy(() => import("@Presentation/Pages/Blog/Blog"));
const ArticleViewer = lazy(() => import("@Presentation/Pages/Blog/Components/ArticleViewer/ArticleViewer"));

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
      {
        path: Routes.AboutMe,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <AboutMe />
          </Suspense>
        ),
      },
      {
        path: Routes.Blog,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: `${Routes.Blog}/:slug`,
        element: (
          <Suspense fallback={<div>Cargando...</div>}>
            <ArticleViewer />
          </Suspense>
        ),
      }
    ],
  },
  {
    path: "*",
    element: <>Página no encontrada</>,
  },
];

const router = createBrowserRouter(routes);

export { router };
