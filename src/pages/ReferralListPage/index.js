import React from "react";

import Header from "../../components/Header";
import ReferralList from "../../containers/ReferralList";

import styles from "./styles.module.css";

function ReferralListPage() {
  return (
    <div className={styles["referral-list-container"]}>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <ReferralList />
        </article>
      </main>
    </div>
  );
}

export default ReferralListPage;
