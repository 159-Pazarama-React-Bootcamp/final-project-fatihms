import React from "react";

import { Link } from "react-router-dom";

import { BiExit } from "react-icons/bi";

import Header from "../../components/Header";
import ReferralList from "../../containers/ReferralList";

import styles from "./styles.module.css";

function ReferralListPage() {
  return (
    <div className={styles["referral-list-container"]}>
      <header>
        <Header title="Başvuru Listesi">
          <Link to="/admin" className={styles["mac-link"]}>
            <i>
              <BiExit size={30} color="white" />
            </i>
          </Link>
        </Header>
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
