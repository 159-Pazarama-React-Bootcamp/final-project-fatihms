import React from "react";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function HomePage() {
  return (
    <body className={styles.homepage}>
      <main>
        <Link to="/basvuru-olustur" className={styles["homepage-link"]}>
          <button type="button">Başvuru Oluştur</button>
        </Link>
        <Link to="/basvuru-olustur" className={styles["homepage-link"]}>
          <button type="button">Başvuru Sorgula</button>
        </Link>
      </main>
    </body>
  );
}

export default HomePage;
