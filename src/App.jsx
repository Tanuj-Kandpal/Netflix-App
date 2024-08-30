import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Netflix from "./Pages/Netflix";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/Netflix" element={<Netflix />} />
      <Route path="/SignUp" element={<LoginPage />}></Route>
    </Routes>
  </BrowserRouter>
}
export default App;