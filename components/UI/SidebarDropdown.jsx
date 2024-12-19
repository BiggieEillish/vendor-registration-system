'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export default function SidebarDropdown({ title, icon: Icon, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between px-2 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-indigo-600 group font-semibold rounded-md transition"
      >
        <div className="flex items-center">
          <Icon className="h-5 w-5 mr-3 text-gray-400 group-hover:text-indigo-600" />
          <span>{title}</span>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
        )}
      </button>
      {isOpen && <div className="pl-8">{children}</div>}
    </div>
  );
}
