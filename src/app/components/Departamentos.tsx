"use client";
import React from "react";
import styles from "./Departamentos.module.css";
import { useState, useEffect } from "react";
import DepartamentoItens from "./DepartamentoItens";

//*SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

const url = "https://complemento-clone-kabum.vercel.app/departamentos";

const Departamentos = () => {
  const [departamentos, setDepartamentos] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setDepartamentos(data);
    }
    fetchData();
  }, []);
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
      <div className={styles.swiper_grid}>
        <Swiper
          slidesPerView={2}
          grid={{
            fill: "row",
            rows: 3,
          }}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className={styles.my_swiper}
        >
          <div className={styles.teste}>
            {departamentos.map((departamento) => (
              <SwiperSlide key={departamento.id}>
                <DepartamentoItens
                  nome={departamento.nome}
                  imgUrl={departamento.imgUrl}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Departamentos;
