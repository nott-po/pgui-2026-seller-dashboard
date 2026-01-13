import PageLayout from "../../../../components/layouts/PageLayout";
import OrderTable from "../../../../components/organisms/OrderTable";

export const metadata = {
  title: "Nieopłacone zamówienia | Seller Dashboard",
};

export default function UnpaidOrdersPage() {
  return (
    <PageLayout title="Nieopłacone zamówienia">
      <OrderTable />
    </PageLayout>
  );
}
