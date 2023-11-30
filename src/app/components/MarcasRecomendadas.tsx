import React from "react";
import styles from "./MarcasRecomendadas.module.css";
import RecomendadosItens from "./RecomendadosItens";

const MarcasRecomendadas = () => {
  return (
    <section className={styles.recomendadas}>
      <div className={styles.section_header}>
        <div className={styles.texto}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1386 5.47214H11.8886C12.7441 5.47214 13.4163 6.14436 13.4163 7.03047V7.06103L12.8052 11.9194C12.8052 12.7444 12.1025 13.4166 11.2775 13.4166H6.99967C6.17467 13.4166 5.31912 13.2027 4.58579 12.836L3.63856 12.3777V8.53737C3.63856 7.38601 4.04222 6.27109 4.7793 5.38659C5.62169 4.37573 6.08301 3.10153 6.08301 1.78569V1.49992C6.08301 0.980474 6.51079 0.583252 6.99967 0.583252C7.15245 0.583252 7.30523 0.644363 7.45801 0.705474C8.4969 1.31659 9.13856 2.87492 9.13856 3.94436V4.47214C9.13856 5.02443 9.58628 5.47214 10.1386 5.47214ZM0.888563 6.08325H2.7219C2.90523 6.08325 3.02745 6.20547 3.02745 6.38881V13.111C3.02745 13.2944 2.90523 13.4166 2.7219 13.4166H0.888563C0.70523 13.4166 0.583008 13.2944 0.583008 13.111V6.38881C0.583008 6.20547 0.70523 6.08325 0.888563 6.08325Z"
              fill="#E35214"
            ></path>
          </svg>
          <h4>MARCAS RECOMENDADAS</h4>
        </div>
        <a className={styles.ver_todas}>ver todas {">"}</a>
      </div>
      <div className={styles.container}>
        <RecomendadosItens img="./marcas recomendadas/xpg.jpeg" name="xpg" />
        <RecomendadosItens
          img="./marcas recomendadas/corsair.jpeg"
          name="corsair"
        />
        <RecomendadosItens
          img="./marcas recomendadas/logitech.jpeg"
          name="logitech"
        />
        <RecomendadosItens
          img="./marcas recomendadas/husky.png"
          name="husky gaming"
        />
      </div>
    </section>
  );
};

export default MarcasRecomendadas;
