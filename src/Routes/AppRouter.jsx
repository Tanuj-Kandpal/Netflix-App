import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import SignUpPage from "../Pages/SignUpPage";
import ErrorPage from "./../Pages/ErrorPage";
import LoginPage from "./../Pages/LoginPage";
import { lazy, Suspense } from "react";
import ShimmerPage from "../Components/Shimmer";
import SearchPage from "../Pages/SearchPage";
import TvShows from "../Pages/TvShows";

//Lazy on Demand
const Netflix = lazy(function () {
  return import("../Pages/Netflix");
});

const appRouter = createBrowserRouter([
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
      <Suspense fallback={<ShimmerPage />}>
        <Netflix />
      </Suspense>
    ),
  },
  {
    path: "/Signup",
    element: <SignUpPage />,
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

export default appRouter;
