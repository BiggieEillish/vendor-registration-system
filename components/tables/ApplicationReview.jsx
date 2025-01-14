'use client';

import { useState } from 'react';

const VendorsData = [
  {
    id: 1,
    registrationId: 'REG-001',
    companyName: 'ABC Supplies',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'John Doe',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 2,
    registrationId: 'REG-002',
    companyName: 'XYZ Solutions',
    vendorName: 'XYZ Vendor',
    contactPersonPrimary: 'Jane Smith',
    ssmRegistrationNumber: 'SSM789012',
  },
];

export default function ApplicationReviewTable({ onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVendors = VendorsData.filter((vendor) =>
    vendor.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-4 sm:space-y-0">
        <input
          type="text"
          placeholder="Search by Company Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-1/3"
        />
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Filter by
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            Sort by
          </button>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Registration ID</th>
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Company Name</th>
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Vendor Name</th>
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Contact Person</th>
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">SSM Registration Number</th>
              <th className="py-3 px-4 sm:px-6 border-b-2 border-gray-200 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredVendors.map((vendor, index) => (
              <tr
                key={vendor.id}
                className={`hover:bg-indigo-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-900">{vendor.registrationId}</td>
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{vendor.companyName}</td>
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{vendor.vendorName}</td>
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{vendor.contactPersonPrimary}</td>
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">{vendor.ssmRegistrationNumber}</td>
                <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm text-gray-600">
                  <button
                    className="mr-2 px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    onClick={() => onEdit(vendor)}
                  >
                    Approve
                  </button>
                  <button
                    className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={() => onDelete(vendor)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
