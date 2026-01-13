"use client";

import Header from "../organisms/Header";
import Sidebar from "../organisms/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>{children}</main>
    </div>
  );
}
