import React from "react";
import styles from "./Footer.module.css";
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.dataDiv}>
          <div className={styles.part1}>
            <div className={styles.headerText}>Connect</div>
            <div className={styles.labelText}>Facebook</div>
            <div className={styles.labelText}>Twitter</div>
            <div className={styles.labelText}>SpringRole</div>
            <div className={styles.labelText}>Contact Us</div>
          </div>
          <div className={styles.part1}>
            <div className={styles.headerText}>Explore</div>
            <div className={styles.labelText}>Whitepaper</div>
            <div className={styles.labelText}>Blog</div>
            <div className={styles.labelText}>FAQ</div>
          </div>
        </div>
        <div className={styles.copyRightHolder}>
          <div> © SpringRole 2018</div>
          <div>Terms & conditions</div>
          <div>Privacy policy</div>
        </div>
      </div>
    );
  }
}
