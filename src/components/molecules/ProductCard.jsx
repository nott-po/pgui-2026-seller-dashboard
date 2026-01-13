"use client";

import Badge from "../atoms/Badge";
import ProgressBar from "../atoms/ProgressBar";

export default function ProductCard({ name = "Produkt", category = "Kategoria", progress = 50 }) {
  return (
    <div>
      <div>{name}</div>
      <div>{category}</div>
      <Badge>W trakcie</Badge>
      <ProgressBar value={progress} />
    </div>
  );
}
