'use client';

import { useState } from 'react';
import { FiSearch, FiCalendar, FiChevronDown } from 'react-icons/fi';
import { BsPencil, BsTrash } from 'react-icons/bs';

// Exactly the same rows you have in the screenshot:
const CONTRACTS_DATA = [
  {
    id: 1,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 2,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 3,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 4,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Best Suppliers',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 5,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 6,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Best Suppliers',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 7,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 8,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Best Suppliers',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 9,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Global Solutions',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
  {
    id: 10,
    registrationId: 'CNTR_001',
    requestedBy: 'Mike Tim',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'Best Suppliers',
    contractType: 'Service Agreement',
    contractAmount: 'RM 50, 000',
    startDate: '4 Jan, 2025',
    endDate: '4 Apr, 2025',
  },
];

export default function AllContractsPage() {
  // State for search
  const [searchTerm, setSearchTerm] = useState('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // show 6 rows per page (just an example)
  const totalPages = Math.ceil(CONTRACTS_DATA.length / itemsPerPage);

  // Filter + slice for pagination
  const filteredContracts = CONTRACTS_DATA.filter(contract =>
    contract.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredContracts.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset to page 1 on search
  };

  // For demonstration
  const onEdit = (item) => console.log('Edit', item);
  const onDelete = (item) => console.log('Delete', item);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Container with white background, just like the screenshot */}
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        
        {/* ---------- Top row: Search + Set Date + All ---------- */}
        <div className="flex items-center flex-wrap gap-2 justify-between">
          
          {/* Search input (pill style) */}
          <div className="relative flex-grow max-w">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <FiSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="     Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Round search button (optional if you want a separate “go” action) */}
          
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <FiSearch />
          </button>
          

          {/* "Set Date" button */}
          <button className="flex items-center space-x-2 border border-blue-600 text-blue-600 
                             px-4 py-2 rounded-full hover:bg-blue-50">
            <span>Set Date</span>
            <FiCalendar />
          </button>

          {/* "All" button (dropdown icon) */}
          <button className="flex items-center space-x-1 border border-blue-600 text-blue-600 
                             px-4 py-2 rounded-full hover:bg-blue-50">
            <span>All</span>
            <FiChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* ---------- Table ---------- */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            {/* Table head with light-blue background, uppercase headings */}
            <thead>
              <tr className="bg-blue-100 border-b border-blue-200">
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Registration ID
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Requested By
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Company Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Vendor Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Contract Type
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Contract Amount
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Start Date
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  End Date
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((contract, index) => (
                  <tr
                    key={contract.id}
                    className={`border-b last:border-0 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-3 px-4 text-sm text-gray-800">
                      {contract.registrationId}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.requestedBy}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.companyName}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.vendorName}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.contractType}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.contractAmount}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.startDate}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {contract.endDate}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onEdit(contract)}
                          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <BsPencil className="text-blue-600" />
                        </button>
                        <button
                          onClick={() => onDelete(contract)}
                          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          <BsTrash className="text-blue-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="py-4 px-4 text-center text-sm text-gray-500"
                  >
                    No contracts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ---------- Pagination ---------- */}
        <div className="flex items-center justify-between pt-4">
          {/* Page buttons: 1,2,3,... */}
          <div className="space-x-2">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    pageNum === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Prev / Next */}
          <div className="space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-full transition-colors ${
                currentPage === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-full transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
