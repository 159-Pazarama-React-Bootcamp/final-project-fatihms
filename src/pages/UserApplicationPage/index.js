import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Header from "../../components/Header";
import ApplicationInfo from "../../containers/ApplicationInfo";

import styles from "./styles.module.css";

import { fetchApplications } from "../../redux/ApplicationData/applicationDataSlice";

function UserApplicationPage() {
  const code = useLocation().pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  /*eslint-disable */
  const foundApplication = useSelector((state) =>
    state.applicationData.applications.find(
      (application) => application.applicationCode === code
    )
  );

  return (
    <>
      {foundApplication ? (
        <div className={styles["user-application-page"]}>
          <header>
            <Header />
          </header>
          <main>
            <article>
              <ApplicationInfo foundApplication={foundApplication} />
            </article>
          </main>
        </div>
      ) : (
        <div className={styles["uap-notfound"]}>404</div>
      )}
    </>
  );
}

export default UserApplicationPage;
/* eslint-enable */
