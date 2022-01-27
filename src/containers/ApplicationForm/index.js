import React, { useState } from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";

import { useDispatch } from "react-redux";

import { postApplication } from "../../redux/ApplicationData/applicationDataSlice";

import styles from "./styles.module.css";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";
import InputItem from "../../components/InputItem";

import validationSchema from "./validations";

const fileTypes = ["JPG", "PNG", "GIF", "docx"];

function ApplicationForm() {
  const [postImage, setPostImage] = useState("");

  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const randomCode = Math.random().toString(36).substring(3);

  /*eslint-disable */
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  /* eslint-enable */

  const handleChange = async (pFile) => {
    const base64 = await convertToBase64(pFile);
    setPostImage(base64);
    setFile(pFile);
  };

  const postData = (values) => {
    dispatch(
      postApplication({
        ...values,
        applicationCode: randomCode,
        other: postImage,
        status: "Bekliyor",
        message: "",
        fileName: file.name,
        dateApproval: "",
        dateRegistration: new Date(),
      })
    );
  };

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
      postData(values);
      navigate("/basvuru-basarili", {
        state: {
          ...values,
          dateRegistration: new Date(),
          code: randomCode,
          fileName: file.name,
        },
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
            <InputItem
              id="firstName"
              name="firstName"
              type="text"
              labelText="Ad"
              placeholder="Fatih Mustafa"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />

            <InputItem
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Sağır"
              labelText="Soyad"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
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
              error={formik.errors.age}
              touched={formik.touched.age}
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
                error={formik.errors.tc}
                touched={formik.touched.tc}
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
                error={formik.errors.address}
                touched={formik.touched.address}
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
              error={formik.errors.city}
              touched={formik.touched.city}
            />

            <InputItem
              id="district"
              name="district"
              type="text"
              placeholder="Beşiktaş"
              labelText="İlçe"
              onChange={formik.handleChange}
              value={formik.values.district}
              error={formik.errors.district}
              touched={formik.touched.district}
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
                placeholder="Başvuru nedeni"
                labelText="Başvuru Nedeni"
                onChange={formik.handleChange}
                value={formik.values.reason}
                error={formik.errors.reason}
                touched={formik.touched.reason}
              />
            </div>
            <div className={styles.oneRow}>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Yükleyin veya sürükleyin"
                maxSize={0.5}
              />
              <p style={{ marginTop: "10px" }}>
                {file ? `Dosya adı: ${file.name}` : "henüz bir dosya seçilmedi"}
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
