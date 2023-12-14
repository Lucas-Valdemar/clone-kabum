import React from "react";
import styles from "./MobileOnlyAviso.module.css";
const MobileOnlyAviso = () => {
  return (
    <div className={styles.aviso_container}>
      <div className={styles.aviso_conteudo}>
        <div className={styles.svg}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <title />
            <g data-name="Layer 57" id="Layer_57">
              <path d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z" />
              <path d="M16,24a2,2,0,1,1,2-2A2,2,0,0,1,16,24Zm0-2Z" />
              <path d="M16,18a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v9A1,1,0,0,1,16,18Z" />
            </g>
          </svg>
        </div>
        <h3>Mobile Only</h3>
        <span>
          Este site está em construção, no momento disponivel somente para
          dispositivos mobile.
        </span>

        <span>
          Uma visualização mobile pode ser gerada pelo navegador através da
          opção "Toggle device toolbar" nas ferramentas de desenvolvedor (ctrl +
          shift + C), ou simplesmente reduzindo a largura da janela do
          navegador.
        </span>
        <span>Largura de ViewPort recomendado = 320px ~~ 600px</span>
      </div>
    </div>
  );
};

export default MobileOnlyAviso;
