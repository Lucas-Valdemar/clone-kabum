"use client";
import React from "react";
import styles from "./Ofertas.module.css";
import OfertasItens from "./OfertasItens";

//*SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Ofertas = () => {
  return (
    <section className={styles.section_ofertas}>
      <div className={styles.ofertas}>
        <Swiper spaceBetween={10} className={styles.my_swiper}>
          <SwiperSlide>
            <OfertasItens
              imgSrc="/ofertas/cadeira-gamer-tempest-husky-gaming-light-grey-700_1621889965_m.jpg"
              title="Cadeira Gamer KBM! GAMING Tempest CG600, Preta, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - KGCG600PT"
              valorAntigo={1052.62}
              valor={739.99}
              desconto={25}
            />
          </SwiperSlide>
          <SwiperSlide>
            <OfertasItens
              imgSrc="/ofertas/notebook-gamer-acer-nitro-5-intel-core-i7-11800h-16gb-ram-nvidia-rtx3050-ssd-512gb-15-6-led-fhd-ips-linux-preto-an515-57-795j_1696511422_m.jpg"
              title="Notebook Gamer Acer Nitro 5 Intel Core I7-11800H, 16GB RAM, NVIDIA RTX3050, SSD 512GB, 15.6 LED FHD IPS, Linux, Preto - AN515-57-795J"
              valorAntigo={4631.57}
              valor={4249.99}
              desconto={3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <OfertasItens
              imgSrc="/ofertas/monitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r_1684763831_m.jpg"
              title="Monitor Gamer LG UltraGear 27 Full HD, 144Hz, 1ms, IPS, HDMI e DisplayPort, HDR 10, 99% sRGB, FreeSync Premium, VESA - 27GN65R"
              valorAntigo={1105.25}
              valor={949.99}
              desconto={9}
            />
          </SwiperSlide>
          <SwiperSlide>
            <OfertasItens
              imgSrc="/ofertas/gabinete-gamer-rise-mode-glass-06x-lateral-em-vidro-fume-e-frontal-em-vidro-temperado-preto-rm-ca-06x-fb_1660589149_m.jpg"
              title="Gabinete Gamer Rise Mode Galaxy Glass, Mid Tower, Lateral e Frontal em Vidro Temperado, Branco - RM-GA-GG-FW"
              valorAntigo={447.05}
              valor={349.9}
              desconto={7}
            />
          </SwiperSlide>
          <SwiperSlide>
            <OfertasItens
              imgSrc="/ofertas/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_m.jpg"
              title="Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2"
              valorAntigo={116.47}
              valor={89.9}
              desconto={9}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.ver_todos}>
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

export default Ofertas;
