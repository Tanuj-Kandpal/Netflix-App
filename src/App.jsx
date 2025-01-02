import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
// import Netflix from "./Pages/Netflix";
import { lazy, Suspense } from "react";
import ShimmerPage from "./Components/Shimmer";
import ErrorPage from "./Pages/ErrorPage";
import SignUpPage from "./Pages/SignUpPage";

//Lazy on demand
const Netflix = lazy(function () {
  return import("./Pages/Netflix");
});

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<ShimmerPage />}>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Netflix" element={<Netflix />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
