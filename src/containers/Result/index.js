import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { CopyToClipboard } from "react-copy-to-clipboard";

// import { useSelector } from "react-redux";

import FormContainer from "../../components/FormContainer";
import TableItem from "../../components/TableItem";

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
        {location.state?.code ? (
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
                  <tbody>
                    <TableItem
                      label="Başvuru Kodu"
                      value={location.state?.code}
                    />
                    <TableItem
                      label="Başvuru Tarihi"
                      value={
                        /* eslint no-unsafe-optional-chaining: "error" */

                        `${location.state?.dateRegistration.getDate()}/${
                          location.state?.dateRegistration.getMonth() + 1
                        }/${location.state?.dateRegistration.getFullYear()}
                      `
                      }
                    />
                    <TableItem
                      label="Başvuru Yapan Kişi"
                      value={`${location.state?.firstName} ${location.state?.lastName}`}
                    />
                    <TableItem label="TC" value={location.state?.tc} />
                    <TableItem
                      label="Doğum Tarihi"
                      value={location.state?.age}
                    />
                    <TableItem
                      label="Adres"
                      value={`${location.state?.address} ${location.state?.city} ${location.state?.district}`}
                    />
                    <TableItem
                      label="Başvuru Sebebi"
                      value={location.state?.reason}
                    />
                    <TableItem label="Diğer" value={location.state?.other} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p>
            Önce başvuru oluşturmalısınız. Başvuru oluşturmak için lütfen
            başvuru sayfasına gidiniz.
          </p>
        )}
      </FormContainer>
    </section>
  );
}

export default Result;
