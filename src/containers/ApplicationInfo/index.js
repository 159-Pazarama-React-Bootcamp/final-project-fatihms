import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";

function ApplicationInfo({ foundApplication }) {
  return (
    <section className={styles["application-info"]}>
      <FormContainer width="40">
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
      </FormContainer>
    </section>
  );
}

export default ApplicationInfo;

/*eslint-disable */

ApplicationInfo.propTypes = {
  foundApplication: PropTypes.object,
};
