"use client";
import React, { useState, useEffect } from "react";
import styles from "./TagsRelacionados.module.css";

interface Tags {
  id: number;
  tagName: string;
}
const TagsRelacionados = () => {
  //  Fetch Tags
  const tagsUrl = "http://localhost:3000/tagsRelacionados";
  // const tagsUrl = "http://localhost:3000/tagsRelacionados";

  const [tagLinks, setTagLinks] = useState<Tags[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(tagsUrl);
        const data = await res.json();
        setTagLinks(data);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className={styles.section_tags_relacionados}>
      <div className={styles.title_container}>
        <div className={styles.svg}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              d="M9.11775 5.20436C8.86956 4.64274 8.50877 4.13865 8.05795 3.72364L7.68593 3.38045C7.6733 3.36912 7.6581 3.36108 7.64165 3.35703C7.62521 3.35298 7.60803 3.35306 7.59162 3.35725C7.57521 3.36143 7.56008 3.36961 7.54754 3.38105C7.53501 3.39249 7.52546 3.40685 7.51974 3.42287L7.35354 3.9023C7.24999 4.20307 7.05951 4.51027 6.78977 4.81233C6.77187 4.83161 6.75141 4.83675 6.73735 4.83804C6.72329 4.83932 6.70156 4.83675 6.68238 4.81876C6.66448 4.80333 6.65553 4.7802 6.65681 4.75706C6.70411 3.98328 6.474 3.11053 5.97031 2.16066C5.55355 1.37145 4.97443 0.75577 4.25085 0.326463L3.72287 0.0141236C3.65383 -0.0270076 3.56562 0.026977 3.56946 0.107954L3.59758 0.724921C3.61676 1.14652 3.56818 1.51927 3.45312 1.82904C3.3125 2.20821 3.11051 2.5604 2.85227 2.8766C2.67256 3.09634 2.46886 3.2951 2.24503 3.46914C1.70593 3.88581 1.26757 4.4197 0.962784 5.03084C0.658745 5.64731 0.500371 6.32603 0.5 7.01413C0.5 7.62082 0.618892 8.20822 0.854119 8.76221C1.08125 9.29558 1.40902 9.77966 1.81932 10.1877C2.23352 10.599 2.7142 10.9229 3.24986 11.1478C3.80468 11.3817 4.39275 11.5 5 11.5C5.60724 11.5 6.19531 11.3817 6.75014 11.1491C7.28447 10.9255 7.77036 10.5994 8.18067 10.1889C8.59488 9.77763 8.91959 9.29691 9.14587 8.76349C9.38074 8.21102 9.50123 7.61624 9.49999 7.01542C9.49999 6.38817 9.37215 5.77891 9.11775 5.20436Z"
              fill="#ff6500"
            ></path>
          </svg>
        </div>
        <h2 className={styles.title_h2}>LINKS RELACIONADOS</h2>
      </div>
      <div className={styles.tags_container}>
        {tagLinks.map((tag) => (
          <a key={tag.id} className={styles.hyperlink}>
            {tag.tagName}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TagsRelacionados;
