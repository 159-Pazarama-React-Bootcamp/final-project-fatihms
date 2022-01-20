import React from "react";

import ApplicationForm from "../../containers/ApplicationForm";
import Header from "../../components/Header";

import styles from "./styles.module.css";

function MakeApplicationPage() {
  return (
    <div className={styles["make-application-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <ApplicationForm />
        </article>
      </main>
    </div>
  );
}

export default MakeApplicationPage;
