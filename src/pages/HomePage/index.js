import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchApplications } from "../../redux/ApplicationData/applicationDataSlice";

import styles from "./styles.module.css";

function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.applicationData);

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  /*eslint-disable */
  const testt = useSelector((state) =>
    state.applicationData.applications.find(
      (application) => application.applicationCode === "laj90eripd"
    )
  );
  console.log(testt);
  /* eslint-enable */

  console.log(data.applications);

  return (
    <div className={styles.homepage}>
      <main>
        <Link to="/basvuru-olustur" className={styles["homepage-link"]}>
          <button type="button">Başvuru Oluştur</button>
        </Link>
        <Link to="/basvuru-sorgula" className={styles["homepage-link"]}>
          <button type="button">Başvuru Sorgula</button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
