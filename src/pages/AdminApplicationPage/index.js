import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import AdminApplicationForm from "../../containers/AdminApplicationForm";
import Loading from "../../components/Loading";

import { fetchApplications } from "../../redux/ApplicationData/applicationDataSlice";

import styles from "./styles.module.css";

function AdminApplicationPage() {
  const code = useLocation().pathname.split("/")[3];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  const loading = useSelector((state) => state.applicationData.loading);

  /*eslint-disable */
  const foundApplication = useSelector((state) =>
    state.applicationData.applications.find(
      (application) => application.applicationCode === code
    )
  );

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }
  return (
    <div className={styles["application-status-container"]}>
      <header>
        <Header title="Başvuru Bilgisi" />
      </header>
      <main>
        <article>
          <AdminApplicationForm foundApplication={foundApplication} />
        </article>
      </main>
    </div>
  );
}

export default AdminApplicationPage;
