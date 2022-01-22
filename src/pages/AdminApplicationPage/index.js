import React from "react";

import Header from "../../components/Header";
import AdminApplicationForm from "../../containers/AdminApplicationForm";

import styles from "./styles.module.css";

function AdminApplicationPage() {
  return (
    <div className={styles["application-status-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <AdminApplicationForm />
        </article>
      </main>
    </div>
  );
}

export default AdminApplicationPage;
