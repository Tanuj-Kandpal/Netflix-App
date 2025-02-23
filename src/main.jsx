import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./Routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <RouterProvider router={AppRouter}>
          <App />
        </RouterProvider>
      </AuthProvider>
    </RecoilRoot>
    <ToastContainer />
  </StrictMode>
);
