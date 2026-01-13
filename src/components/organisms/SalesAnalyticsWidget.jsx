"use client";

import StatCard from "../molecules/StatCard";

export default function SalesAnalyticsWidget() {
  return (
    <div>
      <StatCard label="Przychód" value="12 400 zł" delta="+5%" />
      <StatCard label="Śr. koszyk" value="210 zł" />
      <StatCard label="Konwersja" value="2.3%" />
    </div>
  );
}
