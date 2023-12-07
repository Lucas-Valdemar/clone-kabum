"use client";
import React, { useState, useEffect } from "react";
import styles from "./DepartamentoSection.module.css";
import DepartamentoItens from "./DepartamentoItens";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const url = "http://localhost:3000/departamentos/";
const url = "https://complemento-clone-kabum.vercel.app/departamentos";

const DepartamentoSection = () => {
  const [departamentos, setDepartamentos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDepartamentos(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // ajuste conforme necessário
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 2,
    dots: true,
    dotsClass: `slick-pagination ${styles.dots} `,
  };

  return (
    <section className={styles.departamentos}>
      <div className={styles.section_header}>
        <div className={styles.texto}>
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.86816 0.232422H0V5.10058H4.86816V0.232422ZM22.0002 0.232422H6.41501V5.10058H22.0002V0.232422ZM0 6.5493H4.86816V11.4175H0V6.5493ZM22.0002 6.5493H6.41501V11.4175H22.0002V6.5493ZM0 12.866H4.86816V17.7343H0V12.866ZM22.0002 12.866H6.41501V17.7343H22.0002V12.866Z"
              fill="#FF6500"
            ></path>
          </svg>
          <h4>DEPARTAMENTOS</h4>
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
      <Slider {...settings} className={styles.slick_container}>
        {departamentos.map((departamento) => (
          <div key={departamento.id}>
            <DepartamentoItens
              id={departamento.id}
              nome={departamento.nome}
              imgUrl={departamento.imgUrl}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DepartamentoSection;
