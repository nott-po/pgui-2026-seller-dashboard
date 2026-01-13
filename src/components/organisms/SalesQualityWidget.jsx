"use client";

import ProductCard from "../molecules/ProductCard";
import { MOCK_PRODUCTS } from "../../lib/mockData";

export default function SalesQualityWidget() {
  return (
    <div>
      {MOCK_PRODUCTS.slice(0, 2).map((product) => (
        <ProductCard key={product.id} name={product.name} category={product.category} progress={product.progress} />
      ))}
    </div>
  );
}
