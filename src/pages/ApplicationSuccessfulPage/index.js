import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.css";

import Header from "../../components/Header";
import Result from "../../containers/Result";

function ApplicationSuccessfulPage() {
  return (
    <div className={styles["application-form-container"]}>
      <header>
        <Header title="Sonuç">
          <Link to="/basvuru-sorgula" className={styles["afc-link"]}>
            <h3>Başvuru Sorgula</h3>
            <i>
              <AiOutlineSearch size={30} />
            </i>
          </Link>
        </Header>
      </header>
      <main>
        <article>
          <Result />
        </article>
      </main>
    </div>
  );
}

export default ApplicationSuccessfulPage;
