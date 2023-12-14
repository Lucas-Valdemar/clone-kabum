"use client";
import { useState, useEffect } from "react";
import { Products } from "./useFetchProducts";

export const useFetchInfoProduct = (
  productUrl: string,
  codigoDoProduto: number
) => {
  const [productInfos, setProductInfos] = useState<Products[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(productUrl);
        const data = await res.json();
        const itemFilter = data.filter(
          (product: Products) => product.id === codigoDoProduto
        );
        setProductInfos(itemFilter);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    }

    fetchData();
  }, [productUrl, codigoDoProduto]);
  return {
    productInfos,
  };
};
