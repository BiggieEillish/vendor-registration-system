"use client";

import { useState } from 'react';
import { contractsData } from '@/utils/data'; // Import contractsData from utils

export default function AllContractInfoPage() {
  const [contracts, setContracts] = useState(contractsData);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContracts = contracts.filter(contract =>
    contract.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-black">List of Contracts</h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by Company Name"
            className="p-3 border border-gray-300 rounded-lg shadow-sm mb-4 sm:mb-0 sm:w-1/3 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <div className="flex space-x-4 ">
            <button className="bg-gray-300 text-black px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Filter by
            </button>
            <button className="bg-gray-300 text-black px-5 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Sort by
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Registration ID</th>
                <th className="py-3 px-4 text-left">Requested By</th>
                <th className="py-3 px-4 text-left">Company Name</th>
                <th className="py-3 px-4 text-left">Vendor Name</th>
                <th className="py-3 px-4 text-left">Contract Type</th>
                <th className="py-3 px-4 text-left">Contract Amount</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredContracts.length > 0 ? (
                filteredContracts.map((contract) => (
                  <tr key={contract.registrationID} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{contract.registrationID}</td>
                    <td className="py-3 px-4">{contract.requestedBy}</td>
                    <td className="py-3 px-4">{contract.companyName}</td>
                    <td className="py-3 px-4">{contract.vendorName}</td>
                    <td className="py-3 px-4">{contract.contractType}</td>
                    <td className="py-3 px-4">RM {contract.contractAmount.toLocaleString()}</td>
                    <td className="py-3 px-4">{contract.startDate}</td>
                    <td className="py-3 px-4">{contract.endDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                          Edit
                        </button>
                        <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="py-4 px-4 text-center text-gray-500">
                    No contracts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
