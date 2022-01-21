import React from "react";

import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";

import FormContainer from "../../components/FormContainer";
import ButtonItem from "../../components/ButtonItem";
import InputItem from "../../components/InputItem";

import validationSchema from "./validations";

import styles from "./styles.module.css";

function ApplicationStatusForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      navigate(`/basvuru/${values.code}`, { replace: true });
    },
    validationSchema,
  });
  return (
    <section className={styles["application-status-page"]}>
      <FormContainer width="20">
        <form onSubmit={formik.handleSubmit}>
          <InputItem
            id="code"
            name="code"
            type="text"
            placeholder="g2G'T)W'S"
            labelText="Kod"
            onChange={formik.handleChange}
            value={formik.values.code}
          />
          <ButtonItem type="submit">Sorgula</ButtonItem>
        </form>
      </FormContainer>
    </section>
  );
}

export default ApplicationStatusForm;
