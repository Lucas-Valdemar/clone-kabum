"use client";
import React from "react";
import styles from "./OffersCore.module.css";
import Countdown from "../Countdown";

type Props = {
  // Props Requeridas
  productName: string;
  imgUrl: string;
  price: number;
  codigoProduto: number;

  // Props Opcionais
  isNinjaIndica?: boolean;
  oldPrice?: number | null;
  discount?: number | null;
  isPrimeNinja?: boolean;
  isFlash?: boolean;
  exclusiveOnPrimeNinjaPrice?: number | null;
};

const OffersCore: React.FC<Props> = ({
  productName,
  imgUrl,
  isNinjaIndica,
  oldPrice,
  price,
  discount,
  isPrimeNinja,
  isFlash,
  exclusiveOnPrimeNinjaPrice,
  codigoProduto,
}) => {
  const endDate = "26/12/2023 13:00";
  return (
    <section className={styles.section_container}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <div className={styles.header_left_icons}>
            <div
              className={
                isNinjaIndica === true
                  ? styles.ninja_indica_icon
                  : styles.hide_object
              }
            >
              <svg
                width="12px"
                height="100%"
                viewBox="5 5 15 15"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffffff"
                  d="M11.163 12.49a.939.939 0 1 1 1.328-1.328.939.939 0 0 1-1.328 1.328Zm4.05 4.486c-.772-.772-.984-3.23 1.21-3.812 2.285-.607 3.198-3.203 1.361-6.694.143.59-.257 1.42-.807 1.97-.773.773-3.23.985-3.812-1.211-.607-2.284-3.203-3.197-6.695-1.36.591-.143 1.42.258 1.97.807.773.773.984 3.23-1.21 3.813-2.285.606-3.197 3.202-1.36 6.694-.144-.59.256-1.42.806-1.97.773-.774 3.23-.985 3.813 1.21.607 2.285 3.202 3.197 6.694 1.36-.59.143-1.42-.257-1.97-.807Z"
                ></path>
              </svg>
              <span>NINJA INDICA</span>
            </div>
          </div>
          <div className={styles.buttons_container}>
            <button className={styles.favorito}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21.6L11.5875 21.3C11.1 20.9625 0 13.275 0 6.975V6.5625C0 2.9625 2.9625 0 6.6 0C8.8125 0 10.8 1.0875 12 2.85C13.2 1.0875 15.225 0 17.4 0C21.0375 0 24 2.925 24 6.5625V6.975C24 13.2375 12.9 20.9625 12.4125 21.3L12 21.6ZM6.6 1.5C3.7875 1.5 1.5 3.7875 1.5 6.5625V6.975C1.5 9.225 3.375 12.15 6.8625 15.525C9 17.5125 11.1 19.125 12 19.7625C12.9 19.125 15 17.5125 17.1375 15.525C20.625 12.15 22.5 9.225 22.5 6.975V6.5625C22.5 3.7875 20.2125 1.5 17.4 1.5C15.3 1.5 13.4625 2.7375 12.675 4.6875L12 6.45L11.2875 4.725C10.5375 2.775 8.6625 1.5 6.6 1.5Z"
                  fill="#b6bbc2"
                ></path>
              </svg>
            </button>

            <button className={styles.carrinho}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.svg_carrinho}
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 18.78V17.04H6.2C6.06 17 5.96 16.89 5.96 16.75L5.99 16.63L6.87 14.43H14.85C15.56 14.43 16.18 14.03 16.5 13.43L17.38 11.8C14.53 11.12 12.35 8.71 12.03 5.73H4.12L3.2 4H0V5.74H1.94L5.44 13.36L4.13 15.82C3.9 16.23 3.82 16.75 3.95 17.28C4.17 18.19 5.03 18.79 5.94 18.79H17.5V18.78Z"
                  fill="rgb(182, 187, 194)"
                ></path>
                <path
                  d="M16.18 20C15.1 20 14.23 20.9 14.23 22C14.23 23.1 15.1 24 16.18 24C17.26 24 18.14 23.1 18.14 22C18.13 20.9 17.25 20 16.18 20Z"
                  fill="rgb(182, 187, 194)"
                ></path>
                <path
                  d="M6.40001 20C5.32001 20 4.45001 20.9 4.45001 22C4.45001 23.1 5.32001 24 6.40001 24C7.48001 24 8.36001 23.1 8.36001 22C8.35001 20.9 7.47001 20 6.40001 20Z"
                  fill="rgb(182, 187, 194)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 0C16.238 0 14 2.23858 14 5C14 7.76203 16.2386 10 19 10C21.762 10 24 7.76142 24 5C24 2.23797 21.7614 0 19 0ZM18.4444 2.36249V4.44444H16.2236C15.9199 4.44444 15.6667 4.69318 15.6667 5C15.6667 5.30896 15.916 5.55556 16.2236 5.55556H18.4444V7.91529C18.4444 8.21902 18.6932 8.47222 19 8.47222C19.309 8.47222 19.5556 8.22288 19.5556 7.91529V5.55556H21.7764C22.0801 5.55556 22.3333 5.30682 22.3333 5C22.3333 4.69104 22.084 4.44444 21.7764 4.44444H19.5556V2.36249C19.5556 2.05876 19.3068 1.80556 19 1.80556C18.691 1.80556 18.4444 2.0549 18.4444 2.36249Z"
                  fill="rgb(182, 187, 194)"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <a
        href={`/produto/${codigoProduto}`}
        className={styles.product_page_link}
      >
        <div className={styles.img_container}>
          <img src={imgUrl} alt={productName} />
          <div className={styles.under_img_itens}>
            <div
              className={
                discount !== null ? styles.desconto_icon : styles.hide_object
              }
            >
              <div className={styles.desconto}>
                <svg
                  width="10"
                  viewBox="0 0 16 8"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 -3.65575e-06L16 0L8 8L0 -3.65575e-06Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <p>{`${discount}%`}</p>
            </div>
            <svg
              width="62"
              height="18"
              viewBox="0 0 47 14"
              fill="none"
              className={
                isFlash === true ? styles.flash_icon : styles.hide_object
              }
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C0 1.34315 1.34315 0 3 0H44C45.6569 0 47 1.34315 47 3V11C47 12.6569 45.6569 14 44 14H3C1.34315 14 0 12.6569 0 11V3Z"
                fill="#003A6A"
              ></path>
              <path
                d="M21.0381 3.82005V4.95005H18.1281V6.74005H20.3581V7.85005H18.1281V10.8H16.7281V3.82005H21.0381ZM23.4308 3.40005V10.8H22.0308V3.40005H23.4308ZM24.454 8.01005C24.454 7.45005 24.564 6.95338 24.784 6.52005C25.0107 6.08672 25.314 5.75338 25.694 5.52005C26.0807 5.28672 26.5107 5.17005 26.984 5.17005C27.3974 5.17005 27.7574 5.25338 28.064 5.42005C28.3774 5.58672 28.6274 5.79672 28.814 6.05005V5.26005H30.224V10.8H28.814V9.99005C28.634 10.25 28.384 10.4667 28.064 10.64C27.7507 10.8067 27.3874 10.89 26.974 10.89C26.5074 10.89 26.0807 10.77 25.694 10.53C25.314 10.29 25.0107 9.95338 24.784 9.52005C24.564 9.08005 24.454 8.57672 24.454 8.01005ZM28.814 8.03005C28.814 7.69005 28.7474 7.40005 28.614 7.16005C28.4807 6.91338 28.3007 6.72672 28.074 6.60005C27.8474 6.46672 27.604 6.40005 27.344 6.40005C27.084 6.40005 26.844 6.46338 26.624 6.59005C26.404 6.71672 26.224 6.90338 26.084 7.15005C25.9507 7.39005 25.884 7.67672 25.884 8.01005C25.884 8.34338 25.9507 8.63672 26.084 8.89005C26.224 9.13672 26.404 9.32672 26.624 9.46005C26.8507 9.59338 27.0907 9.66005 27.344 9.66005C27.604 9.66005 27.8474 9.59672 28.074 9.47005C28.3007 9.33672 28.4807 9.15005 28.614 8.91005C28.7474 8.66338 28.814 8.37005 28.814 8.03005ZM33.7114 10.89C33.258 10.89 32.8514 10.81 32.4914 10.65C32.1314 10.4834 31.8447 10.26 31.6314 9.98005C31.4247 9.70005 31.3114 9.39005 31.2914 9.05005H32.7014C32.728 9.26338 32.8314 9.44005 33.0114 9.58005C33.198 9.72005 33.428 9.79005 33.7014 9.79005C33.968 9.79005 34.1747 9.73672 34.3214 9.63005C34.4747 9.52338 34.5514 9.38672 34.5514 9.22005C34.5514 9.04005 34.458 8.90672 34.2714 8.82005C34.0914 8.72672 33.8014 8.62672 33.4014 8.52005C32.988 8.42005 32.648 8.31672 32.3814 8.21005C32.1214 8.10338 31.8947 7.94005 31.7014 7.72005C31.5147 7.50005 31.4214 7.20338 31.4214 6.83005C31.4214 6.52338 31.508 6.24338 31.6814 5.99005C31.8614 5.73672 32.1147 5.53672 32.4414 5.39005C32.7747 5.24338 33.1647 5.17005 33.6114 5.17005C34.2714 5.17005 34.798 5.33672 35.1914 5.67005C35.5847 5.99672 35.8014 6.44005 35.8414 7.00005H34.5014C34.4814 6.78005 34.388 6.60672 34.2214 6.48005C34.0614 6.34672 33.8447 6.28005 33.5714 6.28005C33.318 6.28005 33.1214 6.32672 32.9814 6.42005C32.848 6.51338 32.7814 6.64338 32.7814 6.81005C32.7814 6.99672 32.8747 7.14005 33.0614 7.24005C33.248 7.33338 33.538 7.43005 33.9314 7.53005C34.3314 7.63005 34.6614 7.73338 34.9214 7.84005C35.1814 7.94672 35.4047 8.11338 35.5914 8.34005C35.7847 8.56005 35.8847 8.85338 35.8914 9.22005C35.8914 9.54005 35.8014 9.82672 35.6214 10.08C35.448 10.3334 35.1947 10.5334 34.8614 10.68C34.5347 10.82 34.1514 10.89 33.7114 10.89ZM40.1606 5.18005C40.5806 5.18005 40.9539 5.27338 41.2806 5.46005C41.6073 5.64005 41.8606 5.91005 42.0406 6.27005C42.2273 6.62338 42.3206 7.05005 42.3206 7.55005V10.8H40.9206V7.74005C40.9206 7.30005 40.8106 6.96338 40.5906 6.73005C40.3706 6.49005 40.0706 6.37005 39.6906 6.37005C39.3039 6.37005 38.9973 6.49005 38.7706 6.73005C38.5506 6.96338 38.4406 7.30005 38.4406 7.74005V10.8H37.0406V3.40005H38.4406V5.95005C38.6206 5.71005 38.8606 5.52338 39.1606 5.39005C39.4606 5.25005 39.7939 5.18005 40.1606 5.18005Z"
                fill="white"
              ></path>
              <path
                d="M4 7.7814L10.7134 2.33337L8.07643 6.45524L12 6.26169L4.87898 11.6667L7.7707 7.58785L4 7.7814Z"
                fill="#FFD233"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.info_produtos}>
          <h2 className={styles.h2}>
            <span>{productName}</span>
          </h2>
          <div className={styles.princing}>
            <div
              className={
                oldPrice !== null ? styles.oldPrice : styles.hide_object
              }
            >
              {oldPrice !== null && oldPrice !== undefined
                ? `R$ ${oldPrice.toLocaleString("pt-br", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}`
                : `aa`}
            </div>
            <div className={styles.price_styles}>{`R$ ${price.toLocaleString(
              "pt-br",
              {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }
            )}`}</div>{" "}
            <span>À vista no PIX</span>
          </div>
          <div
            className={
              isPrimeNinja == true
                ? styles.prime_ninja_icon
                : styles.hide_object
            }
          >
            <svg
              width="82"
              height="16"
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 170 28"
            >
              <path
                fill="#FF6500"
                d="M22.768 1.349c-.806 2.508-1.508 4.619-2.156 6.745-.183.6-.604.854-1.085 1.133-.893.521-1.604 1.075-1.186 2.372.419 1.29 1.264 1.835 2.45 1.614 1.018-.19 1.682.146 2.39.76 1.445 1.257 2.942 2.463 4.764 3.977-2.754 0-5.06-.003-7.366 0-.643 0-.893-.566-1.306-.9-.773-.623-1.502-.814-2.413-.154-.89.645-1.345 1.366-.816 2.393.61 1.184.412 2.25-.107 3.408-.72 1.605-1.3 3.27-2.094 5.3-.846-2.61-1.557-4.816-2.277-7.018-.203-.618.266-1.023.436-1.523.293-.851.368-1.606-.468-2.272-.83-.66-1.796-1.072-2.528-.26-1.251 1.393-2.754 1.099-4.256 1.03-1.425-.064-2.853-.204-4.75-.343 2.25-1.62 4.185-3.02 6.13-4.407.322-.23.669.003 1.006.027.953.07 1.864.143 2.324-1.05.466-1.21.341-2.272-.806-2.82C7.429 8.775 7.16 7.778 6.89 6.654c-.406-1.72-.875-3.422-1.41-5.488 2.136 1.56 3.97 2.908 5.81 4.244.5.363.553.896.667 1.438.179.848.424 1.639 1.538 1.696 1.141.058 2.261-.127 2.429-1.396.22-1.693 1.38-2.372 2.613-3.114 1.312-.793 2.59-1.641 4.23-2.686zm-8.716 10.553c-.872.027-1.38.505-1.404 1.275-.027.857.51 1.384 1.4 1.354.813-.028 1.282-.521 1.276-1.33-.009-.82-.525-1.227-1.272-1.3z"
              ></path>
              <path
                fill="#0E1116"
                d="M58.423 2.796c.764 0 1.232-.69 1.232-1.398 0-.747-.503-1.398-1.18-1.398-.677 0-1.197.69-1.197 1.398 0 .709.468 1.398 1.145 1.398zM57.746 5.995v15.55h1.44V5.996h-1.44zM32.724 11.012c0-1.685-.035-3.332-.121-5.017h1.37l.122 3.236h.052c1.058-2.106 2.984-3.62 5.934-3.62 4.13 0 6.784 3.62 6.784 7.834 0 5.439-3.28 8.484-7.131 8.484-2.204 0-4.338-.996-5.518-3.18h-.052V28h-1.44V11.012zm1.44 4.271c0 .422.052.843.139 1.226.59 2.202 2.672 4.118 5.31 4.118 3.574 0 5.812-2.777 5.812-7.125 0-3.524-2.117-6.607-5.639-6.607-2.325 0-4.58 1.455-5.362 4.27-.121.422-.26.939-.26 1.36v2.758zM49.54 11.012c0-1.685-.034-3.332-.12-5.017h1.318l.052 3.37h.087c.711-2.164 2.22-3.753 4.32-3.753.243 0 .469.038.677.095v1.456c-.26-.058-.503-.058-.815-.058-1.961 0-3.47 1.82-3.94 4.501-.086.46-.138.996-.138 1.513v8.427h-1.44V11.012zM63.159 9.748c0-1.264-.035-2.49-.122-3.754h1.354L64.512 9h.052c1.024-1.935 2.499-3.41 5.067-3.41 2.238 0 3.817 1.724 4.424 3.697h.052c.417-.938.937-1.647 1.475-2.164 1.024-.977 2.082-1.513 3.835-1.513 1.319 0 5.049.785 5.049 7.258v8.676h-1.44v-8.657c0-3.926-1.527-5.917-4.112-5.917-1.961 0-3.488 1.55-4.113 3.14l-.045.181c-.1.385-.215.838-.215 1.332v9.902h-1.44v-9.442c0-3.045-1.492-5.113-3.87-5.113-2.134 0-3.747 1.876-4.372 3.6-.139.421-.26.977-.26 1.513v9.461h-1.44V9.748zM94.341 20.57c-3.348 0-5.951-2.26-5.951-6.8h11.695c.052-.268.052-.498.052-.976 0-2.069-.903-7.182-6.125-7.182-3.991 0-7.045 3.255-7.045 8.541 0 4.5 2.846 7.776 7.218 7.776 2.967 0 4.546-.804 5.05-1.073l-.382-1.264c-.902.46-2.082.977-4.511.977zm-.485-13.656c4.216 0 4.84 3.964 4.806 5.592H88.494c.295-2.356 1.787-5.592 5.362-5.592zM145.043 24.225c1.366-.109 2.372-.434 2.983-1.048.7-.723 1.006-1.951 1.006-5.167V6.576h4.851v12.68c0 3.234-.719 5.348-2.12 6.739-1.473 1.39-3.737 2.005-6.217 2.005l-.503-3.775zM154.027 2.367c0 1.282-.953 2.366-2.623 2.366-1.6 0-2.552-1.084-2.552-2.366 0-1.319.97-2.367 2.587-2.367 1.617-.018 2.57 1.048 2.588 2.367zM127.793 2.367c0 1.301-.971 2.367-2.624 2.367-1.581 0-2.551-1.066-2.551-2.367 0-1.318.97-2.366 2.587-2.366 1.617 0 2.57 1.03 2.588 2.366zM122.78 21.534V6.576h4.851v14.958h-4.851zM104.921 11.453c0-1.933-.054-3.56-.126-4.86h4.204l.216 2.186h.108c.539-.885 2.138-2.547 4.922-2.547 3.109 0 5.768 1.951 5.768 6.72v8.599h-4.851v-7.949c0-2.15-.809-3.504-2.641-3.504-1.474 0-2.3 1.047-2.624 1.896-.125.29-.143.705-.143 1.066v8.472h-4.851v-10.08h.018zM130.273 6.593c.072 1.3.126 2.927.126 4.86h-.018v10.08h4.851V13.06c0-.361.018-.776.144-1.066.323-.848 1.15-1.896 2.623-1.896 1.832 0 2.641 1.355 2.641 3.504v7.949h4.851v-8.6c0-4.768-2.659-6.719-5.767-6.719-2.785 0-4.384 1.662-4.923 2.547h-.108l-.216-2.186h-4.204zM165.347 20.052l.287 1.48H170c-.161-.776-.251-2.185-.251-3.684v-5.094c0-3.686-1.833-6.54-6.935-6.54-2.929 0-5.049.777-6.163 1.41l.898 3.07c1.025-.614 2.821-1.192 4.456-1.192 2.587-.018 2.929 1.21 2.929 1.879v.144c-5.893-.018-9.361 1.915-9.361 5.799 0 2.312 1.815 4.588 5.103 4.588 1.904 0 3.539-.65 4.563-1.86h.108zm-4.977-3.234c0-1.68 1.905-2.312 4.708-2.294h-.018v1.319c0 .27-.018.578-.09.83-.306.976-1.348 1.861-2.641 1.861-1.186 0-1.959-.596-1.959-1.716z"
              ></path>
              <defs>
                <clipPath>
                  <path
                    fill="#fff"
                    d="M0 0H27.945V26.833H0z"
                    transform="translate(0 1.167)"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.none}></div>
        </div>
      </a>
      <div className={styles.footer_container}>
        {/* Footer com prazo para fim da promoção */}
        <div
          className={
            exclusiveOnPrimeNinjaPrice === null
              ? styles.expiration_timer_footer
              : styles.hide_object
          }
        >
          <div className={styles.timer}>
            <div className={styles.timer_svg}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8768 0.102663C14.0236 0.18777 14.1372 0.320148 14.1991 0.478169C14.2609 0.63619 14.2673 0.810514 14.2173 0.972663L11.5158 9.75066H16.5003C16.6468 9.7506 16.7901 9.79344 16.9125 9.87389C17.0349 9.95434 17.1311 10.0689 17.1892 10.2034C17.2472 10.3378 17.2646 10.4864 17.2393 10.6306C17.2139 10.7749 17.1468 10.9086 17.0463 11.0152L5.0463 23.7652C4.93019 23.8886 4.77568 23.9691 4.60796 23.9935C4.44024 24.018 4.26919 23.9848 4.1227 23.8996C3.97622 23.8143 3.86292 23.682 3.80129 23.5241C3.73965 23.3662 3.73331 23.1921 3.7833 23.0302L6.4848 14.2507H1.5003C1.35382 14.2507 1.21052 14.2079 1.08811 14.1274C0.965693 14.047 0.869515 13.9325 0.811447 13.798C0.753379 13.6635 0.735963 13.5149 0.761349 13.3707C0.786735 13.2264 0.853812 13.0927 0.954299 12.9862L12.9543 0.236163C13.0703 0.112861 13.2245 0.0324155 13.392 0.00790543C13.5595 -0.0166046 13.7304 0.0162624 13.8768 0.101163V0.102663Z"
                  fill="#ffffffff"
                ></path>
              </svg>
            </div>
            <div className={styles.vertical_flex}>
              <div className={styles.timer_text}>TERMINA EM:</div>
              <div className={styles.timer_timer}>
                <Countdown endDate={endDate} />
              </div>
            </div>
          </div>
        </div>
        {/* Footer com preço exclusivo primeninja */}
        <div
          className={
            exclusiveOnPrimeNinjaPrice !== null
              ? styles.prime_ninja_footer
              : styles.hide_object
          }
        >
          <span>
            <b>
              {exclusiveOnPrimeNinjaPrice !== null &&
              exclusiveOnPrimeNinjaPrice !== undefined
                ? `R$ ${exclusiveOnPrimeNinjaPrice.toLocaleString("pt-br", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })} com`
                : `aa`}
            </b>
            <svg
              width="76"
              height="12"
              viewBox="0 0 292 49"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M39.1081 2.35954C37.7227 6.74847 36.5169 10.443 35.4035 14.1641C35.0905 15.2136 34.3671 15.6588 33.541 16.1465C32.0068 17.0582 30.7857 18.0282 31.504 20.2969C32.2223 22.555 33.6744 23.5091 35.7114 23.1221C37.461 22.7882 38.6001 23.3766 39.8161 24.4526C42.2995 26.6524 44.8701 28.762 48 31.4123C43.2693 31.4123 39.3082 31.407 35.3471 31.4123C34.2439 31.4123 33.8129 30.4211 33.1049 29.838C31.7759 28.7461 30.524 28.4122 28.9591 29.5677C27.43 30.6967 26.6501 31.9583 27.5583 33.7552C28.605 35.8278 28.2664 37.6936 27.3736 39.7184C26.137 42.5278 25.1416 45.4431 23.7768 48.9945C22.3247 44.4254 21.1036 40.5665 19.867 36.713C19.5181 35.6316 20.3237 34.9213 20.6161 34.0467C21.119 32.5573 21.2472 31.2374 19.8106 30.0713C18.3842 28.9157 16.7269 28.1948 15.4698 29.6154C13.3199 32.0537 10.7391 31.5395 8.1582 31.4176C5.71074 31.3063 3.25815 31.0625 0 30.8187C3.8636 27.9828 7.18846 25.5339 10.5287 23.1062C11.0828 22.7034 11.678 23.1115 12.2578 23.1539C13.8946 23.2759 15.4595 23.4031 16.2497 21.3146C17.0501 19.1997 16.8346 17.3391 14.8644 16.3797C12.7607 15.3567 12.2989 13.6128 11.8371 11.6463C11.1393 8.6355 10.3337 5.65654 9.41529 2.0415C13.0839 4.77133 16.2343 7.13011 19.395 9.46769C20.2518 10.1038 20.3442 11.0367 20.5392 11.9855C20.847 13.4697 21.2678 14.8531 23.1816 14.9539C25.1416 15.0546 27.0657 14.7312 27.3531 12.5103C27.7328 9.5472 29.7236 8.35986 31.8427 7.06121C34.0951 5.67244 36.2912 4.18826 39.1081 2.35954ZM24.136 20.827C22.6377 20.8747 21.7655 21.7122 21.7244 23.0585C21.6782 24.5586 22.6018 25.4809 24.1308 25.4279C25.5265 25.3802 26.332 24.5162 26.3218 23.1009C26.3064 21.6645 25.4187 20.9542 24.136 20.827Z"
                  fill="#FF6500"
                ></path>
              </g>
              <path
                d="M100.351 4.89328C101.662 4.89328 102.467 3.68671 102.467 2.44664C102.467 1.13953 101.602 0 100.44 0C99.2778 0 98.3837 1.20656 98.3837 2.44664C98.3837 3.68671 99.1884 4.89328 100.351 4.89328Z"
                fill="white"
              ></path>
              <path
                d="M99.1884 10.4904V37.705H101.662V10.4904H99.1884Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M56.2086 19.2716C56.2086 16.3223 56.149 13.4399 56 10.4906H58.3545L58.5631 16.1547H58.6525C60.4705 12.468 63.7787 9.82024 68.8452 9.82024C75.9384 9.82024 80.4983 16.1547 80.4983 23.5281C80.4983 33.0466 74.8655 38.3755 68.2492 38.3755C64.4641 38.3755 60.7983 36.6327 58.7717 32.812H58.6823V49H56.2086V19.2716ZM58.6823 26.7456C58.6823 27.483 58.7717 28.2203 58.9207 28.8906C59.934 32.7449 63.5104 36.0965 68.0405 36.0965C74.18 36.0965 78.0247 31.2367 78.0247 23.6287C78.0247 17.4618 74.3886 12.0658 68.3386 12.0658C64.3449 12.0658 60.4705 14.613 59.1294 19.5398C58.9207 20.2771 58.6823 21.182 58.6823 21.9194V26.7456Z"
                fill="white"
              ></path>
              <path
                d="M85.0941 19.2717C85.0941 16.3223 85.0345 13.4399 84.8855 10.4906H87.1505L87.2399 16.3893H87.3889C88.6109 12.6021 91.2038 9.82026 94.8099 9.82026C95.2272 9.82026 95.6146 9.88729 95.9723 9.98783V12.535C95.5252 12.4345 95.108 12.4345 94.5715 12.4345C91.2037 12.4345 88.6109 15.6185 87.8062 20.3106C87.6572 21.115 87.5678 22.0535 87.5678 22.9584V37.7052H85.0941V19.2717Z"
                fill="white"
              ></path>
              <path
                d="M108.485 17.0583C108.485 14.8462 108.425 12.7012 108.276 10.4892H110.601L110.809 15.7512H110.899C112.657 12.3661 115.19 9.78539 119.601 9.78539C123.446 9.78539 126.158 12.8018 127.201 16.2539H127.291C128.006 14.6116 128.9 13.3716 129.824 12.4666C131.582 10.7573 133.4 9.81891 136.41 9.81891C138.675 9.81891 145.083 11.193 145.083 22.5213V37.7039H142.609V22.5548C142.609 15.6841 139.987 12.1985 135.546 12.1985C132.178 12.1985 129.556 14.9133 128.483 17.6951C128.458 17.7973 128.431 17.9029 128.404 18.0114C128.235 18.6854 128.036 19.4768 128.036 20.3428V37.6704H125.562V21.1472C125.562 15.8182 122.999 12.1985 118.916 12.1985C115.25 12.1985 112.478 15.483 111.405 18.4994C111.167 19.2368 110.958 20.2087 110.958 21.1472V37.7039H108.485V17.0583Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M162.046 35.9959C156.294 35.9959 151.823 32.0411 151.823 24.0979H171.911C172 23.6287 172 23.2265 172 22.3886C172 18.7689 170.45 9.82026 161.479 9.82026C154.625 9.82026 149.379 15.5179 149.379 24.7682C149.379 32.6444 154.267 38.3756 161.777 38.3756C166.874 38.3756 169.586 36.9679 170.45 36.4987L169.795 34.2866C168.245 35.091 166.218 35.9959 162.046 35.9959ZM161.211 12.0993C168.453 12.0993 169.526 19.037 169.467 21.8859H152.002C152.509 17.7635 155.072 12.0993 161.211 12.0993Z"
                fill="white"
              ></path>
              <path
                d="M249.133 42.393C251.478 42.2033 253.206 41.6343 254.255 40.5594C255.459 39.2949 255.984 37.1453 255.984 31.5182V11.5074H264.316V33.6995C264.316 39.3581 263.081 43.0568 260.674 45.491C258.144 47.9252 254.255 49 249.997 49L249.133 42.393Z"
                fill="white"
              ></path>
              <path
                d="M264.563 4.14165C264.563 6.38615 262.927 8.28291 260.057 8.28291C257.311 8.28291 255.675 6.38615 255.675 4.14165C255.675 1.83393 257.341 0.000396004 260.119 0.000396004C262.896 -0.0312166 264.532 1.83393 264.563 4.14165Z"
                fill="white"
              ></path>
              <path
                d="M219.502 4.14289C219.502 6.419 217.835 8.28415 214.996 8.28415C212.281 8.28415 210.614 6.419 210.614 4.14289C210.614 1.83517 212.28 0.00163418 215.058 0.00163418C217.835 0.00163418 219.471 1.80355 219.502 4.14289Z"
                fill="white"
              ></path>
              <path
                d="M210.892 37.6839V11.5086H219.224V37.6839H210.892Z"
                fill="white"
              ></path>
              <path
                d="M180.216 20.0421C180.216 16.6595 180.123 13.8144 180 11.5383H187.221L187.592 15.3634H187.777C188.703 13.8144 191.449 10.906 196.233 10.906C201.571 10.906 206.139 14.3202 206.139 22.6659V37.7135H197.806V23.804C197.806 20.0421 196.418 17.6711 193.27 17.6711C190.739 17.6711 189.32 19.5047 188.764 20.9904C188.548 21.4962 188.517 22.2233 188.517 22.8556V37.6819H180.185V20.0421H180.216Z"
                fill="white"
              ></path>
              <path
                d="M223.763 11.5382C223.886 13.8144 223.979 16.6595 223.979 20.042H223.948V37.6819H232.28V22.8556C232.28 22.2233 232.311 21.4962 232.527 20.9904C233.083 19.5046 234.502 17.6711 237.033 17.6711C240.18 17.6711 241.569 20.0421 241.569 23.804V37.7135H249.901V22.6659C249.901 14.3202 245.334 10.906 239.995 10.906C235.212 10.906 232.465 13.8144 231.54 15.3634H231.354L230.984 11.5382H223.763Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M284.007 35.0902L284.501 37.6824H292C291.722 36.3231 291.568 33.8573 291.568 31.2334V22.3187C291.568 15.8697 288.42 10.8749 279.656 10.8749C274.626 10.8749 270.984 12.2343 269.071 13.3407L270.614 18.7148C272.373 17.64 275.459 16.6284 278.267 16.6284C282.711 16.5968 283.297 18.7465 283.297 19.9161V20.169C273.175 20.1374 267.219 23.52 267.219 30.3167C267.219 34.3631 270.336 38.3463 275.983 38.3463C279.255 38.3463 282.063 37.2082 283.822 35.0902H284.007ZM275.459 29.4315C275.459 26.4915 278.73 25.3851 283.544 25.4167H283.513V27.7244C283.513 28.1986 283.483 28.736 283.359 29.1786C282.834 30.8857 281.045 32.4347 278.823 32.4347C276.786 32.4347 275.459 31.3915 275.459 29.4315Z"
                fill="white"
              ></path>
              <defs>
                <clipPath>
                  <rect
                    width="48"
                    height="46.9583"
                    fill="white"
                    transform="translate(0 2.0415)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default OffersCore;
