import React from "react";

import Header from "../../components/Header";
import ApplicationStatusForm from "../../containers/ApplicationStatusForm";

import styles from "./styles.module.css";

function ApplicationStatusPage() {
  return (
    <body className={styles["application-status-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <ApplicationStatusForm />
        </article>
      </main>
    </body>
  );
}

export default ApplicationStatusPage;
