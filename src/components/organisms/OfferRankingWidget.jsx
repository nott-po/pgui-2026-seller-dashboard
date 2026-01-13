"use client";

import ProductCard from "../molecules/ProductCard";
import { MOCK_PRODUCTS } from "../../lib/mockData";

export default function OfferRankingWidget() {
  return (
    <div>
      {MOCK_PRODUCTS.map((product) => (
        <ProductCard key={product.id} name={product.name} category={product.category} progress={product.progress} />
      ))}
    </div>
  );
}
