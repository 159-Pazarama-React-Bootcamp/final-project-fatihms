import React from "react";

import { useFormik } from "formik";
import axios from "axios";

import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";

import validationSchema from "./validations";
import API from "../../config/api";

function AdminApplicationForm() {
  const location = useLocation();
  console.log(location.state);

  async function postData(applicationData) {
    console.log(applicationData);
    try {
      const result = await axios.put(
        `${API}/${location.state.row.id}`,
        applicationData
      );
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      status: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
      postData(values);
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
                <tr>
                  <td>Başvuru Kodu</td>
                  <td>{location.state.row.applicationCode}</td>
                </tr>
                <tr>
                  <td>Başvuru Tarihi</td>
                  <td>ss</td>
                </tr>
                <tr>
                  <td>Başvuru Yapan Kişi</td>
                  <td>
                    {`${location.state.row.firstName} ${location.state.row.lastName}`}
                  </td>
                </tr>
                <tr>
                  <td>TC</td>
                  <td>{location.state.row.tc}</td>
                </tr>
                <tr>
                  <td>Doğum Tarihi</td>
                  <td>{location.state.row.age}</td>
                </tr>
                <tr>
                  <td>Adres</td>
                  <td>
                    {`${location.state.row.address} ${location.state.row.city} ${location.state.row.district}`}
                  </td>
                </tr>
                <tr>
                  <td>Başvuru Sebebi</td>
                  <td>{location.state.row.reason}</td>
                </tr>
                <tr>
                  <td>Durum</td>
                  <td>{location.state.row.status}</td>
                </tr>
                <tr>
                  <td>Mesaj</td>
                  <td>{location.state.row.message}</td>
                </tr>
                <tr>
                  <td>Diğer</td>
                  <td>{location.state.row.other}</td>
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
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mesaj</td>
                  <td>
                    <input
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Mesaj"
                      onChange={formik.handleChange}
                      value={formik.values.message}
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
