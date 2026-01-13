"use client";

export default function Rating({ value = 0, outOf = 5 }) {
  return <span>{value} / {outOf}</span>;
}
