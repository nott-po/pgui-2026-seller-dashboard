import DashboardLayout from "../../components/layouts/DashboardLayout";

export const metadata = {
  title: "Pulpit | Seller Dashboard",
};

export default function DashboardShell({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
