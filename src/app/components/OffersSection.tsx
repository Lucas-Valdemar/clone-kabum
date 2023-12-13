"use client";
import React, { useState, useEffect } from "react";
import OffersCore from "./OffersCore";
import styles from "./OffersSection.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Products } from "../hooks/useFetchProducts";

type Props = {
  sectionTitle?: string | null;
  titleIconLink?: string | null;
  productsList: Array<Products>;
};
const OffersSection: React.FC<Props> = ({
  sectionTitle,
  titleIconLink,
  productsList,
}) => {
  // Fetch svg link

  const [titleIcon, setTitleIcon] = useState<{ url: string } | null>(null);
  useEffect(() => {
    async function fetchData() {
      if (titleIconLink) {
        try {
          const res = await fetch(titleIconLink);

          if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
          }

          const data = await res.json();

          if (data && data.url) {
            setTitleIcon(data);
          } else {
            throw new Error('Invalid JSON format. Missing "url" property.');
          }
        } catch (error: any) {
          console.error("Error fetching or parsing SVG:", error.message);
        }
      }
    }
    fetchData();
  }, [titleIconLink]);
  console.log(titleIcon?.url);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slider variable-width",
    variableWidth: true,
  };

  return (
    <section className={styles.section_offers_flex}>
      <div
        className={
          sectionTitle !== null && sectionTitle !== undefined
            ? styles.section_header
            : styles.no_display
        }
      >
        <div className={styles.texto}>
          {titleIcon && <img src={titleIcon?.url} alt={titleIcon?.url} />}
          <h4>{sectionTitle}</h4>
        </div>
        <a className={styles.ver_todas}>
          ver todos   {""}
          <svg
            width="8px"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.18972 14L0.916992 12.7273L6.64427 7L0.916992 1.27273L2.18972 0L9.18972 7L2.18972 14Z"
              fill="#ff6500"
            ></path>
          </svg>
        </a>
      </div>
      <Slider {...settings} className={styles.slider_wrapper}>
        {productsList.map((product) => (
          <div key={product.id}>
            <OffersCore
              productName={product.name}
              imgUrl={product.imgUrl}
              isNinjaIndica={product.isNinjaIndica}
              oldPrice={product.oldPrice}
              price={product.price}
              discount={product.discount}
              isPrimeNinja={product.isPrimeNinja}
              isFlash={product.isFlash}
              exclusiveOnPrimeNinjaPrice={product.exclusiveOnPrimeNinjaPrice}
            />
          </div>
        ))}
      </Slider>
      <div
        className={
          sectionTitle !== null && sectionTitle !== undefined
            ? styles.no_display
            : styles.section_footer
        }
      >
        <a href="">
          <p>VER TODOS</p>
          <svg
            width="8px"
            height="14"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.18972 14L0.916992 12.7273L6.64427 7L0.916992 1.27273L2.18972 0L9.18972 7L2.18972 14Z"
              fill="#ff6500"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default OffersSection;
