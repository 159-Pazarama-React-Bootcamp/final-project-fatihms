import React from "react";

import Header from "../../components/Header";
import ApplicationStatusForm from "../../containers/ApplicationStatusForm";

import styles from "./styles.module.css";

function ApplicationStatusPage() {
  return (
    <div className={styles["application-status-container"]}>
      <header>
        <Header title="Başvuru Sorgula" />
      </header>
      <main>
        <article>
          <ApplicationStatusForm />
        </article>
      </main>
    </div>
  );
}

export default ApplicationStatusPage;
