import React from "react";
import styles from "./Header.module.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.maxWidth}>
          <div className={styles.logoContainer}>
            <div className={styles.logoHolder} />
          </div>
          <div className={styles.buttonHolder}>
            <div className={styles.buttonForSignUp}>Sign Up</div>
            <div className={styles.buttonForLogin}>Login</div>
          </div>
        </div>
      </div>
    );
  }
}
