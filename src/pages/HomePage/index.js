import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <main>
        <Link to="/basvuru-olustur" className={styles["make-application-link"]}>
          <button type="button">Başvuru Oluştur</button>
        </Link>
        <Link
          to="/basvuru-sorgula"
          className={styles["application-status-link"]}
        >
          <button type="button">Başvuru Sorgula</button>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
