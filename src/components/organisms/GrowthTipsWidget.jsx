"use client";

import TipCard from "../molecules/TipCard";
import { MOCK_TIPS } from "../../lib/mockData";

export default function GrowthTipsWidget() {
  return (
    <div>
      {MOCK_TIPS.slice(0, 2).map((tip) => (
        <TipCard key={tip.id} title={tip.title} description={tip.description} />
      ))}
    </div>
  );
}
