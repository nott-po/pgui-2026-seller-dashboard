import OrderTable from "../../../components/organisms/OrderTable";
import PageLayout from "../../../components/layouts/PageLayout";

export const metadata = {
  title: "Zamówienia | Seller Dashboard",
};

export default function OrdersPage() {
  return (
    <PageLayout title="Zamówienia">
      <OrderTable />
    </PageLayout>
  );
}
