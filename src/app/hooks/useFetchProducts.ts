"use client";
import { useState, useEffect } from "react";

export interface Products {
  id: number;
  name: string;
  imgUrl: string;
  price: number;

  isNinjaIndica?: boolean;
  oldPrice?: number | null;
  discount?: number | null;
  isPrimeNinja?: boolean | null;
  isFlash?: boolean | null;
  exclusiveOnPrimeNinjaPrice?: number | null;
  isFirstSectionOffer?: boolean | null;
  isDestaqueNinjaSectionOffer?: boolean | null;
  isMaisProcuradosSectionOffer?: boolean | null;
  isProdutosRecentesSectionOffer?: boolean | null;
  isMaisVendidosSectionOffer?: boolean | null;
}
// prettier-ignore

export const useFetchProducts = (productsUrl: string) => {
    
  const [firstSectionProducts, setFirstSectionProducts] = useState<Products[]>([]);
  const [secondSectionProducts, setSecondSectionProducts] = useState<Products[]>([]);
  const [thirdSectionProducts, setThirdSectionProducts] = useState<Products[]>([]);
  const [fourthSectionProducts, setFourthSectionProducts] = useState<Products[]>([]);
  const [fifthSectionProducts, setFifthSectionProducts] = useState<Products[]>([]);
    
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(productsUrl);
        const data = await res.json();

        // Filtro para produtos da primeira seção de ofertas da página inicial.
        const firstSectionProductsFiltered = data.filter(
          (product: Products) => product.isFirstSectionOffer
        );
        // Filtro para produtos da seção DESTAQUES NINJA da página inicial.
        const secondSectionProductsFiltered = data.filter(
          (product: Products) => product.isDestaqueNinjaSectionOffer
        );
        // Filtro para produtos da seção MAIS PROCURADOS da página inicial.
        const thirdSectionProductsFiltered = data.filter(
          (product: Products) => product.isMaisProcuradosSectionOffer
        );
        // Filtro para produtos da seção ACABARAM DE CHEGAR da página inicial.
        const fourthSectionProductsFiltered = data.filter(
          (product: Products) => product.isProdutosRecentesSectionOffer
        );
        // Filtro para produtos da seção MAIS VENDIDOS da página inicial.
        const fifthSectionProductsFiltered = data.filter(
          (product: Products) => product.isMaisVendidosSectionOffer
        );

        setFirstSectionProducts(firstSectionProductsFiltered);
        setSecondSectionProducts(secondSectionProductsFiltered);
        setThirdSectionProducts(thirdSectionProductsFiltered);
        setFourthSectionProducts(fourthSectionProductsFiltered);
        setFifthSectionProducts(fifthSectionProductsFiltered);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }

    fetchData();
  }, [productsUrl]);
  return {
    firstSectionProducts,
    secondSectionProducts,
    thirdSectionProducts,
    fourthSectionProducts,
    fifthSectionProducts,
  };
};
