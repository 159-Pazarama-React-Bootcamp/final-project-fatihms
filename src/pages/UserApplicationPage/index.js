import React, { useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { AiOutlinePlusCircle } from "react-icons/ai";

import Header from "../../components/Header";
import ApplicationInfo from "../../containers/ApplicationInfo";
import Loading from "../../components/Loading";

import styles from "./styles.module.css";

import { fetchApplications } from "../../redux/ApplicationData/applicationDataSlice";

function UserApplicationPage() {
  const code = useLocation().pathname.split("/")[2];

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
    <>
      {foundApplication ? (
        <div className={styles["user-application-page"]}>
          <header>
            <Header title="Başvurum">
              <Link to="/basvuru-sorgula" className={styles["mac-link"]}>
                <h3>Başvuru Oluştur</h3>
                <i>
                  <AiOutlinePlusCircle size={30} />
                </i>
              </Link>
            </Header>
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
