import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

function ButtonItem(props) {
  const { children, type } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles["button-item"]}>
      {children}
    </button>
  );
}

export default ButtonItem;

ButtonItem.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
