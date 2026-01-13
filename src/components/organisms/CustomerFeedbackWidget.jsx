"use client";

import ReviewCard from "../molecules/ReviewCard";
import { MOCK_REVIEWS } from "../../lib/mockData";

export default function CustomerFeedbackWidget() {
  return (
    <div>
      {MOCK_REVIEWS.slice(0, 2).map((review) => (
        <ReviewCard key={review.id} author={review.author} comment={review.comment} score={review.score} />
      ))}
    </div>
  );
}
