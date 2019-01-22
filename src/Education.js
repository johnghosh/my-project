import React from "react";
import styles from "./Education.module.css";
export default class Education extends React.Component {
  render() {
    const data = this.props.education;
    return (
      <React.Fragment>
        {data &&
          data.map((val, i) => {
            console.log(val);
            return (
              <div className={styles.base} key={i}>
                <div className={styles.imageHolder}>
                  <img
                    src="https://beta.springrole.com/images/uni-icon.png"
                    alt=""
                  />
                </div>
                <div className={styles.dataHolder}>
                  <div className={styles.institutionName}>
                    {val.institution_name}
                  </div>
                  <div className={styles.deptName}>{`${val.course} - ${
                    val.department
                  }`}</div>
                  <div className={styles.score}>{`(${val.score_metric} - ${
                    val.score
                  })`}</div>
                  <div className={styles.location}>{val.location}</div>
                  <div className={styles.date}>{`${val.start_date} - ${
                    val.end_date
                  }`}</div>
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}
