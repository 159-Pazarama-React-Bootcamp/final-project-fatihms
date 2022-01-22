import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MakeApplicationPage from "./pages/MakeApplicationPage";
import ApplicationSuccessfulPage from "./pages/ApplicationSuccessfulPage";
import ApplicationStatusPage from "./pages/ApplicationStatusPage";
import UserApplicationPage from "./pages/UserApplicationPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import AdminLoginPage from "./pages/AdminLoginPage";
import ReferralListPage from "./pages/ReferralListPage";
import AdminApplicationPage from "./pages/AdminApplicationPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="basvuru-olustur" element={<MakeApplicationPage />} />
        <Route
          path="basvuru-basarili"
          element={<ApplicationSuccessfulPage />}
        />
        <Route path="basvuru-sorgula" element={<ApplicationStatusPage />} />
        <Route path="basvuru/:id" element={<UserApplicationPage />} />
        <Route path="admin" element={<AdminLoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="admin/basvuru-listesi" element={<ReferralListPage />} />
          <Route path="admin/basvuru/:id" element={<AdminApplicationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
