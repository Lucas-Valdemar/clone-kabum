import React from "react";
import styles from "./DepartamentoItens.module.css";
type Props = { id: number; nome: string; imgUrl: string };

const DepartamentoItens = ({ id, nome, imgUrl }: Props) => {
  return (
    <div className={styles.item}>
      <a href="">
        <h2 className={styles.title}>{nome}</h2>
        <img
          src={imgUrl}
          alt={nome}
          className={styles.img}
          id={styles[`item-${id}`]}
        />
      </a>
    </div>
  );
};

export default DepartamentoItens;
