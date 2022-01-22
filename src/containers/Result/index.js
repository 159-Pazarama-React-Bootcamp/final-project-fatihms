import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { CopyToClipboard } from "react-copy-to-clipboard";

// import { useSelector } from "react-redux";

import FormContainer from "../../components/FormContainer";

import styles from "./styles.module.css";

function Result() {
  const [copiedText, setCopiedText] = useState("");
  // const [userData, setUserData] = useState({});

  const location = useLocation();
  // const userDataState = useSelector((state) => state.userData);

  useEffect(() => {
    const { state } = location;
    if (state) {
      setCopiedText(state.code);
    }
  }, [location]);

  return (
    <section className={styles.result}>
      <FormContainer width="40">
        <div className={styles["result-container"]}>
          <img
            src="https://cdn.pixabay.com/photo/2021/05/05/05/10/pixel-cells-6230200_960_720.png"
            alt="başarı-görseli"
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
            <CopyToClipboard text={copiedText}>
              <h2 style={{ cursor: "pointer" }}>{location.state?.code}</h2>
            </CopyToClipboard>
          </div>
          <div className={styles["rc-detail"]}>
            <h3>Başvuru Detayı</h3>
            <div className={styles["rc-detail-items"]}>
              <table>
                <tr>
                  <td>Başvuru Kodu</td>
                  <td>{location.state?.code}</td>
                </tr>
                <tr>
                  <td>Başvuru Tarihi</td>
                  <td>
                    {
                      /* eslint no-unsafe-optional-chaining: "error" */

                      `${location.state?.dateRegistration.getDate()}/${
                        location.state?.dateRegistration.getMonth() + 1
                      }/${location.state?.dateRegistration.getFullYear()}
                      `
                    }
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Yapan Kişi</td>
                  <td>{`${location.state?.firstName} ${location.state?.lastName}`}</td>
                </tr>
                <tr>
                  <td>TC</td>
                  <td>{location.state?.tc}</td>
                </tr>
                <tr>
                  <td>Doğum Tarihi</td>
                  <td>{location.state?.age}</td>
                </tr>
                <tr>
                  <td>Adres</td>
                  <td>
                    {`${location.state?.address} ${location.state?.city} ${location.state?.district}`}
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Sebebi</td>
                  <td>{location.state?.reason}</td>
                </tr>
                <tr>
                  <td>Diğer</td>
                  <td>{location.state?.other}</td>
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
