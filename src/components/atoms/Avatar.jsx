"use client";

export default function Avatar({ src, alt = "User" }) {
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ) : (
    <span>{alt}</span>
  );
}
