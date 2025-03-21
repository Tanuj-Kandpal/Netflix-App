import { lazy } from "react";

export const Netflix = lazy(function () {
  return import("../Pages/Netflix");
});
