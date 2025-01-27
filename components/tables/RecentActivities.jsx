"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function RecentActivities() {
  const [filter, setFilter] = useState("all");
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activitiesData = [
    { date: "Today", type: "New Application", company: "Tech Corporation", status: "New" },
    { date: "Today", type: "Vendor Added", company: "Tech Corporation", status: "Active" },
    { date: "Today", type: "Vendor Added", company: "Service Pro", status: "Active" },
    { date: "Today", type: "Vendor Added", company: "Global Logistics Co.", status: "Active" },
    { date: "Today", type: "Application", company: "Tech Corporation", status: "Pending" },
    { date: "Yesterday", type: "Contract Renewal", company: "Service Pro", status: "Active" },
    { date: "Yesterday", type: "Vendor Added", company: "Global Logistics Co.", status: "New" },
    { date: "Yesterday", type: "Application", company: "Tech Corporation", status: "Pending" },
    { date: "Yesterday", type: "Vendor Added", company: "Service Pro", status: "Active" },
  ];

  const filteredData = activitiesData.filter((item) => {
    if (filter === "all") return true;
    return item.status.toLowerCase() === filter;
  });

  const handleActionsClick = (event, activity) => {
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setSelectedActivity(activity);
    setShowMenu(true);
  };

  const handleView = () => {
    alert(`Viewing: ${selectedActivity?.company}`);
    setShowMenu(false);
  };

  const handleDelete = () => {
    alert(`Deleting: ${selectedActivity?.company}`);
    setShowMenu(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-menu")) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
        <div className="inline-flex items-center space-x-1 border border-gray-300 bg-white rounded-full px-2 py-1">
          <button
            className={`px-4 py-2 text-sm rounded-full focus:outline-none ${
              filter === "all" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setFilter("all")}
          >
            View All
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-full focus:outline-none ${
              filter === "pending" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-full focus:outline-none ${
              filter === "active" ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
            }`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </div>
      </div>

      <div className="h-96 overflow-y-auto overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-left border-b border-gray-200 bg-gray-50">
              <th className="py-3 px-4 font-semibold text-gray-600">DATE</th>
              <th className="py-3 px-4 font-semibold text-gray-600">TYPE</th>
              <th className="py-3 px-4 font-semibold text-gray-600">COMPANY</th>
              <th className="py-3 px-4 font-semibold text-gray-600">STATUS</th>
              <th className="py-3 px-4 font-semibold text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((activity, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4 text-gray-800">{activity.date}</td>
                <td className="py-3 px-4 text-gray-800">{activity.type}</td>
                <td className="py-3 px-4 text-gray-800">{activity.company}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      activity.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : activity.status === "Pending"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={(e) => handleActionsClick(e, activity)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dropdown menu rendered in React Portal */}
      {showMenu &&
        createPortal(
          <div
            className="absolute dropdown-menu bg-white border border-gray-200 rounded shadow-md z-50"
            style={{ top: menuPosition.top, left: menuPosition.left }}
          >
            <button
              onClick={handleView}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              View
            </button>
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
            >
              Delete
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}
