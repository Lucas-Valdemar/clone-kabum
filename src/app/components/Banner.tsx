import React from "react";
import styles from "./Banner.module.css";
import Contador from "./Contador";

const Banner = () => {
  return (
    <section className={styles.section_banner}>
      <div className={styles.banner}>
        <a href="">
          <img id="imgteste" src="/mobile banners/banner12.png" alt="tema1" />
        </a>
        <Contador />
      </div>
    </section>
  );
};

export default Banner;
