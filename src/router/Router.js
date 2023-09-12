import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import JoinPage from "../pages/JoinPage";
import { isLoggedIn } from "../util/checkoutUserToken";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn() ? <Navigate to="/main" /> : <LoginPage />}
        />
        <Route
          path="/join"
          element={isLoggedIn() ? <Navigate to="/main" /> : <JoinPage />}
        />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
