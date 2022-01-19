import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MakeApplicationPage from "./pages/MakeApplicationPage";
import ApplicationSuccessfulPage from "./pages/ApplicationSuccessfulPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
