import React from "react";
import styles from "./HomePage.module.css";
import HomeTopSection from "../../Components/HomeTopSection/HomeTopSection";

function HomePage() {
  return (
    <div className={styles.MainPage}>
      <HomeTopSection />
    </div>
  );
}

export default HomePage;
