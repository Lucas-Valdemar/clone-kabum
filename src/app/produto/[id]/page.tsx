"use client";
import { useRouter } from "next/router";
import { useFetchInfoProduct } from "@/app/hooks/useFetchInfoProduct";
import { Products } from "@/app/hooks/useFetchProducts";
import { useState } from "react";

export default function Page({ params }: { params: { id: number } }) {
  const codigoDoProduto: number = +params.id;

  const productUrl = "/api/products/";
  const productInfos = useFetchInfoProduct(productUrl, codigoDoProduto);
  console.log(productInfos);
  console.log(typeof params.id, params.id);
  return <div>Código do produto {params.id}</div>;
}
