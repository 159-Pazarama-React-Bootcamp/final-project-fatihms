import React from "react";

import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";

import validationSchema from "./validations";
import API from "../../config/api";

function ApplicationForm() {
  const navigate = useNavigate();

  const randomCode = Math.random().toString(36).substring(3);

  async function postData(applicationData) {
    try {
      const result = await axios.post(API, {
        ...applicationData,
        applicationCode: randomCode,
      });
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      tc: "",
      reason: "",
      address: "",
      city: "",
      district: "",
      other: "",
    },
    onSubmit: (values) => {
      postData(values);
      navigate("/basvuru-basarili", {
        state: { ...values, dateRegistration: new Date(), code: randomCode },
      });
    },
    validationSchema,
  });
  return (
    <section className={styles["application-form"]}>
      <FormContainer width="55">
        <form className={styles["af-form"]} onSubmit={formik.handleSubmit}>
          <div className={styles["form-container-left"]}>
            <h4 className={styles.oneRow}>Kişisel</h4>
            <div className={styles["input-container"]}>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Fatih Mustafa"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <label htmlFor="firstName">Ad</label>
            </div>
            <div className={styles["input-container"]}>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Sağır"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              <label htmlFor="lastName">Soyad</label>
            </div>

            <div className={styles["input-container"]}>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="25"
                min={0}
                onChange={formik.handleChange}
                value={formik.values.age}
              />
              <label htmlFor="age">Doğum yılı</label>
            </div>

            <div
              className={[styles["input-container"], styles.oneRow].join(" ")}
            >
              <input
                id="tc"
                name="tc"
                type="text"
                placeholder="25215151515"
                maxLength={11}
                onChange={formik.handleChange}
                value={formik.values.tc}
              />
              <label htmlFor="tc">TC</label>
            </div>

            <h4 className={styles.oneRow}>İletişim</h4>
            <div
              className={[styles["input-container"], styles.oneRow].join(" ")}
            >
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Yeşil sok. No:1 / 34"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <label htmlFor="address">Adres</label>
            </div>

            <div className={styles["input-container"]}>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="İstanbul"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              <label htmlFor="city">İl</label>
            </div>

            <div className={styles["input-container"]}>
              <input
                id="district"
                name="district"
                type="text"
                placeholder="Beşiktaş"
                onChange={formik.handleChange}
                value={formik.values.district}
              />
              <label htmlFor="district">İlçe</label>
            </div>
          </div>
          <span className={styles["form-container-hr"]} />
          <div className={styles["form-container-right"]}>
            <h4 className={styles.oneRow}>Başvuru</h4>
            <div
              className={[styles["input-container"], styles.oneRow].join(" ")}
            >
              <input
                id="reason"
                name="reason"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.reason}
              />
              <label htmlFor="reason">Başvuru Nedeni</label>
            </div>

            <div
              className={[styles["input-container"], styles.oneRow].join(" ")}
            >
              <input
                id="other"
                name="other"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.other}
              />
              <label htmlFor="other">Ek</label>
            </div>
            <ButtonItem type="submit">Gönder</ButtonItem>
          </div>
        </form>
      </FormContainer>
    </section>
  );
}

export default ApplicationForm;
