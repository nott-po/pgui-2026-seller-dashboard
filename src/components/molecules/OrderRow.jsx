"use client";

import Badge from "../atoms/Badge";

export default function OrderRow({ id = "#000", customer = "Klient", status = "Nowe", total = "0,00" }) {
  return (
    <div>
      <span>{id}</span>
      <span>{customer}</span>
      <Badge>{status}</Badge>
      <span>{total}</span>
    </div>
  );
}
