import React from "react";
import styles from "./Ceo.module.css";
export default class CeoCard extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div
          className={styles.imageHolder}
          style={{
            backgroundImage: `url("https://springrole-assets.imgix.net/user/3/profile/f686d37a-3ea5-4c3b-a2b1-c0f67cc18d5f.jpg")`
          }}
        />
        <div className={styles.dataHolderOfCeo}>
          <div className={styles.ceoDataHolder}>
            <div className={styles.nameOfCeo}>
              <div className={styles.nameText}>Kartik Mandaville</div>
              <div className={styles.tikIcon} />
            </div>
            <div className={styles.designationAndCountry}>
              <div className={styles.designationText}>CEO at SpringRole</div>
              <div className={styles.countryText}>India</div>
            </div>
            <div className={styles.skillSelectHolder}>
              <div className={styles.skillSelectToggleCont}>
                <div className={styles.toggleButtonLike}>
                  Solidity
                  <div className={styles.toggleCircle} />
                </div>
                <div className={styles.toggleButtonLike}>
                  Entrepreneurship
                  <div className={styles.toggleCircle} />
                </div>
                <div className={styles.toggleButtonLike}>
                  Technology
                  <div className={styles.toggleCircle} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logoAndButtonHolder}>
            <div className={styles.messageButtonHolder}>
              <div className={styles.messageButton}>Message</div>
            </div>
            <div className={styles.blockChainImageHolder}>
              <div className={styles.blockChainImage} />
              <div className={styles.blockChainText}>Blockchain Verified</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
