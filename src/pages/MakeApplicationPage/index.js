import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import ApplicationForm from "../../containers/ApplicationForm";
import Header from "../../components/Header";

import styles from "./styles.module.css";

function MakeApplicationPage() {
  return (
    <div className={styles["make-application-container"]}>
      <header>
        <Header title="Başvuru Oluştur">
          <Link to="/basvuru-sorgula" className={styles["mac-link"]}>
            <h3>Başvuru Sorgula</h3>
            <i>
              <AiOutlineSearch size={30} />
            </i>
          </Link>
        </Header>
      </header>
      <main>
        <article>
          <ApplicationForm />
        </article>
        <p>
          Eğer bir sorun yaşarsanız, lütfen&nbsp;
          <Link to="/iletisim">bize ulaşın.</Link>
        </p>
      </main>
    </div>
  );
}

export default MakeApplicationPage;
