"use client";
import React from "react";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Vendors",
      value: 398,
      change: "+12%",
      changeNote: "from last month",
      bgColor: "bg-white",
      icon: "🗃️", // Could swap for an SVG or Heroicon
    },
    {
      title: "Active Contracts",
      value: 183,
      change: "-5%",
      changeNote: "from last month",
      bgColor: "bg-white",
      icon: "✅",
    },
    {
      title: "Pending Applications",
      value: 24,
      change: "+4%",
      changeNote: "from last month",
      bgColor: "bg-white",
      icon: "⏳",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`shadow rounded-lg p-4 ${stat.bgColor} flex items-center space-x-4`}
        >
          <div className="text-3xl">{stat.icon}</div>
          <div>
            <div className="text-lg font-semibold text-gray-600">{stat.title}</div>
            <div className="text-2xl font-bold text-gray-500">{stat.value}</div>
            <div className="text-sm text-gray-500">
              <span
                className={
                  stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }
              >
                {stat.change}
              </span>{" "}
              {stat.changeNote}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
