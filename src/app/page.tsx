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
        <OffersSection productsUrl="https://complemento-clone-kabum.vercel.app/ofertas" />
        <AdsBanners
          bannerUmSrc="./ads banners/ad1.webp"
          bannerDoisSrc="./ads banners/ad2.webp"
        />
        <MarcasRecomendadas />
        <OffersSection
          productsUrl="https://complemento-clone-kabum.vercel.app/destaques"
          sectionTitle="DESTAQUES NINJA"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/1"
        />
        <Departamentos />
        <OffersSection
          productsUrl="https://complemento-clone-kabum.vercel.app/ofertas"
          sectionTitle="MAIS PROCURADOS"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/2"
        />
        <OffersSection
          productsUrl="https://complemento-clone-kabum.vercel.app/destaques"
          sectionTitle="ACABARAM DE CHEGAR"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/5"
        />
        <OffersSection
          productsUrl="https://complemento-clone-kabum.vercel.app/ofertas"
          sectionTitle="MAIS VENDIDOS"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/3"
        />
      </main>
      <footer></footer>
    </>
  );
}
