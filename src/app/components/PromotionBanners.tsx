"use client";
import React, { useState, useEffect } from "react";
import styles from "./PromotionBanners.module.css";

interface Banners {
  id: number;
  title: string;
  description: string;
  bannerLink: string;
}
const PromotionBanners = () => {
  const bannersUrl = "https://complemento-clone-kabum.vercel.app/Banners";
  //   const bannersUrl = "http://localhost:3000/promotionBanners";

  const [bannersLinks, setBannersLinks] = useState<Banners[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(bannersUrl);
        const data = await res.json();
        setBannersLinks(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <section className={styles.section_promotion_banners}>
      <div className={styles.container}>
        {bannersLinks.map((banner) => (
          <a key={banner.id} className={styles.hyperlink}>
            <div className={styles.img_wrapper}>
              <img src={banner.bannerLink} alt={`item${banner.id}`} />
            </div>
            <div className={styles.details_wrapper}>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PromotionBanners;
