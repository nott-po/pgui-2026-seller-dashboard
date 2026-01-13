"use client";

import Avatar from "../atoms/Avatar";
import Badge from "../atoms/Badge";

export default function UserProfile({ name = "Użytkownik", role = "Sprzedawca" }) {
  return (
    <div>
      <Avatar alt={name} />
      <div>{name}</div>
      <Badge>{role}</Badge>
    </div>
  );
}
