import React, { useEffect, useState } from "react";

import axios from "axios";
import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import API from "../../config/api";

function CheckCode() {
  const [applications, setApplications] = useState([]);

  const codeValue = useSelector((state) => state.code.value);
  console.log(codeValue);

  const isAuthenticated = false;

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
    applications.filter((application) =>
      application.code === codeValue ? (isAuthenticated = true) : null
    );
  }, [applications]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/404" />;
}

export default CheckCode;
