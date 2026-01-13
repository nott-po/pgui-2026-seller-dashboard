"use client";

import OrderRow from "../molecules/OrderRow";
import { MOCK_ORDERS } from "../../lib/mockData";

export default function OrderTable() {
  return (
    <div>
      {MOCK_ORDERS.map((order) => (
        <OrderRow key={order.id} id={order.id} customer={order.customer} status={order.status} total={order.total} />
      ))}
    </div>
  );
}
