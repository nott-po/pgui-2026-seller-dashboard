"use client";

import Rating from "../atoms/Rating";
import Avatar from "../atoms/Avatar";

export default function ReviewCard({ author = "Klient", comment = "Treść opinii", score = 4 }) {
  return (
    <article>
      <Avatar alt={author} />
      <div>{author}</div>
      <Rating value={score} />
      <p>{comment}</p>
    </article>
  );
}
