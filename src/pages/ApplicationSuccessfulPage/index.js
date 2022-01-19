import React from "react";

import styles from "./styles.module.css";

import Header from "../../components/Header";
import Result from "../../containers/Result";

function ApplicationSuccessfulPage() {
  return (
    <body className={styles["application-form-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <Result />
        </article>
      </main>
    </body>
  );
}

export default ApplicationSuccessfulPage;
