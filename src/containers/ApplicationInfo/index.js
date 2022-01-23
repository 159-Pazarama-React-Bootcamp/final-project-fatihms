import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";

import API from "../../config/api";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";

function ApplicationInfo() {
  const [applications, setApplications] = useState([]);
  const [foundApplication, setFoundApplication] = useState({});
  const [loading, setLoading] = useState(false);

  const code = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API);
        console.log("***");
        setApplications(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(loading);

  /*eslint-disable */
  useEffect(() => {
    console.log("---");
    applications.find((application) => {
      if (application.applicationCode === code) {
        setFoundApplication(application);
      }
    });
  }, [loading]);

  /* eslint-enable */

  console.log(foundApplication);

  return (
    <section className={styles["application-info"]}>
      <FormContainer width="40">
        {loading ? (
          <p> Yükleniyor... </p>
        ) : (
          <>
            <h2>Başvuru Bilgisi</h2>
            <div className={styles["ai-table"]}>
              <table>
                <tr>
                  <td>Başvuru Kodu</td>
                  <td>{foundApplication?.applicationCode}</td>
                </tr>
                <tr>
                  <td>Başvuru Tarihi</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>Başvuru Yapan Kişi</td>
                  <td>
                    {`${foundApplication?.firstName} ${foundApplication?.lastName}`}
                  </td>
                </tr>
                <tr>
                  <td>TC</td>
                  <td>{foundApplication?.tc}</td>
                </tr>
                <tr>
                  <td>Doğum Tarihi</td>
                  <td>{foundApplication?.age}</td>
                </tr>
                <tr>
                  <td>Adres</td>
                  <td>
                    {`${foundApplication?.address} ${foundApplication?.city} ${foundApplication?.district}`}
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Sebebi</td>
                  <td>{foundApplication?.reason}</td>
                </tr>
                <tr>
                  <td>Diğer</td>
                  <td>{foundApplication?.other}</td>
                </tr>
              </table>
            </div>
          </>
        )}
      </FormContainer>
    </section>
  );
}

export default ApplicationInfo;
