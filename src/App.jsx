import {
  BrowserRouter,
  Route,
  Routes,
  useRouteError,
  useRouteLoaderData,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Netflix from "./Pages/Netflix";
import SignUpPage from "./Pages/SignUpPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Netflix" element={<Netflix />} />
        <Route path="/SignUp" element={<SignUpPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
