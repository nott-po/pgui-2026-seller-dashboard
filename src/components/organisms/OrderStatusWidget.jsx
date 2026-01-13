"use client";

import StatCard from "../molecules/StatCard";

export default function OrderStatusWidget() {
  return (
    <div>
      <StatCard label="Nowe" value="12" />
      <StatCard label="W realizacji" value="8" delta="+2" />
      <StatCard label="Zamknięte" value="15" />
    </div>
  );
}
