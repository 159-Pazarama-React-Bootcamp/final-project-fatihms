import React from "react";
/*eslint-disable */

import PropTypes from "prop-types";

import styles from "./styles.module.css";

function TableItem({ label, value }) {
  return (
    <tr className={styles[""]}>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
}

export default TableItem;

TableItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TableItem.defaultProps = {
  label: "",
  value: "",
};
