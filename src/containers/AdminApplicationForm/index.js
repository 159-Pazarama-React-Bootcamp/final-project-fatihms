import React from "react";

import { useFormik } from "formik";

import PropTypes from "prop-types";

// import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";
import TableItem from "../../components/TableItem";
import InputItem from "../../components/InputItem";

import validationSchema from "./validations";

import { updateApplication } from "../../redux/ApplicationData/applicationDataSlice";

function AdminApplicationForm({ foundApplication }) {
  // const location = useLocation();
  // const id = location.state.row.id; // eslint-disable-line

  const dispatch = useDispatch();

  const updateData = (values) => {
    dispatch(updateApplication({ ...values, id: foundApplication.id }));
  };

  const formik = useFormik({
    initialValues: {
      status: "",
      message: "",
    },
    onSubmit: (values) => {
      updateData(values);
    },
    validationSchema,
  });

  return (
    <section className={styles["admin-application-form"]}>
      <FormContainer width="40">
        <form onSubmit={formik.handleSubmit}>
          <h2>Başvuru Bilgisi</h2>
          <div className={styles["aaf-table"]}>
            <table>
              <tbody>
                <TableItem
                  label="Başvuru Kodu"
                  value={foundApplication?.applicationCode}
                />
                <TableItem
                  label="Başvuru Tarihi"
                  value={foundApplication?.dateRegistration}
                />
                <TableItem
                  label="Başvuru Yapan Kişi"
                  value={`${foundApplication?.firstName} ${foundApplication?.lastName}`}
                />
                <TableItem label="TC" value={foundApplication?.tc} />
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
                  label="Başvuru Mesajı"
                  value={foundApplication?.message}
                />
                <tr>
                  <td>Diğer</td>
                  <td>{foundApplication?.other}</td>
                </tr>
                <tr>
                  <td>Durum</td>
                  <td>
                    <input
                      id="status"
                      name="status"
                      type="text"
                      placeholder="Durum"
                      onChange={formik.handleChange}
                      value={formik.values.status}
                      error={formik.errors.status}
                      touched={formik.touched.status}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mesaj</td>
                  <td className={styles["aaf-table-message"]}>
                    <InputItem
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Mesaj"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      error={formik.errors.message}
                      touched={formik.touched.message}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <ButtonItem type="submit">Gönder</ButtonItem>
          </div>
        </form>
      </FormContainer>
    </section>
  );
}

export default AdminApplicationForm;

/*eslint-disable */

AdminApplicationForm.propTypes = {
  foundApplication: PropTypes.object,
};
