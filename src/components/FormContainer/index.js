import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

function FormContainer({ children, width }) {
  return (
    <div
      className={[
        styles["form-container"],
        width ? styles[`form-container--${width}`] : null,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default FormContainer;

FormContainer.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
};
