import React from "react";

import { useLocation } from "react-router-dom";

import FormContainer from "../../components/FormContainer";

import styles from "./styles.module.css";

function Result() {
  const location = useLocation();

  return (
    <section className={styles.result}>
      <FormContainer width="40">
        <div className={styles["result-container"]}>
          <img
            src="https://cdn.pixabay.com/photo/2021/05/05/05/10/pixel-cells-6230200_960_720.png"
            alt=""
            height={200}
          />
          <h2>Teşekkürler</h2>
          <p>
            Mesajın başarılı bir şekilde iletildi. Aşağdaki kodu
            kullanarak,&nbsp;
            <a href="www.google.com.tr">başvuru sorgulama sayfasından</a>
            &nbsp; başvurunuzu kontrol edebilirsiniz.
          </p>
          <div className={styles["rc-application-code"]}>
            <h2>{location.state.code}</h2>
          </div>
          <div className={styles["rc-detail"]}>
            <h3>Başvuru Detayı</h3>
            <div className={styles["rc-detail-items"]}>
              <table>
                <tr>
                  <td>Başvuru Kodu</td>
                  <td>{location.state.code}</td>
                </tr>
                <tr>
                  <td>Başvuru Tarihi</td>
                  <td>
                    {`${location.state.dateRegistration.getDate()}/${
                      location.state.dateRegistration.getMonth() + 1
                    }/${location.state.dateRegistration.getFullYear()}
                      `}
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Yapan Kişi</td>
                  <td>
                    {`${location.state.firstName} ${location.state.lastName}`}
                  </td>
                </tr>
                <tr>
                  <td>TC</td>
                  <td>{location.state.tc}</td>
                </tr>
                <tr>
                  <td>Doğum Tarihi</td>
                  <td>{location.state.age}</td>
                </tr>
                <tr>
                  <td>Adres</td>
                  <td>
                    {`${location.state.address} ${location.state.city} ${location.state.district}`}
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Sebebi</td>
                  <td>{location.state.reason}</td>
                </tr>
                <tr>
                  <td>Diğer</td>
                  <td>{location.state.other}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </FormContainer>
    </section>
  );
}

export default Result;
