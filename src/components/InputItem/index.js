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
  id: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  type: PropTypes.element.isRequired,
  placeholder: PropTypes.element.isRequired,
  onChange: PropTypes.element.isRequired,
  value: PropTypes.element.isRequired,
  labelText: PropTypes.element.isRequired,
};
