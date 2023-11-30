import React from "react";
import styles from "./DepartamentoItens.module.css";
type Props = {
  nome: string;
  imgUrl: string;
};

const DepartamentoItens = ({ nome, imgUrl }: Props) => {
  return (
    <div className={styles.item}>
      <a href="">
        <h2 className={styles.title}>{nome}</h2>
        <img src={imgUrl} alt={nome} className={styles.img} />
      </a>
    </div>
  );
};

export default DepartamentoItens;
