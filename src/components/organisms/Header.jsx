"use client";

import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import UserProfile from "../molecules/UserProfile";

export default function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <UserProfile />
    </header>
  );
}
