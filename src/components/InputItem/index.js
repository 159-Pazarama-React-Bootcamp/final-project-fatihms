import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

function InputItem(props) {
  const { id, name, type, placeholder, onChange, value, labelText } = props;
  return (
    <div className={styles["input-container"]}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{labelText}</label>
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
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
