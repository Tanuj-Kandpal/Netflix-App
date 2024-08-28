import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
}
export default App;