// Importa as definições do Next.js
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json([
    {
      id: 1,
      name: "Cadeira Gamer KBM! GAMING Tempest CG600, Preta, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - KGCG600PT",
      imgUrl:
        "/ofertas/cadeira-gamer-tempest-husky-gaming-light-grey-700_1621889965_m.jpg",
      isNinjaIndica: true,
      oldPrice: 1052.62,
      price: 739.99,
      discount: 25,
      isPrimeNinja: true,
      isFlash: false,
      exclusiveOnPrimeNinjaPrice: null,
      isFrontPageOffer: true,
    },
    {
      id: 2,
      name: "Notebook Gamer Acer Nitro 5 Intel Core I7-11800H, 16GB RAM, NVIDIA RTX3050, SSD 512GB, 15.6 LED FHD IPS, Linux, Preto - AN515-57-795J",
      imgUrl:
        "/ofertas/notebook-gamer-acer-nitro-5-intel-core-i7-11800h-16gb-ram-nvidia-rtx3050-ssd-512gb-15-6-led-fhd-ips-linux-preto-an515-57-795j_1696511422_m.jpg",
      isNinjaIndica: true,
      oldPrice: 4631.57,
      price: 4249.99,
      discount: 3,
      isPrimeNinja: true,
      isFlash: false,
      exclusiveOnPrimeNinjaPrice: null,
      isFrontPageOffer: true,
    },
    {
      id: 3,
      name: "Monitor Gamer LG UltraGear 27 Full HD, 144Hz, 1ms, IPS, HDMI e DisplayPort, HDR 10, 99% sRGB, FreeSync Premium, VESA - 27GN65R",
      imgUrl:
        "/ofertas/monitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r_1684763831_m.jpg",
      isNinjaIndica: false,
      oldPrice: 1105.25,
      price: 999.99,
      discount: 4,
      isPrimeNinja: true,
      isFlash: false,
      exclusiveOnPrimeNinjaPrice: null,
      isFrontPageOffer: true,
    },
    {
      id: 4,
      name: "Water Cooler Gamer Rise Mode, ARGB, Intel e AMD, 240mm, Preto - RM-WCB-04-ARGB",
      imgUrl:
        "/ofertas/water-cooler-gamer-rise-mode-argb-intel-e-amd-240mm-preto-rm-wcb-04-argb_1663778106_m.jpg",
      isNinjaIndica: false,
      oldPrice: 282.34,
      price: 225.99,
      discount: 5,
      isPrimeNinja: true,
      isFlash: false,
      exclusiveOnPrimeNinjaPrice: null,
    },
    {
      id: 5,
      name: "Placa de Vídeo RX 6750 XT MECH 2X 12G V1 Radeon, 12GB GDDR6, FreeSync, Dual Fan",
      imgUrl:
        "/ofertas/placa-de-video-rx-6750-xt-mech-2x-12g-v1-radeon-12gb-gddr6-freesync-dual-fan_1689965385_m.jpg",
      isNinjaIndica: false,
      oldPrice: 2049.99,
      price: 1939.99,
      discount: 5,
      isPrimeNinja: true,
      isFlash: false,
      exclusiveOnPrimeNinjaPrice: null,
    },
  ]);
}
