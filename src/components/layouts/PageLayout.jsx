"use client";

export default function PageLayout({ title = "Tytuł", children }) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
