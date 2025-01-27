"use client";
import React from "react";

export default function SectionHeader({ title, subtitle, children }) {
  return (
    <div className="mb-6 flex items-start justify-between">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h1>
        <p className="mt-2 text-gray-600">
          {subtitle}
        </p>
      </div>
      {/* Optional slot on the right side (e.g., “Add vendor” button) */}
      <div>{children}</div>
    </div>
  );
}
