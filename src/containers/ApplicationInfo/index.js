import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import TableItem from "../../components/TableItem";

function ApplicationInfo({ foundApplication }) {
  return (
    <section className={styles["application-info"]}>
      <FormContainer width="40">
        <>
          <h2>Başvuru Bilgisi</h2>
          <div className={styles["ai-table"]}>
            <table>
              <tbody>
                <TableItem
                  label="Başvuru Kodu"
                  value={foundApplication.applicationCode}
                />
                <TableItem
                  label="Başvuru Tarihi"
                  value={foundApplication?.dateRegistration.split("T")[0]}
                />
                <TableItem
                  label="Başvuru Yapan Kişi"
                  value={`${foundApplication?.firstName} ${foundApplication?.lastName}`}
                />
                <TableItem
                  label="T.C. Kimlik No"
                  value={foundApplication?.tc}
                />
                <TableItem label="Yaş" value={foundApplication?.age} />
                <TableItem
                  label="Adres"
                  value={`${foundApplication?.address} ${foundApplication?.city} ${foundApplication?.district}`}
                />
                <TableItem
                  label="Başvuru Sebebi"
                  value={foundApplication?.reason}
                />
                <TableItem
                  label="Başvuru Durumu"
                  value={foundApplication?.status}
                />
                <TableItem
                  label="Yönetici Mesajı"
                  value={foundApplication?.message}
                />
                <TableItem label="Diğer" value={foundApplication?.fileName} />
              </tbody>
            </table>
          </div>
        </>
      </FormContainer>
    </section>
  );
}

export default ApplicationInfo;

/*eslint-disable */

ApplicationInfo.propTypes = {
  foundApplication: PropTypes.object,
};
