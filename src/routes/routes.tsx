import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import HomePage from "../page/HomePage";
import Dashboard from "../page/Dashboard";
import { useEffect } from "react";
import React from "react";
import PrivateRoute from "../components/PrivateRoute";

export const AppRouter: React.FC = () => {
  const [isloggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
