import React from "react";
import styles from "./HomeTopSection.module.css";
import HireMe from "../HireMe/HireMe";

function HomeTopSection() {
  return (
    <div className={styles.HomeTopSection}>
      <div className={styles.HTSLeft}>
        <HireMe />
      </div>
      <div className={styles.HTSRight}>Right</div>
    </div>
  );
}

export default HomeTopSection;
