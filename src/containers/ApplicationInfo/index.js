import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";

import API from "../../config/api";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";

function ApplicationInfo() {
  const [applications, setApplications] = useState([]);
  const [foundApplication, setFoundApplication] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(loading, foundApplication);

  const code = useLocation().pathname.split("/")[2];
  console.log(code);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API);
        setApplications(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  /*eslint-disable */
  useEffect(() => {
    console.log("---");
    applications.find((application) => {
      if (application.applicationCode === code) {
        setFoundApplication(application);
      }
    });
  }, [applications]);

  /* eslint-enable */

  console.log(foundApplication);

  return (
    <section className={styles["application-info"]}>
      <FormContainer width="20">X</FormContainer>
    </section>
  );
}

export default ApplicationInfo;
