import React from "react";

import PropTypes from "prop-types";

import styles from "./styles.module.css";

function Header({ children, title }) {
  return (
    <div className={styles["header-container"]}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
