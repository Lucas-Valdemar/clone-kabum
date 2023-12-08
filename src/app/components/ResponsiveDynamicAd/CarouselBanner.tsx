"use client";
import React, { useState, useEffect } from "react";
import styles from "./CarouselBanner.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Banners {
  id: number;
  bannerLink: string;
}

const CarouselBanner = () => {
  //  Fetch Banners
  const bannersUrl = "https://complemento-clone-kabum.vercel.app/Banners";
  // const bannersUrl = "http://localhost:3000/responsiveBanners";

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
  // Carousel configuration
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "variable-width",
    dots: true,
    dotsClass: `slick-pagination ${styles.dots} `,
  };
  return (
    <section className={styles.section_responsive_dynamic_ads}>
      <div className={styles.container}>
        <Slider {...settings} className={styles.slick_container}>
          {bannersLinks.map((banner) => (
            <a key={banner.id} className={styles.hyperlink}>
              <img src={banner.bannerLink} alt={`item${banner.id}`} />
            </a>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarouselBanner;
