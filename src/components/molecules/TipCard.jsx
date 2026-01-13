"use client";

import Icon from "../atoms/Icon";

export default function TipCard({ title = "Wskazówka", description = "Krótki opis" }) {
  return (
    <div>
      <Icon name="tip" />
      <div>{title}</div>
      <p>{description}</p>
    </div>
  );
}
