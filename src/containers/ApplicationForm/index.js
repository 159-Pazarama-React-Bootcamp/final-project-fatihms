import React from "react";
import { useFormik } from "formik";

import styles from "./styles.module.css";

function ApplicationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: 0,
      tc: "",
      reason: "",
      address: "",
      city: "",
      district: "",
      other: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles["form-container"]} onSubmit={formik.handleSubmit}>
      <h4 className={styles.oneRow}>Kişisel</h4>
      <div className={styles["input-container"]}>
        <input
          id="firstName"
          name="firstName"
          type="text"
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
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <label htmlFor="age">Doğum yılı</label>
      </div>

      <div className={[styles["input-container"], styles.oneRow].join(" ")}>
        <input
          id="tc"
          name="tc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tc}
        />
        <label htmlFor="tc">TC</label>
      </div>
      <hr />

      <h4 className={styles.oneRow}>İletişim</h4>
      <div className={[styles["input-container"], styles.oneRow].join(" ")}>
        <input
          id="address"
          name="address"
          type="text"
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
          onChange={formik.handleChange}
          value={formik.values.district}
        />
        <label htmlFor="district">İlçe</label>
      </div>
      <hr />

      <h4 className={styles.oneRow}>Başvuru</h4>
      <div className={[styles["input-container"], styles.oneRow].join(" ")}>
        <input
          id="reason"
          name="reason"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.reason}
        />
        <label htmlFor="reason">Başvuru Nedeni</label>
      </div>

      <div className={[styles["input-container"], styles.oneRow].join(" ")}>
        <input
          id="other"
          name="other"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.other}
        />
        <label htmlFor="other">Ek</label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplicationForm;
