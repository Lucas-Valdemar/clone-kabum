import React from "react";
import styles from "./RecomendadosItens.module.css";

type Props = {
  img: string;
  name: string;
};

const RecomendadosItens = ({ img, name }: Props) => {
  return (
    <div className={styles.flex}>
      <a href="" className={styles.container}>
        <img src={img} alt={name} />
        <h2>{`${name}`}</h2>
        <p>VER PRODUTOS {">"}</p>
      </a>
    </div>
  );
};

export default RecomendadosItens;
