import React from "react";

import Header from "../../components/Header";
import ApplicationInfo from "../../containers/ApplicationInfo";

import styles from "./styles.module.css";

function UserApplicationPage() {
  return (
    <div className={styles["referral-list-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <ApplicationInfo />
        </article>
      </main>
    </div>
  );
}

export default UserApplicationPage;
