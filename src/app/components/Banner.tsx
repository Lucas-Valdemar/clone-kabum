"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Banner.module.css";
import Countdown from "./Countdown";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = "http://localhost:3000/bannersMobile";

const Banner = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, []);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 350,
    autoplaySpeed: 5000,
    cssEase: "linear",
    appendDots: (dots: React.ReactNode[]) => (
      <div className={styles.pagination_container}>
        <ul className={styles.dots_container}>
          {dots.map((dot: React.ReactNode, index: number) => (
            <React.Fragment key={index}>
              {React.isValidElement(dot)
                ? React.cloneElement(dot as React.ReactElement, {
                    className: `${styles.single_dots} ${
                      dot.props.className || ""
                    }`,
                  })
                : dot}
            </React.Fragment>
          ))}
        </ul>
        <div style={{ textAlign: "center" }}>
          <button className={styles.play_button} onClick={play}>
            Play
          </button>
          <button className={styles.pause_button} onClick={pause}>
            Pause
          </button>
        </div>
      </div>
    ),
  };

  const endDate = "26/12/2023 13:00";

  return (
    <section className={styles.section_banner}>
      <div className={styles.banner}>
        <Slider {...settings} className={styles.slick_wrapper} ref={sliderRef}>
          {banners.map((banner) => (
            <div key={banner.id} className={styles.fetch_banner}>
              <a href="">
                <img
                  className={styles[`item-${banner.id}`]}
                  src={banner.url}
                  alt={`tema-${banner.id}`}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.footer_container}>
        <h1 className={styles.h1}>BLACK FRIDAY</h1>
        <div className={styles.contador}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 22 24"
            fill="#FFFFFF"
            xmlns="https://www.w3.org/2000/svg"
          >
            {/* SVG path goes here */}
          </svg>
          <Countdown endDate={endDate} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
