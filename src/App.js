import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MakeApplicationPage from "./pages/MakeApplicationPage";
import ApplicationSuccessfulPage from "./pages/ApplicationSuccessfulPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

import AdminLoginPage from "./pages/AdminLoginPage";
import ReferralListPage from "./pages/ReferralListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="basvuru-olustur" element={<MakeApplicationPage />} />
        <Route
          path="basvuru-basarili"
          element={<ApplicationSuccessfulPage />}
        />
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="admin/basvuru-listesi" element={<ReferralListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
