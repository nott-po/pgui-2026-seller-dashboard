"use client";

import NavigationItem from "../molecules/NavigationItem";
import { NAV_ITEMS } from "../../lib/constants";

export default function Sidebar() {
  return (
    <aside>
      {NAV_ITEMS.map((item) => (
        <NavigationItem key={item.path} label={item.label} icon={item.icon} />
      ))}
    </aside>
  );
}
