import React, { useEffect, useState } from "react";

import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";

import API from "../../config/api";

function CheckCode() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get(API);
        console.log(result.data);
        setApplications(result.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    applications.filter((application) => {
      if (application.status === "onaylandı") {
        console.log(application.status);
      }
    });
  }, [applications]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/404" />;
}

export default CheckCode;
