import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter } from "react-router-dom";
import BoundaryErrors from "../Components/BoundaryErrors";
import ProtectedRoute from "../Components/ProtectedRoute";
import ShimmerPage from "../Components/Shimmer";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import SignUpPage from "../Pages/SignUpPage";
import TvShows from "../Pages/TvShows";
import ErrorPage from "./../Pages/ErrorPage";
import LoginPage from "./../Pages/LoginPage";

//Lazy on Demand
const Netflix = lazy(function () {
  return import("../Pages/Netflix");
});

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home/:homeId",
    element: "",
  },
  {
    path: "/Signup",
    element: <SignUpPage />,
  },
  {
    path: "/Netflix",
    element: (
      <ErrorBoundary FallbackComponent={BoundaryErrors}>
        <Suspense fallback={<ShimmerPage />}>
          <ProtectedRoute>
            <Netflix />
          </ProtectedRoute>
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/TvShows",
    element: <TvShows />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Search",
    element: <SearchPage />,
  },
]);

export default AppRouter;
