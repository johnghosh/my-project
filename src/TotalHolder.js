import React from "react";
import styles from "./TotalHolder.module.css";
import CeoCard from "./CeoCard";
import Header from "./Header.js";
import axios from "axios";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Footer from "./Footer";
export default class TotalHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WorkExperience: [],
      educationList: []
    };
  }
  workExperience() {
    axios
      .get(
        `https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/work-experience`
      )
      .then(res => {
        const WorkExperience = res.data && res.data.work_experiences;
        this.setState({ WorkExperience });
      });
  }
  education() {
    axios
      .get(
        `https://beta.springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35/education`
      )
      .then(res => {
        const education = res.data && res.data.educationList;
        this.setState({ educationList: education });
      });
  }
  componentDidMount() {
    this.workExperience();
    this.education();
  }
  render() {
    return (
      <div className={styles.base}>
        <Header />
        <div className={styles.dataHolder}>
          <div className={styles.wrapper}>
            <CeoCard />
            <div className={styles.splitDataHolder}>
              <div className={styles.WorkExperienceHolder}>
                <div className={styles.workExpdata}>
                  <div className={styles.headingForLabel}>Work Experience</div>
                  <div className={styles.cont1}>
                    <WorkExperience
                      WorkExperience={this.state.WorkExperience}
                    />
                  </div>
                </div>
                <div className={styles.workExpdata}>
                  <div className={styles.headingForLabel}>Education</div>
                  <div className={styles.educationHolder}>
                    <Education education={this.state.educationList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
