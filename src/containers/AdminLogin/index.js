import React from "react";

import FormContainer from "../../components/FormContainer";
import InputItem from "../../components/InputItem";

import styles from "./styles.module.css";

function AdminLogin() {
  return (
    <section className={styles["admin-page"]}>
      <FormContainer width="30">
        <InputItem
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          labelText="Email"
        />
      </FormContainer>
    </section>
  );
}

export default AdminLogin;
