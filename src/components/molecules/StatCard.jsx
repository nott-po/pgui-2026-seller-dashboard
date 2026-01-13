"use client";

import Badge from "../atoms/Badge";

export default function StatCard({ label = "Statystyka", value = "--", delta }) {
  return (
    <div>
      <div>{label}</div>
      <div>{value}</div>
      {delta && <Badge>{delta}</Badge>}
    </div>
  );
}
