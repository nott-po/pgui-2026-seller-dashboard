import PageLayout from "../../../../components/layouts/PageLayout";
import OrderTable from "../../../../components/organisms/OrderTable";

export const metadata = {
  title: "Niewysłane zamówienia | Seller Dashboard",
};

export default function UnshippedOrdersPage() {
  return (
    <PageLayout title="Niewysłane zamówienia">
      <OrderTable />
    </PageLayout>
  );
}
