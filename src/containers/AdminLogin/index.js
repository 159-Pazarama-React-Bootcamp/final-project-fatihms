import React from "react";

import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

import FormContainer from "../../components/FormContainer";
import InputItem from "../../components/InputItem";
import ButtonItem from "../../components/ButtonItem";

import validationSchema from "./validations";

import styles from "./styles.module.css";

function AdminLogin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("isAuthenticated", true);
      if (values.username === "admin" && values.password === "admin") {
        navigate("/admin/basvuru-listesi");
      }
    },
    validationSchema,
  });
  return (
    <section className={styles["admin-page"]}>
      <FormContainer width="20">
        <form onSubmit={formik.handleSubmit}>
          <InputItem
            id="username"
            name="username"
            type="text"
            placeholder="admin"
            labelText="Kullanıcı Adı"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.errors.username}
            touched={formik.touched.username}
          />
          <InputItem
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            labelText="Şifre"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
          <ButtonItem type="submit">Giriş Yap</ButtonItem>
        </form>
      </FormContainer>
    </section>
  );
}

export default AdminLogin;
