import OrderStatusWidget from "../../components/organisms/OrderStatusWidget";
import SalesAnalyticsWidget from "../../components/organisms/SalesAnalyticsWidget";
import CustomerFeedbackWidget from "../../components/organisms/CustomerFeedbackWidget";
import GrowthTipsWidget from "../../components/organisms/GrowthTipsWidget";
import OfferRankingWidget from "../../components/organisms/OfferRankingWidget";
import PageLayout from "../../components/layouts/PageLayout";

export default function DashboardPage() {
  return (
    <div>
      <PageLayout title="Pulpit">
        <div>
          <OrderStatusWidget />
          <SalesAnalyticsWidget />
        </div>
      </PageLayout>

      <PageLayout title="Opinie klientów">
        <CustomerFeedbackWidget />
      </PageLayout>

      <PageLayout title="Wskazówki wzrostu">
        <div>
          <GrowthTipsWidget />
          <OfferRankingWidget />
        </div>
      </PageLayout>
    </div>
  );
}
