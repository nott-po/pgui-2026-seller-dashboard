"use client";

import Input from "../atoms/Input";
import Icon from "../atoms/Icon";

export default function SearchBar({ placeholder = "Szukaj" }) {
  return (
    <div>
      <Icon name="search" />
      <Input placeholder={placeholder} />
    </div>
  );
}
