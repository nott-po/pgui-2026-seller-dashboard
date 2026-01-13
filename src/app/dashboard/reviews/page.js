import PageLayout from "../../../components/layouts/PageLayout";
import ReviewsGrid from "../../../components/organisms/ReviewsGrid";

export const metadata = {
  title: "Opinie | Seller Dashboard",
};

export default function ReviewsPage() {
  return (
    <PageLayout title="Opinie klientów">
      <ReviewsGrid />
    </PageLayout>
  );
}
