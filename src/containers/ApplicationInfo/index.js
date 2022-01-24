import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import TableItem from "../../components/TableItem";

function ApplicationInfo({ foundApplication }) {
  return (
    <section className={styles["application-info"]}>
      <FormContainer width="40">
        <h2>Başvuru Bilgisi</h2>
        <div className={styles["ai-table"]}>
          <table>
            <tbody>
              <TableItem
                label="Başvuru Kodu"
                value={foundApplication.applicationCode}
              />
              <TableItem label="Başvuru Tarihi" value="tarih" />
              <TableItem
                label="Başvuru Yapan Kişi"
                value={`${foundApplication?.firstName} ${foundApplication?.lastName}`}
              />
              <TableItem label="TC" value={foundApplication?.tc} />
              <TableItem label="Doğum Tarihi" value={foundApplication?.age} />
              <TableItem
                label="Adres"
                value={`${foundApplication?.address} ${foundApplication?.city} ${foundApplication?.district}`}
              />
              <TableItem
                label="Başvuru Sebebi"
                value={foundApplication?.reason}
              />
              <TableItem label="Diğer" value={foundApplication?.other} />
            </tbody>
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
