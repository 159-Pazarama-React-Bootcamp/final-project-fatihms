import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";
/*eslint-disable */

function InputItem(props) {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    value,
    labelText = "",
    error,
    touched,
  } = props;
  return (
    <div className={styles["input-container"]}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={error && touched ? { border: "2px solid red" } : null}
      />
      <label htmlFor={id}>{`${labelText} ${
        error && touched && error ? "- " + error : ""
      }`}</label>
    </div>
  );
}

export default InputItem;

InputItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelText: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

InputItem.defaultProps = {
  error: "",
  touched: "",
};
