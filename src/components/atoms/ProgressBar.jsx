"use client";

export default function ProgressBar({ value = 0, max = 100 }) {
  return (
    <div>
      Progress: {value} of {max}
    </div>
  );
}
