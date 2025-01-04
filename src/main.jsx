import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
    <ToastContainer />
  </StrictMode>
);
