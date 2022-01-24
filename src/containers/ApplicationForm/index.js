import React, { useState } from "react";

import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

// import { useDispatch } from "react-redux";

// import { addData } from "../../redux/UserData/userDataSlice";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";
import InputItem from "../../components/InputItem";

import validationSchema from "./validations";
import API from "../../config/api";

const fileTypes = ["JPG", "PNG", "GIF", "docx"];

function ApplicationForm() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const handleChange = (pFile) => {
    setFile(pFile);
  };

  const randomCode = Math.random().toString(36).substring(3);

  async function postData(applicationData) {
    try {
      const result = await axios.post(API, {
        ...applicationData,
        applicationCode: randomCode,
        other: file.name,
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
    },
    onSubmit: (values) => {
      // dispatch(addData(values));
      console.log(values);
      postData(values);
      navigate(
        "/basvuru-basarili",
        {
          state: { ...values, dateRegistration: new Date(), code: randomCode },
        },
        { replace: true }
      );
    },
    validationSchema,
  });
  return (
    <section className={styles["application-form"]}>
      <FormContainer width="55">
        <form className={styles["af-form"]} onSubmit={formik.handleSubmit}>
          <div className={styles["form-container-left"]}>
            <h4 className={styles.oneRow}>Kişisel</h4>
            <InputItem
              id="firstName"
              name="firstName"
              type="text"
              labelText="Ad"
              placeholder="Fatih Mustafa"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            <InputItem
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Sağır"
              labelText="Soyad"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />

            <InputItem
              id="age"
              name="age"
              type="number"
              placeholder="25"
              min={0}
              labelText="Yaş"
              onChange={formik.handleChange}
              value={formik.values.age}
            />

            <div className={styles.oneRow}>
              <InputItem
                id="tc"
                name="tc"
                type="text"
                placeholder="25215151515"
                maxLength={11}
                labelText="TC Kimlik No"
                onChange={formik.handleChange}
                value={formik.values.tc}
              />
            </div>

            <h4 className={styles.oneRow}>İletişim</h4>

            <div className={styles.oneRow}>
              <InputItem
                id="address"
                name="address"
                type="text"
                placeholder="Yeşil sok. No:1 / 34"
                labelText="Adres"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>

            <InputItem
              id="city"
              name="city"
              type="text"
              placeholder="İstanbul"
              labelText="Şehir"
              onChange={formik.handleChange}
              value={formik.values.city}
            />

            <InputItem
              id="district"
              name="district"
              type="text"
              placeholder="Beşiktaş"
              labelText="İlçe"
              onChange={formik.handleChange}
              value={formik.values.district}
            />
          </div>
          <span className={styles["form-container-hr"]} />
          <div className={styles["form-container-right"]}>
            <h4 className={styles.oneRow}>Başvuru</h4>
            <div className={styles.oneRow}>
              <InputItem
                id="reason"
                name="reason"
                type="text"
                placeholder="Sorun"
                labelText="Başvuru Nedeni"
                onChange={formik.handleChange}
                value={formik.values.reason}
              />
            </div>
            <div className={styles.oneRow}>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              <p style={{ marginTop: "10px" }}>
                {file ? `File name: ${file.name}` : "no files uploaded yet"}
              </p>
            </div>
            <ButtonItem type="submit">Gönder</ButtonItem>
          </div>
        </form>
      </FormContainer>
    </section>
  );
}

export default ApplicationForm;
