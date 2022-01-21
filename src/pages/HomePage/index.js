import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "./styles.module.css";

function HomePage() {
  const countValue = useSelector((state) => state.counter.value);
  console.log(countValue);

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