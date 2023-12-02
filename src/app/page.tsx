import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Ofertas from "./components/Ofertas";
import AdsBanners from "./components/AdsBanners";
import MarcasRecomendadas from "./components/MarcasRecomendadas";
import Departamentos from "./components/Departamentos";
import OffersSection from "./components/OffersSection";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <OffersSection productsUrl="http://localhost:3000/ofertas" />
        <AdsBanners
          bannerUmSrc="./ads banners/ad1.webp"
          bannerDoisSrc="./ads banners/ad2.webp"
        />
        <MarcasRecomendadas />
        <OffersSection
          productsUrl="http://localhost:3000/destaques"
          sectionTitle="DESTAQUES NINJA"
          titleIconLink="http://localhost:3000/svgImg/1"
        />
        <Departamentos />
        <OffersSection
          productsUrl="http://localhost:3000/ofertas"
          sectionTitle="MAIS PROCURADOS"
          titleIconLink="http://localhost:3000/svgImg/2"
        />
        <OffersSection
          productsUrl="http://localhost:3000/destaques"
          sectionTitle="ACABARAM DE CHEGAR"
          titleIconLink="http://localhost:3000/svgImg/5"
        />
        <OffersSection
          productsUrl="http://localhost:3000/ofertas"
          sectionTitle="MAIS VENDIDOS"
          titleIconLink="http://localhost:3000/svgImg/3"
        />
      </main>
      <footer></footer>
    </>
  );
}
