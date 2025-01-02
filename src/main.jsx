import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./Contexts/AuthContext.jsx";

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
