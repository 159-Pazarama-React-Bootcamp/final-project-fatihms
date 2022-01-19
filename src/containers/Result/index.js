import React from "react";
import styles from "./styles.module.css";

function Result() {
  return (
    <section className={styles.result}>
      <div className={styles["result-container"]}>
        <img
          src="https://cdn.pixabay.com/photo/2021/05/05/05/10/pixel-cells-6230200_960_720.png"
          alt=""
          height={200}
        />
        <h2>Teşekkürler</h2>
        <p>
          Mesajın başarılı bir şekilde iletildi. Aşağdaki kodu kullanarak,&nbsp;
          <a href="#">başvuru sorgulama sayfasından</a>
          &nbsp; başvurunuzu kontrol edebilirsiniz.
        </p>
        <div className={styles["rc-application-code"]}>
          <h2>24vg1y5u2</h2>
        </div>
        <div className={styles["rc-detail"]}>
          <h3>Başvuru Detayı</h3>
          <div className={styles["rc-detail-items"]}>
            <table>
              <tr>
                <td>Başvuru Kodu</td>
                <td>24vg1y5u2</td>
              </tr>
              <tr>
                <td>Başvuru Tarihi</td>
                <td>19.01.2022</td>
              </tr>
              <tr>
                <td>Başvuru Yapan Kişi</td>
                <td>Fatih Mustafa Sağır</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;
