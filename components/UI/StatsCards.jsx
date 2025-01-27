'use client';
import React from 'react';
import { UserGroupIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function StatsCards() {
  const stats = [
    {
      title: 'Total Vendors',
      value: 398,
      change: '+12%',
      changeNote: 'from last month',
      icon: UserGroupIcon,
      // Light blue background circle
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Active Contracts',
      value: 183,
      change: '-5%',
      changeNote: 'from last month',
      icon: CheckCircleIcon,
      // Light green background circle
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Pending Applications',
      value: 24,
      change: '+4%',
      changeNote: 'from last month',
      icon: ClockIcon,
      // Light red background circle
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
        >
          {/* Icon with colored background circle */}
          <div className={`rounded-full p-4 ${stat.iconBg}`}>
            <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
          </div>

          {/* Text content */}
          <div>
            <div className="text-gray-800 font-semibold">{stat.title}</div>
            <div className="text-2xl font-bold mt-1 text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">
              <span
                className={
                  stat.change.startsWith('+')
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {stat.change}
              </span>{' '}
              {stat.changeNote}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
