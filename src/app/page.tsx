import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import AdsBanners from "./components/AdsBanners";
import MarcasRecomendadas from "./components/MarcasRecomendadas";
import OffersSection from "./components/OffersSection";
import DepartamentoSection from "./components/DepartamentoSection";
import CarouselBanner from "./components/ResponsiveDynamicAd/CarouselBanner";
import PromotionBanners from "./components/PromotionBanners";
import TagsRelacionados from "./components/TagsRelacionados";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <OffersSection productsUrl="api/products" />
        <AdsBanners
          bannerUmSrc="./ads banners/ad1.webp"
          bannerDoisSrc="./ads banners/ad2.webp"
        />
        <MarcasRecomendadas />
        <OffersSection
          productsUrl="/products"
          sectionTitle="DESTAQUES NINJA"
          titleIconLink="https://complemento-clone-kabum.vercel.app/svgImg/1"
        />
        <DepartamentoSection />
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
        <CarouselBanner />
        <OffersSection
          productsUrl="https://complemento-clone-kabum.vercel.app/ofertas"
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
