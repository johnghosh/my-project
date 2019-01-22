import React from "react";
import styles from "./WorkExperience.module.css";
export default class WorkExperience extends React.Component {
  render() {
    const data = this.props.WorkExperience;
    return (
      <React.Fragment>
        {data &&
          data.map((val, i) => {
            return (
              <div className={styles.base} key={i}>
                <div className={styles.nameDataAndVeryFi}>
                  <div className={styles.nameAndData}>
                    {val && val.company && val.company.avatar_url && (
                      <div
                        className={styles.crospondingLogo}
                        style={{
                          backgroundImage: `url(${val.company.avatar_url})`
                        }}
                      />
                    )}
                    <div className={styles.employeeData}>
                      {val && val.designation && (
                        <div className={styles.designation}>
                          {val.designation}
                        </div>
                      )}
                      {((val.company && val.company.name) || val.location) && (
                        <div className={styles.nameAndLocation}>
                          {val.company && val.company.name && (
                            <span>{val.company.name}</span>
                          )}
                          {val && val.location && <span>, {val.location}</span>}
                        </div>
                      )}

                      {val && (val.start_date || val.end_date || val.duration) && (
                        <div className={styles.duration}>
                          <span className={styles.spanStartDate}>
                            {val.start_date}
                          </span>
                          {" - "}
                          <span className={styles.spanEndDate}>
                            {val.end_date} ,
                          </span>{" "}
                          <span>{val.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.veryFiHolder}>
                    <div className={styles.verificationStatus}>
                      <div className={styles.verifiedImage}>
                        <div className={styles.veriFyImage}>
                          <img
                            src="https://beta.springrole.com/images/l1-verification-Pending.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.verifyTetx}>
                          Peer verification pending
                        </div>
                      </div>
                    </div>
                    <div className={styles.verificationStatus}>
                      <div className={styles.verifiedImage}>
                        <div className={styles.veriFyImage}>
                          <img
                            src="https://beta.springrole.com/images/grey-check.png"
                            alt=""
                          />
                        </div>
                        <div className={styles.verifyTetx}>
                          Company verification pending
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {((val && val.skills_data && val.skills_data.length > 0) ||
                  val.description) && (
                  <div className={styles.workedOnHolder}>
                    {val && val.skills_data && val.skills_data.length > 0 && (
                      <div className={styles.specilistHolder}>
                        <div className={styles.staticLabel}>WORKED ON</div>
                        {val &&
                          val.skills_data.map((val, i) => {
                            return (
                              <div className={styles.dataForCourses}>
                                {val.skill_name}
                              </div>
                            );
                          })}
                      </div>
                    )}
                    {val && val.description && (
                      <div className={styles.descriptionText}>
                        {val.description
                          .replace(/<[^>]*>/g, " ")
                          .replace(/\&nbsp;/g, "")}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}
