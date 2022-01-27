import React from "react";

import { useFormik } from "formik";

import PropTypes from "prop-types";

// import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";
import TableItem from "../../components/TableItem";

import validationSchema from "./validations";

import { updateApplication } from "../../redux/ApplicationData/applicationDataSlice";

function AdminApplicationForm({ foundApplication }) {
  // const location = useLocation();
  // const id = location.state.row.id; // eslint-disable-line

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateData = (values) => {
    dispatch(
      updateApplication({
        ...values,
        id: foundApplication.id,
        dateApproval: new Date(),
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      status: "",
      message: "",
    },
    onSubmit: (values) => {
      updateData(values);
      window.alert("Güncelleme Başarılı");
      navigate("/admin/basvuru-listesi");
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
                  label="Başvuru Mesajı"
                  value={foundApplication?.message}
                />
                <tr>
                  <td>Diğer</td>
                  <td>
                    <img
                      alt="other"
                      /* eslint-disable */
                      src={foundApplication?.other}
                      /* eslint-enable */
                      height={100}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Durum</td>
                  <td className={styles["aaf-status"]}>
                    <select name="status" onChange={formik.handleChange}>
                      <option value="">Seçiniz</option>
                      <option value="Çözüldü">Çözüldü</option>
                      <option value="İptal Edildi">İptal Edildi</option>
                      <option value="Bekliyor">Bekliyor</option>
                    </select>
                    {formik.errors.status && formik.touched.status ? (
                      <div className={styles["aaf-error"]}>
                        {formik.errors.status}
                      </div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>Mesaj</td>
                  <td className={styles["aaf-table-message"]}>
                    <input
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Mesaj"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />

                    {formik.errors.message && formik.touched.message ? (
                      <div className={styles["aaf-error"]}>
                        {formik.errors.message}
                      </div>
                    ) : null}
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
