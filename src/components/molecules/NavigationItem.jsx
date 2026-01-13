"use client";

import Icon from "../atoms/Icon";

export default function NavigationItem({ label, icon = "dot" }) {
  return (
    <button>
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
}
