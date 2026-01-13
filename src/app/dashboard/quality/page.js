import PageLayout from "../../../components/layouts/PageLayout";
import SalesQualityWidget from "../../../components/organisms/SalesQualityWidget";

export const metadata = {
  title: "Jakość sprzedaży | Seller Dashboard",
};

export default function QualityPage() {
  return (
    <PageLayout title="Jakość sprzedaży">
      <SalesQualityWidget />
    </PageLayout>
  );
}
