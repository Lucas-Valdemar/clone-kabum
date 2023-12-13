"use client";
import { useEffect } from "react";

import NavigationBar from "./components/Header/NavigationBar";
import Banner from "./components/MainBannerSection/Banner";
import AdsBanners from "./components/AdsBanners";
import MarcasRecomendadas from "./components/MarcasRecomendadas";
import OffersSection from "./components/ProductsCarousel/OffersSection";
import DepartamentoSection from "./components/DepartamentosCarousel/DepartamentoSection";
import CarouselBanner from "./components/ResponsiveDynamicAd/CarouselBanner";
import PromotionBanners from "./components/PromotionBanners";
import TagsRelacionados from "./components/TagsRelacionados";
import Footer from "./components/Footer/Footer";
import { useFetchProducts } from "./hooks/useFetchProducts";

export default function Home() {
  const productsUrl = "/api/products/";
  const {
    firstSectionProducts,
    secondSectionProducts,
    thirdSectionProducts,
    fourthSectionProducts,
    fifthSectionProducts,
  } = useFetchProducts(productsUrl);
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <OffersSection productsList={firstSectionProducts} />
        <AdsBanners
          bannerUmSrc="./ads banners/ad1.webp"
          bannerDoisSrc="./ads banners/ad2.webp"
        />
        <MarcasRecomendadas />
        <OffersSection
          productsList={secondSectionProducts}
          sectionTitle="DESTAQUES NINJA"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/1"
        />
        <DepartamentoSection />
        <OffersSection
          productsList={thirdSectionProducts}
          sectionTitle="MAIS PROCURADOS"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/2"
        />
        <OffersSection
          productsList={fourthSectionProducts}
          sectionTitle="ACABARAM DE CHEGAR"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/5"
        />
        <CarouselBanner />
        <OffersSection
          productsList={fifthSectionProducts}
          sectionTitle="MAIS VENDIDOS"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/3"
        />
        <PromotionBanners />
        <TagsRelacionados />
      </main>
      <Footer />
    </>
  );
}
