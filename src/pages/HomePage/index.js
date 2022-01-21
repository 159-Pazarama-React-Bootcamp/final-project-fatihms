import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "./styles.module.css";

function HomePage() {
  const codeValue = useSelector((state) => state.code.value);
  console.log(codeValue);

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
