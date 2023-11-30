import React from "react";
import styles from "./AdsBanners.module.css";
type Props = {
  bannerUmSrc: string;
  bannerDoisSrc: string;
};

const AdsBanners = ({ bannerUmSrc, bannerDoisSrc }: Props) => {
  return (
    <section className={styles.ads_banners}>
      <a className={styles.banner_um}>
        <img src={bannerUmSrc} alt="" />
      </a>
      <a className={styles.banner_dois}>
        <img src={bannerDoisSrc} alt="" />
      </a>
    </section>
  );
};

export default AdsBanners;
