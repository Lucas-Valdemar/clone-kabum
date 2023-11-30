import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Ofertas from "./components/Ofertas";
import AdsBanners from "./components/AdsBanners";
import MarcasRecomendadas from "./components/MarcasRecomendadas";
import DestaquesNinja from "./components/DestaquesNinja";
import Departamentos from "./components/Departamentos";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <Banner />
        <Ofertas />
        <AdsBanners
          bannerUmSrc="./ads banners/ad1.webp"
          bannerDoisSrc="./ads banners/ad2.webp"
        />
        <MarcasRecomendadas />
        <DestaquesNinja
          title="DESTAQUES NINJA"
          svgUrl="http://localhost:3000/svgImg/1"
        />
        <Departamentos />
      </main>
      <footer></footer>
    </>
  );
}
