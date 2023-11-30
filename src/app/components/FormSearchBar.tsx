import React from "react";
import styles from "./FormSearchBar.module.css";

const FormSearchBar = () => {
  return (
    <div>
      <form className={styles.search_form}>
        <label htmlFor="form_input"></label>
        <div className={styles.input_button_layout}>
          <input
            id="form_input"
            className={styles.form_input}
            placeholder="Busca..."
          ></input>
          <button type="submit" className={styles.submit_button}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0073 8.73113H9.37176L9.15083 8.51364C9.93128 7.61116 10.4059 6.44118 10.4059 5.15929C10.4059 2.30976 8.07662 -2.57492e-05 5.20297 -2.57492e-05C2.32933 -2.57492e-05 0 2.30976 0 5.15929C0 8.00882 2.32933 10.3186 5.20297 10.3186C6.49571 10.3186 7.67479 9.84872 8.58491 9.07561L8.80583 9.2931V9.92174L12.8065 13.8833L14 12.6998L10.0073 8.73113ZM5.20338 8.73088C3.21344 8.73088 1.60132 7.13228 1.60132 5.15904C1.60132 3.18659 3.21344 1.5872 5.20338 1.5872C7.19252 1.5872 8.80545 3.18659 8.80545 5.15904C8.80545 7.13228 7.19252 8.73088 5.20338 8.73088Z"
                fill="#7F858D"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSearchBar;
